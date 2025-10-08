import { useState } from "react";

function Input({...props}) {
    const [text, setText] = useState("");
    return (
        <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Type something..." 
            {...props}
        />
    );
}     

export default Input;