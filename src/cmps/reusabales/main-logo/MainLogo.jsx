
import './main-logo.scss'

import mainLogoImg from "../../../assets/img/logo/main-logo.png"


export function MainLogo() {

    return (
        <div className="main-logo-wraper">
            <img className="main-logo" src={mainLogoImg} alt="" onClick={() => navigate({ pathname: '/home' })} />
        </div>
    )
}