import './App.css'
import TimeCountdown from './TimeCountdown'
import StateManagment from './components/StateManagment'
import Todo from './components/Todo'

function App() {
    const  todos=[
      'Homework',
     'React',
      'Angular',
     'View'
    ]

  return (
    <>
     {/* Description :
     here we call out all our pages to the main page */}
    <Todo todos={todos}/>
    <TimeCountdown/>
    <StateManagment/>
    </>
  )
}

export default App
