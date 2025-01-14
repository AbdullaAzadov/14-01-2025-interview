interface IUser {
  id: number;
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const users: IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Поиск пользователей</h1>
      
      {/* Поле ввода для поиска */}
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Список отфильтрованных пользователей */}
      <ul>
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