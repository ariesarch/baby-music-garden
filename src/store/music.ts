import { create } from 'zustand'
// import Sample from "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";
// import Sample from '/public/audio/sample.mp3'
// import WaterMark from '../audio/Enya - 1988 Watermark - 01 - Watermark.mp3'
// import Perficio from "../audio/Enya - 1988 Watermark - 02 - Cursum Perficio.mp3"
// import OnYourShore from "../audio/Enya - 1988 Watermark - 03 - On Your Shore.mp3"
// import StormsInAfrica from "../audio/Enya - 1988 Watermark - 04 - Storms In Africa.mp3"
// import Exile from "../audio/Enya - 1988 Watermark - 05 - Exile.mp3"
// import MissClareRemembers from "../audio/Enya - 1988 Watermark - 06 - Miss Clare Remembers.mp3"
// import OrinocoFlow from "../audio/Enya - 1988 Watermark - 07 - Orinoco Flow.mp3"
// import EveningFalls from "../audio/Enya - 1988 Watermark - 08 - Evening Falls.mp3"
// import River from "../audio/Enya - 1988 Watermark - 09 - River.mp3"
// import TheLongships from "../audio/Enya - 1988 Watermark - 10 - The Longships.mp3"
// import NaLaethaGealMOigev from "../audio/Enya - 1988 Watermark - 11 - Na Laetha Geal MOige.mp3"
// import ShepherdMoons from "../audio/Enya - 1991 Shepherd Moons - 01 - Shepherd Moons.mp3"
// import Flute from "../audio/Flute.mp3"
// import GentleRain from "../audio/Gentle-rain-and-rolling-thunder-sound.mp3"
const audioState = [
    {
        id:1,
        name: "Enya - 1988 Watermark - 01 - Watermark",
        // src: "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2001%20-%20Watermark.mp3"
    },
    {
        id:2,
        name: "Enya - 1988 Watermark - 02 - Cursum Perficio",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2002%20-%20Cursum%20Perficio.mp3"
    },
    {
        id:3,
        name: "Enya - 1988 Watermark - 03 - On Your Shore",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2003%20-%20On%20Your%20Shore.mp3"
    },
    {
        id:4,
        name: "Enya - 1988 Watermark - 04 - Storms In Africa",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2004%20-%20Storms%20In%20Africa.mp3"
    },
    {
        id:5,
        name: "Enya - 1988 Watermark - 05 - Exile",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2005%20-%20Exile.mp3"
    },
    {
        id:6,
        name: "Enya - 1988 Watermark - 06 - Miss Clare Remembers",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2006%20-%20Miss%20Clare%20Remembers.mp3"
    },
    {
        id:7,
        name: "Enya - 1988 Watermark - 07 - Orinoco Flow",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2007%20-%20Orinoco%20Flow.mp3"
    },
    {
        id:8,
        name: "Enya - 1988 Watermark - 08 - Evening Falls",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2008%20-%20Evening%20Falls.mp3"
    },
    {
        id:9,
        name: "Enya - 1988 Watermark - 09 - River",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2009%20-%20River.mp3"
    },
    {
        id:10,
        name: "Enya - 1988 Watermark - 10 - The Longships",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201988%20Watermark%20-%2010%20-%20The%20Longships.mp3"
    },
    {
        id: 11,
        name: "Enya - 1988 Watermark - 11 - Na Laetha GealM Oigev",
        src: "https://archive.org/download/1Enya1/Enya%20-%201988%20Watermark%20-%2011%20-%20Na%20Laetha%20Geal%20M%60Oige.mp3"
    },
    {
        id: 12,
        name: "Enya - 1991 Shepherd Moons - 01 - Shepherd Moons",
        src: "https://ia601007.us.archive.org/21/items/1Enya1/Enya%20-%201991%20Shepherd%20Moons%20-%2001%20-%20Shepherd%20Moons.mp3"
    },
    // {
    //     id: 13,
    //     name: "Flute",
    //     src: Flute
    // },
    // {
    //     id: 14,
    //     name: "GentleRain",
    //     src: GentleRain
    // }
]
export default audioState;