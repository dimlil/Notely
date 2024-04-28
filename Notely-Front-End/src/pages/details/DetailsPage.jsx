import { useEffect, useState } from 'react'
import styles from './DetailsPage.module.scss'
import getNote from '../../services/getNote.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteNote } from '../../services/deleteNote.js';

function DetailsPage() {
  let navigate = useNavigate();
  const [note, setNote] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getNote(id).then((result) => {
      setNote(result[0])
    })
  }, [])
  const DeleteHandler = (e) => {
    e.preventDefault();
    deleteNote(id).then((result) => {
      if (result.status === 204) {
        navigate('/');
      }
      else {
        console.log(result)
      }
    })
  }

  return (
    <main>
      {note ?
        <div className={styles.noteWrapper}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <>
            {note.usersId === localStorage.getItem('userId') ?
              <div className={styles.actions}>
                <Link to={`/edit/${note.id}`} className={styles.edit} >
                  Edit
                </Link>
                <button className={styles.delete} onClick={DeleteHandler} >
                  Delete
                </button>
              </div> : ''
            }
          </>
        </ div> :
        <>
          <h1>
            There are no note found...
          </h1>
        </>
      }
    </main>
  )
}

export default DetailsPage
