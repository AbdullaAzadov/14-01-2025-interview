/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/

interface IUser {
  // Типизируйте объект User
}

// Типизируйте компонент UserSearch
const UserSearch = () => {
  const users = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState</*типизируйте useState*/>('');
  const filteredUsers = []; // Фильтруйте пользователей по имени

  return (
    <div>
      <h1>Поиск пользователей</h1>
      {/* Здесь напишите input для посика */}

      <ul>{/* Выводите список отфильтрованных пользователей здесь */}</ul>
    </div>
  );
};

export default UserSearch;
