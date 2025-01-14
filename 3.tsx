/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/
import React, { useState } from "react"; // импортируем все что нужно нам из библиотеки реакт

interface IUser {
  id: number;
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  // Массив с типизацией IUser[]
  const users: IUser[] = [
    { id: 1, name: "Иван", age: 25 },
    { id: 2, name: "Мария", age: 30 },
    { id: 3, name: "Петр", age: 28 },
    { id: 4, name: "Алексей", age: 35 },
    { id: 5, name: "Анна", age: 22 },
  ];

  // Типизация useState где мы используем generic
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredUsers = users.filter((user) =>
    // мы специально делаем входные данные в нижнем регистре и проверяем так же в нем ведь это улучшает подьзовательский опыт
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Поиск пользователей</h1>
      {/* Input для ввода поискового запроса */}
      <input
        type="text"
        placeholder="Введите имя"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {/* Выводим список отфильтрованных пользователей */}
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age} лет
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
