import React, { useState } from "react";

// Типизируем объект User
interface IUser {
  id: number; // уникальный идентификатор пользователя
  name: string; // имя пользователя
  age: number; // возраст пользователя
}

// Типизируем компонент UserSearch
const UserSearch: React.FC = () => {
  const users: IUser[] = [
    { id: 1, name: "Иван", age: 25 },
    { id: 2, name: "Мария", age: 30 },
    { id: 3, name: "Петр", age: 28 },
    { id: 4, name: "Алексей", age: 35 },
    { id: 5, name: "Анна", age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>(""); // типизируем состояние строки поиска
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); // фильтруем пользователей по имени

  return (
    <div>
      <h1>Поиск пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // обновляем строку поиска
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} лет
          </li>
        ))}{" "}
        {/* выводим список отфильтрованных пользователей */}
      </ul>
    </div>
  );
};

export default UserSearch;
