/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subTitle
 * @param {string} props.percentage
 */
export function AnalyticItem({ title, subTitle, percentage, ...props }) {
  return (
    <div {...props}>
      <div class="status">
        <div class="info">
          <h3>{title}</h3>
          <h1>{subTitle}</h1>
        </div>
        <div class="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div class="percentage">
            <p>{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}