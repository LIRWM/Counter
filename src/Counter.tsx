import React from 'react';

interface CounterProps {
    count: number;
}

const Counter: React.FC<CounterProps> = ({ count}) => {
    return <h1>Счетчик: {count}</h1>;
};

export default Counter;