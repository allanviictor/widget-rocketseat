import { CloseButton } from '../../closebutton'
import { FeedbackType, FeedbackTypes } from '..'
import { ArrowLeft } from 'phosphor-react'
import { ScreenShot } from '../screenShot'
import { FormEvent, useState } from 'react'


interface FeedbackContentProps {
    FeedbackType: FeedbackType
    returnFeedbackTypeStep:((value:null) => void)
}

export function FeedbackTypeContent({FeedbackType,returnFeedbackTypeStep}:FeedbackContentProps){
    const feedbackTypeInfo = FeedbackTypes[FeedbackType]
    const [screenShotTook,useScreenShotTook] = useState<string | null>(null)
    const [MensageFeedback,setMensageFeedback] = useState<string>('')

    function submitForm(e:FormEvent){
        e.preventDefault();
        console.log('MensageFeedback',MensageFeedback)
        console.log('screenShotTook',screenShotTook)
    }

    return(
        <>
            <header >
                <button className="absolute top-[15px] left-2">
                    <ArrowLeft onClick={()=>returnFeedbackTypeStep(null)} size={25} className="text-zinc-400" />
                </button>

                <span className="flex gap-2 items-center">
                    <img className="h-6 w-6" src={feedbackTypeInfo.image} alt={feedbackTypeInfo.imageAlt}/>
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

    
            <form onSubmit={submitForm} className="my-4 w-full">
                <textarea 
                    onChange={(event)=>setMensageFeedback(event.target.value)}
                    className="min-w-400 w-full min-h-[150px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md outline-none focus:border-fuchsia-900 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                    placeholder="Conte pra gente o que está acontecendo..."
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenShot hasScreenShot={screenShotTook} takeScreenShot={useScreenShotTook}/>

                    <button 
                        className="bg-fuchsia-900 w-full p-2 disabled:opacity-50" 
                        type="submit"
                        disabled={MensageFeedback.length == 0}
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>

    );
}