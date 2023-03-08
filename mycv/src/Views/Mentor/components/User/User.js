import styles from './User.module.scss'

const User = ({user, index, handleDelete}) => (<div>
    <p>{user.name}</p>
    <img className={styles.image} src={user.image} alt=""/>
    <button onClick={()=>handleDelete(index)}>Delete</button>
</div>)

export default User
