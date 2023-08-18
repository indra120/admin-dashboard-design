/**
 * @param {Object} props
 * @param {string} props.image
 * @param {string} props.name
 * @param {string} props.caption
 */
export function User({ image, name, caption, ...props }) {
  return (
    <div className="user" {...props}>
      <img src={image} />
      <h2>{name}</h2>
      <p>{caption}</p>
    </div>
  )
}
