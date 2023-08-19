import { MdNotificationsNone } from 'react-icons/md'
import { Notification } from './notification'
import styles from '@/styles/reminders.module.scss'

export function Reminders() {
  return (
    <div className={styles.reminders}>
      <div className={styles.header}>
        <h2>Reminders</h2>
        <MdNotificationsNone/>
      </div>

      <Notification title="Workshop" time="08:00 AM - 12:00 PM" />
      <Notification title="Workshop" time="08:00 AM - 12:00 PM" deactive />
      <Notification addReminder />
    </div>
  )
}