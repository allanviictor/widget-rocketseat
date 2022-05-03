import { ChatTeardropText } from 'phosphor-react'
import { useState } from 'react';


export function Widget(){
    const [visibilityWidget,setVisibilityWidget] = useState(false)

    function changeVisibility(){
        setVisibilityWidget(!visibilityWidget)
       
    }


    return(
        <>
            <div className="absolute right-4 bottom-4">
                { visibilityWidget && <h1>allan</h1> }
                <button onClick={changeVisibility} className="bg-fuchsia-900 text-white p-3 rounded-full flex items-center group">
                    <ChatTeardropText size={40} />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs ease-linear duration-300">
                        Feedback
                    </span>
                </button>
            </div>
        </>
    );
}