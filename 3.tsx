// Типизация данных
interface IUser {
  // Типизируйте объект User
}

// Типизируйте компонент UserSearch
const UserSearch = () => {
  // Массив пользователей
  const users = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  // Состояние поиска
  const [searchTerm, setSearchTerm] = useState('');
  // Фильтрация пользователей
  const filteredUsers = []; // Фильтруйте пользователей по имени

  return (
    <div>
      <h1>Поиск пользователей</h1>
      {/* Здесь напишите input для посика */}

      <ul>{/* Выводите список пользователей здесь */}</ul>
    </div>
  );
};

export default UserSearch;
