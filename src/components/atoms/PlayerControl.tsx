// import audio from '../../../audio/sample.mp3';
// const audio: any = require("../../../public/audio/sample.mp3");
'use client'
import { createRef, useEffect, useRef, useState } from 'react';
import Icon from '../ui/icon';
import { musicStore } from '@/store';
import format from "format-duration";
import audioState from '@/store/music';

export interface Music {
    id: number,
    name: string,
    src: string,
}
export const PlayerControl = () => {
    const audioRef = useRef<any>();
    const elRef = createRef<any>();
    const { currentMusic, setCurrentMusic,setIsPlaying, isPlaying, changeMusic, currentProgress, setCurrentProgress,currentMusicTime,setCurrentMusicTime } = musicStore((state) => state);
    const playClickHandler = () => {
        audioRef.current.currentTime = currentMusicTime;
        if (audioRef?.current.paused || audioRef?.current.ended) {
            audioRef?.current.play();
            setIsPlaying(true);
        } else {
            audioRef?.current.pause();
            setIsPlaying(false);
        }
    }
    const nextClickHandler = () => {
        changeMusic('next')
    }
    const prevClickHandler = () => {
        changeMusic('prev')
    }
    const [syncDataEng, setSyncDataEng] = useState([]);
    const [endTime, setEndTime] = useState(4);

    const cur_duration_format = format(currentMusicTime * 1000, { leading: true });
    const end_duration_format = format(endTime * 1000, { leading: true });
    const [formatted_current_time,setFormattedCurrentTime] = useState("0")
    const [formatted_end_time,setFormattedEndTime] = useState("0");
    const onSkip = (e:any) => {
        const pos =
            (e.pageX - elRef.current.offsetLeft) / elRef.current.offsetWidth;
        audioRef.current.currentTime = pos * audioRef.current.duration;
    };
    useEffect(()=>{
        const audioElement = audioRef.current;
        const handleLoadedMetadata = () => {
            const duration = audioElement.duration;
            setEndTime(duration);
        };
        const HandleTimeUpdate = () => {
            if (!audioElement) return;
            setCurrentMusicTime(audioElement.currentTime);
            // setCurrentProgress((audioElement.currentTime / audioElement.duration) * 100);
            // if (!isNaN(audioElement.duration)) {
                setFormattedCurrentTime(format(currentMusicTime * 1000, { leading: true }))
                setFormattedEndTime(format(endTime * 1000, { leading: true }));
                setCurrentProgress(((audioElement.currentTime / audioElement.duration) * 100)||0);
            // }
        };
        const handleEnded = () => {
            changeMusic('next'); // Change to the next music when current one ends
        };

        if(currentMusic) {
            audioElement.src = currentMusic.src
            if (isPlaying) {
                audioElement.play();
            } 
            if(currentMusicTime >0) {
                audioElement.currentTime = currentMusicTime;
            }
            audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
            audioElement.addEventListener('timeupdate', HandleTimeUpdate);   
            audioElement.addEventListener('ended', handleEnded);  
        }else{
            setCurrentMusic(audioState[0] as Music)
        }
        return () => {
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audioElement.removeEventListener('timeupdate', HandleTimeUpdate);
            audioElement.removeEventListener('ended', handleEnded); 
        };
    }, [currentMusic])
    return (
        <div className="flex flex-col">
            <b className='text-indigo-800 font-extrabold'>{currentMusic?.name}</b>
            <div className="w-1/2 flex items-center gap-2 justify-start">
                <div className='cursor-pointer'>
                    <Icon className='text-3xl' icon="repeat-once" />
                </div>
                <div className='cursor-pointer' onClick={prevClickHandler}>
                    <Icon className='text-3xl' icon='previous-fill' />
                </div>
                <div className='cursor-pointer' onClick={playClickHandler}>
                    <Icon className='text-3xl' icon={isPlaying ? 'pause-fill' : 'play-fill'} />
                </div>
                <div className='cursor-pointer' onClick={nextClickHandler}>
                    <Icon className='text-3xl' icon='next-fill' />
                </div>
                <div className='cursor-pointer'>
                    <Icon className='text-3xl' icon='shuffle-arrows' />
                </div>
                {/* audio controls */}
                <audio ref={audioRef} autoPlay={false}>
                    {/* <source src="../../../audio/sample.mp3" type="audio/mpeg" /> */}
                    <source src={currentMusic?.src} type="audio/mpeg" />
                    {/* <source  src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" type="audio/mpeg" /> */}
                    <p className="text-red-400">Youjr browser does not support the audio element.</p>
                </audio>

            </div>
            {/* <div className="h-3 bg-red-400 cursor-pointer"> */}
            <progress ref={elRef} value={currentProgress} onClick={onSkip} max="100" className='h-1 w-full bg-red-400 cursor-pointer'></progress>
            {/* </div> */}
            <div className="flex justify-between">
                <div className="start">
                    {cur_duration_format}
                </div>
                <div className="start">
                    {end_duration_format}
                </div>
            </div>
        </div>
    )
}