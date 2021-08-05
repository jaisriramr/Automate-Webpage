import './Navbar.css'

const ResponsiveNav = () => {
    return(
        <div className="rs-nav">
            <ul className="rs-nav__flex">
                <li className="list-item rs-nav__link rs-nav__arrow dropdown">
                Product <span><i class="arrow fas fa-chevron-down"></i></span>
                <div className="rs-nav__dropdown">
                    <p>Product overview</p>
                    <p>Case studies</p>
                </div>
                </li>
                <li className="list-item rs-nav__link">Integrations</li>
                <li className="list-item rs-nav__link">Pricing</li>
                <li className="list-item rs-nav__link rs-nav__arrow dropdown">
                Resources <span><i class="arrow fas fa-chevron-down"></i></span>
                <div className="rs-nav__dropdown">
                    <p>Blog</p>
                    <p>Academy</p>
                    <p>Press</p>
                    <p>Help Center</p>
                    <p>Affiliate Program</p>
                </div>
                </li>
                <li className="list-item rs-nav__link">Login</li>
                <li className="list-item rs-nav__link"><button className="btn btn-s bg-accent">Sign Up</button></li>
            </ul>
        </div>
    )
}

export default ResponsiveNav