import { ChatTeardropText } from 'phosphor-react'
import { useState } from 'react';
import { Popover } from '@headlessui/react'


export function Widget(){
   

    return(
        <>
            <Popover className="absolute right-4 bottom-4">
                
                <Popover.Panel>
                    <h1>allan</h1>
                </Popover.Panel>

                <Popover.Button  className="bg-fuchsia-900 text-white p-3 rounded-full flex items-center group">
                    <ChatTeardropText size={40} />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs ease-linear duration-300">
                        Feedback
                    </span>
                </Popover.Button>
            </Popover>
        </>
    );
}