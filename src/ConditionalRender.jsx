import React, { useState } from 'react';

function ConditionalRender({ islogin }) {
    const [showMessage, setShowMessage] = useState(true);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            {showMessage && (islogin ? <h1>Hello</h1> : <h2>Sarigga Choodu</h2>)}
        </div>
    );
}

export default ConditionalRender;
