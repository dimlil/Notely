import { useEffect, useState } from 'react'
import getAllNotes from '../../services/getAllNotes';
import Note from '../../components/notes/Note';
import styles from './home.module.scss'

function HomePage() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getAllNotes().then((result) => {
      setNotes(result)
    })
  }, [])

  return (
    <main>
      {notes.length > 0 ?
        <div className={styles.notesWrapper}>
          {
            notes.map((note,key) => {
              return <Note key={key} id={note.id} title={note.title} content={note.content} />
            })
          }
        </ div> :
        <>
          <h1>
            There are no notes found...
          </h1>
        </>
      }
    </main>
  )
}

export default HomePage
