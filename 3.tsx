/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/
import React, { useState } from 'react';

interface IUser {
  id: number;
  name: string;
  age: number;
}

// Типизируйте компонент UserSearch
const UserSearch: React.FC = () => {
  const users: IUser[] = [
    { id: 1, name: 'Josh', age: 25 },
    { id: 2, name: 'Frank', age: 30 },
    { id: 3, name: 'Peter', age: 28 },
    { id: 4, name: 'Maks', age: 35 },
    { id: 5, name: 'John', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredUsers = []; // Фильтруйте пользователей по имени

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Поиск пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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