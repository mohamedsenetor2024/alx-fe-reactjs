import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikForm from './components/formikForm.js'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-10">
      <RegistrationForm />
      <FormikForm />
    </div>
      
    
    </>
  )
}

export default App
