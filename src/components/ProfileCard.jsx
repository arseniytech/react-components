function ProfileCard() {
  const skills = ['HTML', 'CSS', 'React']

  return (
    <section className="task-block">
      <div className="profile-card">
        <h2>Анна Иванова</h2>
        <h3>Веб-разработчик</h3>
        <p>Люблю писать чистый код и изучать новые технологии</p>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProfileCard