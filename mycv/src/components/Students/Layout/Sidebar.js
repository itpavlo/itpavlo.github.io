import styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom';
import students from './students';
import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState(null)
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
      {students.map((student) => {
        return (
          <li className={[styles.menuItem, active === student.name ? styles.active : undefined].join(' ')} key={student.name}>
            <span onClick={() => setActive(student.name)}>
              { student.name }
            </span>
            <ul className={styles.subMenu}>
              {student.children.map((route) => {
                return (
                  <li key={route.path}>
                    <Link to={route.path}> {route.title} </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}

      </ul>
    </div>
  )
}

export default Sidebar
