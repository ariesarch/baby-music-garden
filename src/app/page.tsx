// 'use client'
import { PlayerControl } from "@/components/atoms/PlayerControl";
import Image from "next/image";
import { Button } from "rts-library";
import 'rts-library/dist/style.css';
import { musicStore } from "@/store"; 
import { useEffect } from "react";
import BearBox from "@/components/atoms/BearBox";
import { FlipBook } from "@/components/atoms/FlipBook";

export default function Home() {
  // const {currentMusic,setIsPlaying,isPlaying,setInitialApp} = musicStore((state)=>state);
  // useEffect(() => {
  //   const storedData = JSON.parse(sessionStorage.getItem('baby-music') || '{}');
  //   console.log("Dat:", storedData)
  //   // setInitialApp(storedData);
  // }, []);
  // useEffect(() => {
  //   musicStore.persist.rehydrate();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">

      {/* <div className="w-full h-full flex items-center bg-gray-700 overflow-auto"> */}
        <FlipBook/>
      {/* </div> */}
      <div className="flex flex-col w-1/2">
        <PlayerControl/>
        {/* <Button/> */}
        {/* <BearBox/> */}
      </div>
      {/* Footer */}
      {/* <div className="grid grid-cols-3 gap-1 w-1/3 mb-32  text-center lg:mb-0 lg:max-w-5xl">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="p-1 group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold ransition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            Play{" "}
          </h2>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="p-1 group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold ransition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            Category
          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="p-1 group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold ransition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            PlayList
          </h2>
        </a>
      </div> */}
    </main>
  );
}
