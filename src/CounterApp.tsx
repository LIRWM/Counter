import { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Счётчик</h1>
      <p style={styles.count}>{count}</p>
      <div style={styles.buttons}>
        <button onClick={decrement}>−</button>
        <button onClick={reset}>Сброс</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
    padding: '40px',
  },
  count: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
};

export default CounterApp;
