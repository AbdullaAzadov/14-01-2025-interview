/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/

import React, { useState, ChangeEvent } from 'react';

interface IUser {
  id: number;
  name: string;
  age: number;
}

// Типизируем компонент как React.FC (Function Component)
const UserSearch: React.FC = () => {
  const users: IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');

  // Фильтруем пользователей по имени
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Обработчик изменения input
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Поиск пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя для поиска"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} лет
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
