import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string)=>void
    title: string
    callBack: ()=>void
}
export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    const onKeyDownHandler = (event:KeyboardEvent<HTMLInputElement>)=>{
        if (event.key==='Enter'){
            props.callBack()
        }
        console.log(event.key)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler} onKeyDown={onKeyDownHandler}/>
    );
};

