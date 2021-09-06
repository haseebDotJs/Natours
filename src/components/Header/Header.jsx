import React from 'react'
import "./Header.css"
import whiteLogo from '../../img/logo-white.png'
const Header = () => {
    // const headingMain = useRef(null)

    // const animateHeading = () => {
    //     headingMain.current.classList.add("animate")
    //     setTimeout(() => {
    //         headingMain.current.classList.remove("animate")
    //     }, 1000);
    // }

    return (
        <header className="header">
            <div className="logo-box">
                <img className="logo" src={whiteLogo} alt="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main" >outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn-white btn-animated">discover tours</a>
            </div>
        </header>
    )
}

export default Header
