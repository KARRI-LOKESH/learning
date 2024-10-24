import React, { useState } from "react";
import Two from "./Two";
import EventHandling from "./EventHandling";
import ConditionalRender from "./ConditionalRender";
import ToDo from "./ToDoList";
import Timer from "./UeEffect";
import Context from "./ContextAPI";


function Hello(){
    const[name,setName]=useState('');
return(
    <div className="container">
        <h1>hi {name}</h1>
        <Two/>
        <input type="text"
        onChange={(e)=>setName(e.target.value)}
/>
<EventHandling/>
<ConditionalRender/>
<ToDo/>
<Timer/>
<Context/>
</div>
)}
export default Hello;