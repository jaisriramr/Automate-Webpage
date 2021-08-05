import {Link} from 'react-router-dom';
import './Navbar.css'

const ResourceDropdown = () => {
    return(
        <div className='resource-dropdown dropdown-content'>
                <Link className='link nav-grid mb-1' to='/'>
                    <div className='nav-box'>
                    <i class="fas fa-mug-hot clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Blog</h5>
                        <p className='clr-grey'>Articles on productivity ,automation and iPass</p>
                    </div>
                </Link>

                <Link className='link nav-grid mb-1' to='/'>
                    <div className='nav-box'>
                    <i class="fas fa-graduation-cap clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Academy</h5>
                        <p className='clr-grey'>
                        Learn about cloud apps and get the most out of them
                        </p>
                    </div>
                </Link>
                
                <Link className='link nav-grid mb-1' to='/'>
                    <div className='nav-box'>
                    <i class="far fa-newspaper clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Press</h5>
                        <p className='clr-grey'>
                        News and media coverage about Automate.io
                        </p>
                    </div>
                </Link>

                <Link className='link nav-grid mb-1' to='/'>
                    <div className='nav-box'>
                    <i class="fas fa-headset clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Help Center</h5>
                        <p className='clr-grey'>
                        Documentation & FAQs on how to use Automate.io
                        </p>
                    </div>
                </Link>

                <Link className='link nav-grid mb-1' to='/'>
                    <div className='nav-box'>
                    <i class="far fa-handshake clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Affiliate Program</h5>
                        <p className='clr-grey'>
                        Become our affiliate partner and earn big commissions
                        </p>
                    </div>
                </Link>

                </div>
    )
}

export default ResourceDropdown