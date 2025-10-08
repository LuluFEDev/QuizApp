import { useState } from "react";
import "./styles.scss";

function Input({...props}) {
    const [text, setText] = useState("");
    return (
        <input 
            type="text" 
            className="question-field"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Type something..." 
            {...props}
        />
    );
}     

export default Input;