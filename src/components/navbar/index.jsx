import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'

export function Navbar() {
  return (
    <div className="nav">
      <button id="menu-btn">
        <MdMenu />
      </button>

      <div className="dark-mode">
        <MdLightMode className="active" />
        <MdDarkMode />
      </div>

      <div className="profile">
        <div className="info">
          <p>
            Hey, <b>Reza</b>
          </p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <img src="images/profile-1.jpg" />
        </div>
      </div>
    </div>
  )
}