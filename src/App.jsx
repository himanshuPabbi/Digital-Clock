import React, { useState } from "react";

function App()
{
    let timeNow=new Date().toLocaleTimeString();

    const [currentTime,setime]=useState(timeNow);

    function Show()
    {
            setime(new Date().toLocaleTimeString());
    }
    setInterval(Show,1000);
    return (
        <>
        <h1>{currentTime}</h1>
        </>
    )
}
export default App;