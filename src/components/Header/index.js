import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <span className="heading">Travel</span>
      <br />
      <span className="heading">Unbound</span>
    </div>
    <ul className="ul-nav-container">
      <li>
        <Link to="/" className="list-item">
          Overview
        </Link>
      </li>
      <li>
        <Link to="/itinerary" className="list-item">
          Itinerary
        </Link>{' '}
      </li>
      <li className="list-item">
        <Link to="/costs" className="list-item">
          Costs&Terms and Conditions
        </Link>
      </li>
      <li className="list-item">
        <Link to="/inclusions" className="list-item">
          Inclusions&Exclusions
        </Link>
      </li>
      <li className="list-item">
        <Link to="/booknow" className="list-item">
          Book Now
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
