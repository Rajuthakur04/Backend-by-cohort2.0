import { useEffect, useState } from 'react'
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

   console.log("hello integration")

   
useEffect(() => {
axios.get('http://localhost:3000/api/notes')
.then((res)=>{
  setNotes(res.data.notes)
})
},[])

 function handleSubmit(e){
  e.preventDefault()
  const {title, description} = e.target.elements
  console.log(title.value, description.value)

  axios.post("http://localhost:3000/api/notes", {
    title: title.value,
    description: description.value
  })
  .then(res => {
    console.log(res.data)
    fetchNotes()
  })
 }

 function handeDelete(noteId){
  axios.delete("http://localhost:3000/api/notes/"+noteId)
  .then(res => {
    console.log(res.data)
    fetchNotes()
  })
 
 }

  return (
    <>
<form className='note-create-form' onSubmit={handleSubmit}>
  <input name ="title" type="text" placeholder="Enter title" />
   <input name ="description" type="text" placeholder="Enter description" />
   <button type="submit">Create Note</button>
</form>



    <div className= "notes">
      {
        notes.map(note=>{
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
                 <button onClick={() => { handeDelete(note._id)}}>Delete</button>

            </div>
          )
        })
      }
      {/* <div className="note">
      </div> */}
    </div>
     
    </>
  )
}

export default App
