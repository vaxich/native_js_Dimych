import React, {MouseEvent} from "react"


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name);
        
        alert("user deleted")
    }

    const saveUser = () => {
        alert("user saved")
    }

    const onNameChanged = () => {
        alert("user saved")
    }

    const lostFocus = () => {
        alert("lost focus")
    }

    return (
        <div> <textarea 
        onBlur={lostFocus}
        onChange={onNameChanged}>Pavel</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}