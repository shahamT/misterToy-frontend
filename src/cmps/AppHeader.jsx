import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MainLogo } from './reusabales/main-logo/MainLogo'

export function AppHeader(props) {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)

    return (
        <header className="app-header">
                    <MainLogo />
                <nav className="app-nav">
                    <NavLink to="/" ><div className="clickable clear size-40">Home</div></NavLink>
                    <NavLink to="/toy" ><div className="clickable clear size-40">Toys</div></NavLink>
                    <NavLink to="/about" ><div className="clickable clear size-40">About</div></NavLink>
                </nav>
        </header>
    )
}
