import React, { useState } from 'react';

// Типизация пользователя
interface IUser {
  id: number;
  name: string;
  age: number;
}

// Типизация пропсов компонента (если понадобятся в будущем)
interface UserSearchProps {}

const UserSearch: React.FC<UserSearchProps> = () => {
  // Данные пользователей
  const users: IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  // Состояние для поискового запроса
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Фильтрация пользователей
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Обработчик изменения поискового запроса
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Поиск пользователей</h1>
      
      {/* Поисковый инпут */}
      <input
        type="text"
        placeholder="Введите имя для поиска..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: '8px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '300px'
        }}
      />

      {/* Список пользователей */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredUsers.map(user => (
          <li 
            key={user.id}
            style={{
              padding: '10px',
              marginBottom: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            {user.name} - {user.age} лет
          </li>
        ))}
      </ul>

      {/* Сообщение, если пользователи не найдены */}
      {filteredUsers.length === 0 && (
        <p>Пользователи не найдены</p>
      )}
    </div>
  );
};

export default UserSearch; 