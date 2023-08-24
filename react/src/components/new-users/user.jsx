/**
 * @param {Object} props
 * @param {string} props.image
 * @param {string} props.name
 * @param {string} props.caption
 */
export function User({ image, name, caption, ...props }) {
  return (
    <div className='user $-flex $-flex-col $-items-center $-justify-center' {...props}>
      <img src={image} className='$-w-20 $-h-20 $-mb-[0.4rem] $-rounded-full' />
      <h2>{name}</h2>
      <p>{caption}</p>
    </div>
  )
}