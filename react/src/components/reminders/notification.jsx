import { MdAdd, MdEdit, MdMoreVert, MdVolumeUp } from 'react-icons/md'
import styles from '@/styles/reminders.module.scss'

/**
 * @param {Object} props
 * @param {boolean} [props.deactive]
 * @param {boolean} [props.addReminder]
 * @param {string} props.title
 * @param {string} [props.time]
 */
export function Notification({ deactive, addReminder, title, time }) {
  return (
    <div
      className={`${styles.notification} ${
        deactive ? styles.deactive : addReminder ? styles.addReminder : ''
      }`}
    >
      {!addReminder ? (
        <>
          <div className={styles.icon}>
            {deactive ? <MdEdit /> : <MdVolumeUp />}
          </div>

          <div className={styles.content}>
            <div>
              <h3>{title}</h3>
              <small className="text-muted">{time}</small>
            </div>

            <MdMoreVert />
          </div>
        </>
      ) : (
        <div>
          <MdAdd />
          <h3>Add Reminder</h3>
        </div>
      )}
    </div>
  )
}
