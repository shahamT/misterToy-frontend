
import './main-logo.scss'

import mainLogoImg from "../../../assets/img/logo/main-logo.png"


export function MainLogo() {

    return (
        <div className="main-logo-wraper">
            <img className="main-logo" src={mainLogoImg} alt="" onClick={() => navigate({ pathname: '/home' })} />
            <h1 className='logo-title'><span>The </span>Toy <span>Store</span></h1>
        </div>
    )
}