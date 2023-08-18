import { AnalyticItem } from './item'

export function Analytics() {
  return (
    <>
      <h1>Analytics</h1>
      <div className="analytics">
        <AnalyticItem title="Total Sales" subTitle="$65,024" percentage="+81" className="sales" />
        <AnalyticItem title="Site Visit" subTitle="24,981" percentage="-48" className="visits" />
        <AnalyticItem title="Searches" subTitle="14,147" percentage="+21" className="searches" />
      </div>
    </>
  )
}
