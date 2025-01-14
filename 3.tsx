
import { useState } from 'react';

// Типизация объекта User
interface IUser {
  id: number; // Уникальный идентификатор пользователя
  name: string; // Имя пользователя
  age: number; // Возраст пользователя
}

// Типизируйте компонент UserSearch
const UserSearch = () => {
  const users: IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>(''); // Строка для введённого пользователем текста

  // Фильтрация пользователей по имени
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Обработчик изменения ввода
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Поиск пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя для поиска"
        value={searchTerm}
        onChange={handleInputChange}
        className="border rounded px-4 py-2 mb-4 w-full"
      />
      <ul className="list-disc pl-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}, {user.age} лет
            </li>
          ))
        ) : (
          <li className="text-gray-500">Нет пользователей, соответствующих запросу.</li>
        )}
      </ul>
    </div>
  );
};

export default UserSearch;
