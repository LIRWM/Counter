import React, { useEffect, useState } from 'react';

interface Data {
    title: string;
}

const FetchData: React.FC = () => {
    const [data, setData] = useState<Data | null>(null); // Данные для отображения
    const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
    const [error, setError] = useState<string | null>(null); // Ошибки

    useEffect(() => {
        // Выполняем запрос на сервер при монтировании компонента
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json()) // Конвертируем ответ в JSON
        .then((json) => {
            setData(json); // Записываем полученные данные
            setLoading(false); // Останавливаем индикатор загрузки
        })
        .catch((error) => {
            setError(error.message); // Обрабатываем ошибки
            setLoading(false); // Останавливаем индикатор загрузки
        });
    }, []); //Пустой массив, чтобы запрос выполнялся только один раз при монтировании компонента

    if (loading) return <div>Загрузка...</div>; // Показываем, пока загружаем данные
    if (error) return <div>Ошибка: {error}</div>  // Показываем ошибку, если что-то пошло не так

    return <div>Полученные данные {data?.title}</div>; // Отображаем полученные данные
    };

    export default FetchData;