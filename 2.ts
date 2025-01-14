interface ITask {
  id: number;
  title: string;
  completed: boolean;
  priority?: 'low' | 'medium' | 'high';
}

const tasks: ITask[] = [
  { id: 1, title: 'Купить продукты', completed: true, priority: 'high' },
  { id: 2, title: 'Сделать домашнее задание', completed: false },
  { id: 3, title: 'Сходить в спортзал', completed: false },
  { id: 4, title: 'Прочитать книгу', completed: true, priority: 'low' },
  { id: 5, title: 'Помыть машину', completed: false },
  { id: 6, title: 'Погулять с собакой', completed: true, priority: 'medium' },
  { id: 7, title: 'Сделать уборку', completed: false },
  { id: 8, title: 'Позвонить маме', completed: true, priority: 'high' },
  { id: 9, title: 'Погулять в парке', completed: false },
  { id: 10, title: 'Сходить на выставку', completed: true },
];

function filterCompletedTasks(tasks: ITask[]): ITask[] {
  return tasks.filter(task => task.completed);
}

const completedTasks = filterCompletedTasks(tasks);
console.log(completedTasks);
