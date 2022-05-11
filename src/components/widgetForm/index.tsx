import React, { useState } from 'react'

import { CloseButton } from '../closebutton'
import Bug from '../../assets/Bug.png'
import Idea from '../../assets/Idea.png'
import Thought from '../../assets/Thought.png'
import { FeedbackTypeStep } from './steps/feedbackTypeStep'
import { FeedbackTypeContent } from './steps/feedbackContentStep'
import { FeedbackSuccess } from './steps/feedbackSuccess'

export const FeedbackTypes = {
    BUG: {
        image: Bug,
        imageAlt: "icone de um inseto",
        title: "Problema"
    },
    IDEA: {
        image: Idea,
        imageAlt: "icone de uma lâmpada ",
        title: "Ideia"
    },
    OTHER: {
        image: Thought,
        imageAlt: "icone de balão de pensamento",
        title: "Outro"
    }
}

export type FeedbackType = keyof typeof FeedbackTypes


export function WidgetForm() {
    /* parte de dentro do painel chamada de form, onde vai ter todas as telas */

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl  mb-4 flex flex-col items-center md:w-auto w-[calc(100vw-2rem)] min-w-[400px]">

            { 
                feedbackSent ? <FeedbackSuccess onFeedbackSend={setFeedbackSent} onFeedbackTypeChanged={setFeedbackType} /> : 
                (
                    <>
                        {!feedbackType ? <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> : <FeedbackTypeContent onFeedbackSend={setFeedbackSent} returnFeedbackTypeStep={setFeedbackType} FeedbackType={feedbackType} />}
                    </>
                )
            }



            <footer className="text-xs text-neutral-400">
                Feito com ❤ pela <a target="_blank" className="underline" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}
