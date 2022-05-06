import { FeedbackTypes, FeedbackType } from "..";
import { CloseButton } from '../../closebutton'

interface FeedbackTypeChangedProps  {
    onFeedbackTypeChanged: ((type: FeedbackType)=>void)  /* (type: FeedbackType) => void */
    
}

export function FeedbackTypeStep({onFeedbackTypeChanged}:FeedbackTypeChangedProps){
    return(
        <>
            <header>
                Deixe seu Feedback
                <CloseButton />
            </header>

    
        <div className="flex py-8 gap-2 w-full">
            { Object.entries(FeedbackTypes).map(([key,values])=>{
                /* console.log(key,values) */
                return (
                    <button 
                        key={key} 
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center"
                        onClick={()=> onFeedbackTypeChanged(key as FeedbackType)}>
                        <img src={values.image} alt={values.imageAlt}/>
                        <span>{values.title}</span>
                    </button>
                )
            })}
        </div>
        </>

    );
}