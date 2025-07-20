import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Import required components
import Counter from './Counter';
import Button from './Button';
import FetchData from './FetchData';
import Home from './Home'; // Импортируем компонент Home
import About from './About'; // Импортируем компонент About

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Router>  {/* Используем Router для маршрутизации */}
      <div>
        {/* Навигация между страницами */}
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>  {/* Ссылка на главную страницу */}
            </li>
            <li>
              <Link to="/about">О нас</Link>  {/* Ссылка на страницу "О нас" */}
            </li>
          </ul>
        </nav>

        <Counter count={count} />
        <Button onClick={increment} label="Увеличить" />
        <Button onClick={decrement} label="Уменьшить" />
        <FetchData />

        {/* Настройка маршрутов */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Главная страница */}
          <Route path="/about" element={<About />} />  {/* Страница "О нас" */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
