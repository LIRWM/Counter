import React, { useState } from 'react';
import Counter from './Counter';
import Button from './Button';
import FetchData from './FetchData';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <Counter count={count} />
      <Button onClick={increment} label="Увеличить" />
      <Button onClick={decrement} label="Уменьшить" />
      <FetchData /> {/* Отображем компонент с загрузкой данных */}
    </div>
  );
};

export default App;
