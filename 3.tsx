/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/

interface IUser {
  id: number;
  name: string;
  age: number;
}

// Типизируйте компонент UserSearch
const UserSearch: FC = () => {
  const users: IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredUsers = users.filter((user) =>
    user.name.includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Поиск пользователей</h1>
      {/* Здесь напишите input для посика */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Введите имя пользователя"
      />

      <ul>
        {/* Выводите список отфильтрованных пользователей здесь */}
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
