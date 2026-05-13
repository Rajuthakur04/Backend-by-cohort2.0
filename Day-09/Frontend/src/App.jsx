import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
function App() {

  const  [notes, setNotes] = useState([ 
     {
     title: "test title 1", 
    description: "test description"
   },
        {
     title: "test title 2", 
    description: "test description"
   },
        {
     title: "test title 3", 
    description: "test description"
   },
        {
     title: "test title 4", 
    description: "test description"
   },
   
   ])

axios.get('http://localhost:3000/api/notes')
.then((res)=>{
  setNotes(res.data.notes)
})



  return (
    <>
    <div className= "notes">
      {
        notes.map(note=>{
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          )
        })
      }
      <div className="note">
      </div>
    </div>
     
    </>
  )
}

export default App
