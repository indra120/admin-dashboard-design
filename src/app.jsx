import { Sidebar } from '@/components/sidebar'
import { Analytics } from '@/components/analytics'

export function App() {
  return (
    <>
      <div className="container">
        <Sidebar />

        <main>
          <Analytics />
        </main>
      </div>
    </>
  )
}
