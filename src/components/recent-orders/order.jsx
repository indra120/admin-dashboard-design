/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.number
 * @param {string} props.paymentStatus
 * @param {string} props.status
 */
export function Order(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.number}</td>
      <td>{props.paymentStatus}</td>
      <td
        className={
          props.status === 'Declined'
            ? 'danger'
            : props.status === 'Pending'
            ? 'warning'
            : 'primary'
        }
      >
        {props.status}
      </td>
      <td className="primary">Details</td>
    </tr>
  )
}