import { Greeting } from './components/Greeting'
import { TaskList } from './components/TaskList'
import { ActionButton } from './components/ActionButton'
import { ProfileCard } from './components/ProfileCard'
import { ImageGallery } from './components/ImageGallery'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Задачи на создание компонентов в React</h1>
      <Greeting />
      <TaskList />
      <ActionButton />
      <ProfileCard />
      <ImageGallery />
    </main>
  )
}

export default App