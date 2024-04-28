import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './create.module.scss'
import { create } from '../../services/Create.js';

export default function CreatePage() {
  let navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState('');

  const updatingTitle = (e) => {
    setTitle(e.target.value);
  };

  const updatingContent = (e) => {
    setContent(e.target.value);
  };

  const formHanldler = async (e) => {
    e.preventDefault();
    setErrors();
    const result = await create(title, content);
    if (result.status === 200) {
      navigate('/');
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
      <form action="" className={styles.createForm}>
        <h2>
          Create
        </h2>
        <div className={styles.inputsWrapper}>
          <input type="email" className={styles.inputField} placeholder="Title" id="title" name="title" onChange={updatingTitle} />
          {/* <input type="password" className={styles.inputField} id="content" name="content" placeholder="Content" onChange={updatingContent} /> */}
          <textarea id="content" name="content" cols="30" rows="10" placeholder="Content" onChange={updatingContent}></textarea>

          <button className={styles.actionButton} onClick={formHanldler}>Create</button>
        </div>
      </form>
    </>
  )
}
