import { Notification } from './notification'

export function Reminders() {
  return (
    <div className="reminders">
      <div className="header">
        <h2>Reminders</h2>
        <span className="material-icons-sharp">notifications_none</span>
      </div>

      <Notification title="Workshop" time="08:00 AM - 12:00 PM" />
      <Notification title="Workshop" time="08:00 AM - 12:00 PM" deactive />
      <Notification addReminder />
    </div>
  )
}