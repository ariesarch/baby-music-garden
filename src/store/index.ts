import { create } from 'zustand'
import audioState from './music'
import { persist } from 'zustand/middleware'


export interface Music {
    id: number,
    name: string,
    src: string,
}

interface state {
    // musics: Music[],
    currentMusic: Music | null,
    isPlaying: boolean,
    repeatType: RepeatType,
    currentMusicTime: number,
    currentProgress: number
}
type ChangeMusicType = "next" | "prev"
type RepeatType = "off" | "once" | "shuffle" | "all"
interface AppLocalStorage {
    currentMusic: Music,
    isPlaying: boolean,
    currentProgress: number,
    playList: Music[],
    currentMusicTime: number,
    repeatType: RepeatType,
}

interface Actions {
    setCurrentMusic: (music: Music) => void,
    setIsPlaying: (val: boolean)=>void,
    changeMusic: (type: ChangeMusicType)=> void,
    setInitialApp: (payload: AppLocalStorage) => void,
    setRepeatType: (type: RepeatType) => void,
    setCurrentMusicTime: (time: number) => void,
    setCurrentProgress: (progress:number)=> void
}
// type AppLocalStorageType = "currentMusic" | "playlist" | "playListId" | "currentMusicTime" | "volume" | "repeat" | "shuffle"
type AppLocalStoragePayload =
| { type: "currentMusic"; music: Music }
| { type: "playlist"; playlist: Music[], id: string }
| { type: "isPlaying"; isPlaying: boolean }
| { type: "currentMusicTime"; time: number }
| { type: "volume"; volume: number }
| { type: "repeat"; repeatType: RepeatType }
| { type: "shuffle"; array: number[]};
// interface AppStoreState {
//     currentMusic: Music,
//     isPlaying: boolean,
//     volume: number,
//     playList: Music[],
//     repeatType: RepeatType,
//     initiateApp: (payload: AppLocalStoragePayload) => void,
//     setRepeatType: (type: RepeatType) => void
// }
export const musicStore = create(persist<state & Actions>(
    (set,get) => ({
    currentMusic: null,
    isPlaying: false,
    repeatType: "all",
    playList: [],
    currentMusicTime:0,
    currentProgress: 0,
    setInitialApp:(payload: AppLocalStorage)=> {
        set(()=>(
            {
                currentMusic: payload.currentMusic,
                isPlaying:false,
                repeatType: payload.repeatType,
                playList: payload.playList,
                currentMusicTime: payload.currentMusicTime,
                currentProgress: payload.currentProgress
            })
        )
    },
    setCurrentMusic: (music: Music | null) => set({ currentMusic: music }), // Action to set the current song
    setIsPlaying:(value: boolean) => set({isPlaying:value}),
    setRepeatType: (type: RepeatType) => set ({ repeatType: type }),
    changeMusic:(type:ChangeMusicType)=> {
        const playList = audioState
        const playlistLength = playList.length
        const currentMusic = musicStore.getState().currentMusic
        let nextMusic : Music;
        let currentMusicIndex = playList.findIndex(music=>music.id === currentMusic?.id)
        if ( type === "next" ) {
            if ( currentMusicIndex + 1 === playlistLength ) {
                currentMusicIndex = -1;
            }
            currentMusicIndex += 1;
        }else{
            if (currentMusicIndex > 0 ) {
                currentMusicIndex -= 1;
            }
        }
        nextMusic = playList[currentMusicIndex]
        set({ currentMusic: nextMusic,currentMusicTime: 0 });
    },
    setCurrentMusicTime: (time: number) => set({currentMusicTime:time}),
    setCurrentProgress: (progress:number)=> set({currentProgress:progress})
}),
//  { name: 'baby-music', getStorage: () => sessionStorage ,skipHydration:true}
 { name: 'baby-music'}
));