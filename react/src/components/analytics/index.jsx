import { AnalyticItem } from './item'
import styles from '@/styles/analytics.module.scss'

export function Analytics() {
  return (
    <>
      <h1>Analytics</h1>
      <div className={styles.analytics}>
        <AnalyticItem title="Total Sales" subTitle="$65,024" percentage="+81" className={styles.sales} />
        <AnalyticItem title="Site Visit" subTitle="24,981" percentage="-48" className={styles.visits} />
        <AnalyticItem title="Searches" subTitle="14,147" percentage="+21" className={styles.searches} />
      </div>
    </>
  )
}
