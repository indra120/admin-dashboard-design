import { AnalyticItem } from './item'

export function Analytics() {
  return (
    <>
      <h1>Analytics</h1>
      <div class="analytics">
        <AnalyticItem title="Total Sales" subTitle="$65,024" percentage="+81" />
        <AnalyticItem title="Site Visit" subTitle="24,981" percentage="-48" />
        <AnalyticItem title="Searches" subTitle="14,147" percentage="+21" />
      </div>
    </>
  )
}
