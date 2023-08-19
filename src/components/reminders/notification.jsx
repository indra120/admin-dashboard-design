import { MdAdd, MdEdit, MdMoreVert, MdVolumeUp } from 'react-icons/md'

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
      className={`notification${
        deactive ? ' deactive' : addReminder ? ' add-reminder' : ''
      }`}
    >
      {!addReminder ? (
        <>
          <div className="icon">{deactive ? <MdEdit /> : <MdVolumeUp />}</div>

          <div className="content">
            <div className="info">
              <h3>{title}</h3>
              <small className="text_muted">{time}</small>
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