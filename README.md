# Инструкция по работе с репозиторием

### contact: =

### kadyrhanov98@bk.ru

### Aslan Kadyrkhanov

### TG: https://t.me/kdkhnv

1. **Клонирование репозитория**

   - После того как вас добавят в репозиторий, вам нужно будет клонировать репозиторий на вашу локальную машину.
   - Подсказка: Используйте команду `git clone` для клонирования:

2. **Создание ветки с вашим именем и пуш ветки**

   - После клонирования репозитория создайте новую ветку с вашим именем или фамилией. Это поможет избежать конфликтов с другими участниками.
   - Команда для создания ветки: `git checkout -b навзание_ветки`
   - Затем нужно запушить эту ветку: `git push -u origin навзание_ветки`

3. **Работа с задачами**

   - После создания ветки и пуша, вы можете приступать к выполнению задач.
   - Важно после выполнения каждой задачи делать **коммит** и **пуш** изменений в свою ветку.
   - Пример команд для коммита и пуша:
     ```bash
     git add .
     git commit -m "Решена задачи 1"
     git push origin название_ветки
     ```
   - Вам обязательно нужно коммитить и пушить после выполнения каждой задачи! Иначе ваши результаты на засчитываются.

4. **Отправка ссылки на вашу ветку в чат митинга и сообщить что закончил**
   - После выполнения всех задач, отправьте ссылку на вашу ветку для проверки.
   - Также сообщите что закончили задачу.

Удачи в выполнении задач!

# Правила работы с задачами

- **Каждая задача находится в отдельном файле**: `1.js`, `2.js`, `3.ts`, `...`.
- Запрещено изменять ветку `main`. Создавайте отдельные ветки со своим именем для работы над задачами.
- После выполнения каждой задачи запушьте свою ветку.
- Каждую задачу нужно выполнить в отдельной заранее созданной в своей ветке.
- Не изменяйте и не делайте pull-request в ветку `main`.
- Желательно предоставить объяснение по каждому решению задачи.
