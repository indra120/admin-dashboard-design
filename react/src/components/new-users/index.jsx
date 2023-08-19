import { User } from './user'
import styles from '@/styles/new-users.module.scss'

export function NewUsers() {
  return (
    <div className={styles.newUsers}>
      <h2>New Users</h2>
      <div className={styles.userList}>
        {users.map((user, i) => <User key={i} {...user} />)}

        <User image="images/plus.png" name="More" caption="New User" />
      </div>
    </div>
  )
}

const users = [
  { image: 'images/profile-2.jpg', name: 'Jack', caption: '54 Min Ago' },
  { image: 'images/profile-3.jpg', name: 'Amir', caption: '3 Hours Ago' },
  { image: 'images/profile-4.jpg', name: 'Ember', caption: '6 Hours Ago' },
]