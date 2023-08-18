/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subTitle
 * @param {string} props.percentage
 */
export function AnalyticItem({ title, subTitle, percentage, ...props }) {
  return (
    <div {...props}>
      <div className="status">
        <div className="info">
          <h3>{title}</h3>
          <h1>{subTitle}</h1>
        </div>
        <div className="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div className="percentage">
            <p>{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}