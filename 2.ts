// Задание 2
// Типизируйте данные и функцию в этом коде.

interface ITask {
  // Типизируйте объект Task
}

// tasks - должен быть типизирован как массив объектов Task
const tasks = [
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

// Напишите функцию, которая принимает массив задач и возвращает только выполненные задачи.
function filterCompletedTasks() {
  // Ваш код
}

const completedTasks = filterCompletedTasks(tasks);
console.log(completedTasks); // должно вернуть массив объектов с id: 1, 4, 6, 8, 10
