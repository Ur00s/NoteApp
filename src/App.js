import "./styles/main.scss";
import ListNotes from "./components/notes/ListNotes";
import CreateNotes from "./components/notes/CreateNotes";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Swal from "sweetalert2";
import { useState } from "react";
import { isEmpty } from "./services/Validation";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const createNote = () => {

    if (isEmpty(title)) {
      Swal.fire({
        title: 'Грешка!',
        text: 'Наслов не може да буде празан, пробајте поново са уносом',
        icon: 'error',
        confirmButtonText: 'Понови'
      })

      return;
    }

    if (isEmpty(content)) {
      Swal.fire({
        title: 'Грешка!',
        text: 'Садржај не може да буде празан, пробајте поново са уносом',
        icon: 'error',
        confirmButtonText: 'Понови'
      })

      return;
    }

    let newNote = {
      id: notes.length + 1,
      title: title,
      content: content
    }
  
    setNotes([...notes, newNote])
  }
  
  const removeNote = (noteId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to delete this note",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let updatedNotes = notes.filter((note) => {
          return note.id !== noteId;
        })

        console.log(updatedNotes);
        setNotes(updatedNotes);

        Swal.fire(
          'Deleted!',
          'You have successfully deleted note',
          'success'
        )
      }
    })
  }

  if(isLoggedIn === false) {
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }

  return (
    isLoggedIn === true && (
      <Layout headerTitle="Notes Application">
        {
          notes.length === 0
            ?
              <h3 style={{textAlign: "center", color: "#fff"}}>0 notes</h3>  
            :
            <ListNotes notes={notes} removeNote={removeNote} />
        }
        <CreateNotes setTitle={setTitle} setContent={setContent} createNote={createNote} />
      </Layout>
    )
  );
}
