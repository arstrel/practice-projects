import { Link } from 'react-router-dom'
import {FaHomeIcon} from 'react-icons/fa'
import {FaAddDayIcon} from 'react-icons/fa'
import {FaListDaysIcon} from 'react-icons/fa'
import '../../stylesheets/Menu.scss'

const Menu = () =>
    <nav className="menu">
        <Link to="/" activeClassName="selected">
            <FaHomeIcon />
        </Link>
        <Link to="/add-day" activeClassName="selected">
            <FaAddDayIcon />
        </Link>
        <Link to="/list-days" activeClassName="selected">
            <FaListDaysIcon />
        </Link>
    </nav>

export default Menu