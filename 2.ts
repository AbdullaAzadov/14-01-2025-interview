
// Типизируем объект Task
interface ITask {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high'; // Ограниченный набор значений для приоритета
}

// Массив задач
const tasks: ITask[] = [
  { id: 1, title: 'Купить продукты', completed: true, priority: 'high' },
  { id: 2, title: 'Сделать домашнее задание', completed: false, priority: 'high' },
  { id: 3, title: 'Сходить в спортзал', completed: false, priority: 'low' },
  { id: 4, title: 'Прочитать книгу', completed: true, priority: 'low' },
  { id: 5, title: 'Помыть машину', completed: false, priority: 'medium' },
  { id: 6, title: 'Погулять с собакой', completed: true, priority: 'medium' },
  { id: 7, title: 'Сделать уборку', completed: false, priority: 'medium' },
  { id: 8, title: 'Позвонить маме', completed: true, priority: 'high' },
  { id: 9, title: 'Погулять в парке', completed: false, priority: 'low' },
  { id: 10, title: 'Сходить на выставку', completed: true, priority: 'high' },
];

// Функция для фильтрации выполненных задач
function filterCompletedTasks(tasks: ITask[]): ITask[] {
  return tasks.filter((task) => task.completed);
}

// Получаем массив выполненных задач
const completedTasks = filterCompletedTasks(tasks);

// Форматированный вывод выполненных задач
completedTasks.forEach((task) => {
  process.stdout.write(`ID: ${task.id}, Задача: "${task.title}", Приоритет: ${task.priority}\n`);
});
