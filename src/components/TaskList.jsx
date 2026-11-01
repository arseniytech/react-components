const tasks = ['Позавтракать', 'Проверить почту', 'Сделать зарядку', 'Выпить стакан воды']

export const TaskList = () => {
  return (
    <section className="task-block">
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </section>
  )
}