/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/

import React, { useState } from 'react';

// Типизируем объект User
interface IUser {
  id: number;
  name: string;
  age: number;
}

// Компонент UserSearch
const UserSearch: React.FC = () => {
  // Список пользователей
  const users: IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  // Состояние строки поиска
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Фильтрация пользователей по имени
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Поиск пользователей</h1>
      {/* Поле ввода для поиска */}
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {/* Выводим список отфильтрованных пользователей */}
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} лет
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
