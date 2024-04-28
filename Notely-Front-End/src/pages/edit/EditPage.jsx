import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './edit.module.css'
import getNote from '../../services/getNote.js';
import { editNote } from '../../services/edit.js';

export default function EditPage() {
  let navigate = useNavigate();
  const id = useParams().id;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState('');

  const updatingTitle = (e) => {
    setTitle(e.target.value);
  };

  const updatingContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    getNote(id).then((result) => {
      setTitle(result[0].title)
      setContent(result[0].content)
    })
  }, [])

  const formHanldler = async (e) => {
    e.preventDefault();
    setErrors();
    const result = await editNote(title, content, id);
    if (result.status === 200) {
      navigate('/note/' + id);
    }
    else {
      setErrors(result)
    }
  }
  return (
    <>
      {errors ? <div>
        <div className={styles.errorContainer}>
          <p>{errors}</p>
        </div>
      </div> : <></>}
      <form action="" className={styles.editForm}>
        <h2>
          Create
        </h2>
        <div className={styles.inputsWrapper}>
          <input type="email" className={styles.inputField} placeholder="Title" value={title} id="title" name="title" onChange={updatingTitle} />
          {/* <input type="password" className={styles.inputField} id="content" name="content" placeholder="Content" onChange={updatingContent} /> */}
          <textarea id="content" name="content" cols="30" rows="10" placeholder="Content" value={content} onChange={updatingContent}></textarea>

          <button className={styles.actionButton} onClick={formHanldler}>Edit</button>
        </div>
      </form>
    </>
  )
}
