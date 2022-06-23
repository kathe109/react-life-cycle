import React, { useEffect, useRef, useState } from "react";

const Clock = function () {
    const [date, setDate] = useState(new Date());
    let timerId = useRef();


    useEffect(() => {
        timerId.current = setInterval(() => tick(), 1000);
        return () => {
            console.log('componentWillmount');
            clearInterval(timerId.current);
        };
    }, []);

    useEffect(() => console.log('componentDidUpdate'));

    const tick = () => {
        console.log('tick');
        setDate(new Date());
    };
    
    return (
        <div>
            <h2>Hello, World!</h2>
            <h2>It's {date.toLocaleTimeString()}</h2>
        </div>
    );
};


export default Clock;