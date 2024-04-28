import { Link } from 'react-router-dom'
import styles from './Note.module.scss'
function Note(props) {
    return (
        <div className={styles.noteWrapper}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>

            <Link to={`/note/${props.id}`} className={styles.detLink} >
                Details
            </Link>
        </div>
    )
}
export default Note