import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Load } from '../load'

interface ScreenShotProps {
    takeScreenShot: (value:string | null) => void,
    hasScreenShot: string | null
}

export function ScreenShot({takeScreenShot,hasScreenShot}:ScreenShotProps){

    const [takingScreenShot,useTakingScreenShot] = useState(false)
    
    async function printScreen(){
        useTakingScreenShot(true)

        let canvas = await html2canvas(document.querySelector('html')!)
        let baseImage = canvas.toDataURL('image/png')

        takeScreenShot(baseImage)
        useTakingScreenShot(false)
    }

    if(hasScreenShot != null){
        return(
            
            <button
                type="button"
                className="relative flex justify-end items-end bg-zinc-800 p-3 group"
                onClick={()=> takeScreenShot(null)}
                style={{
                    background: `url(${hasScreenShot})` 
                }}
            >
                <div className="z-10 absolute w-full h-full top-0 right-0 group-hover:bg-red-600 ease-linear duration-300 opacity-30"></div>
                <Trash className="z-20" size={15}/>
            </button>
        )
    }else{

        return(
            <button onClick={printScreen} className="bg-zinc-800 p-2 " type="button">
                
                { !takingScreenShot ? <Camera size={25}/> : <Load /> }
            </button>
        );
    }

}