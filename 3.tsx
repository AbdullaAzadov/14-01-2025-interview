/* Задание 3
Реализуйте компонент UserSearch, который позволяет искать пользователей по имени.
Также необходимо типизировать объект User и компонент UserSearch.
*/

interface IUser {
  id : number;
  name : string;
  age : number;
}

// Типизируйте компонент UserSearch
const UserSearch = () => {
  const users : IUser[] = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
    { id: 4, name: 'Алексей', age: 35 },
    { id: 5, name: 'Анна', age: 22 },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([])

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.name.includes(searchTerm)))
  }, [searchTerm])

  return (
    <div>
      <h1>Поиск пользователей</h1>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} >  </input>

      <ul> {filteredUsers.map((user) => (
        <li key={user.id}>
          <p> имя: {user.name} </p>
          <p> возраст: {user.age} </p>
        </li>
      ))} 
      {filteredUsers.length == 0 && (
        <div> пользователей с похожим именем не найдено </div>
      )}
      </ul>
    </div>
  );
};

export default UserSearch;
