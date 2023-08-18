import logo from '@/assets/react.svg'
import { MdClose } from 'react-icons/md'

export function SidebarToggle() {
  return (
    <div className="toggle">
      <section className="logo">
        <img src={logo} alt="" />
        <h2>
          Freq<span className="danger">Seeker</span>
        </h2>
      </section>

      <button className="close" id="close-btn">
        <MdClose />
      </button>
    </div>
  )
}