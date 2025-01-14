import React, { useState, ChangeEvent } from "react";

// Типизация объекта User
interface IUser {
  id: number;
  name: string;
  age: number;
}

// Типизация компонента UserSearch
const UserSearch: React.FC = () => {
  const users: IUser[] = [
    { id: 1, name: "Иван", age: 25 },
    { id: 2, name: "Мария", age: 30 },
    { id: 3, name: "Петр", age: 28 },
    { id: 4, name: "Алексей", age: 35 },
    { id: 5, name: "Анна", age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");

  // Фильтруем пользователей по имени
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Обработчик изменения ввода
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Поиск пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} (возраст: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
