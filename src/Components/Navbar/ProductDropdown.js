import {Link} from 'react-router-dom'
import './Navbar.css'

const ProductDropdown = () => {
    return (
        <div className='product-dropdown dropdown-content'>
                <Link className='link nav-grid mb-1' to='/'>
                    <div className='nav-box'>
                    <i class="fas fa-layer-group clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Product overview</h5>
                        <p className='clr-grey'>Explore all the benefits and features of Automte.io</p>
                    </div>
                </Link>

                <Link className='link nav-grid' to='/'>
                    <div className='nav-box'>
                        <i className="fas fa-suitcase clr-accent"></i>
                    </div>
                    <div>
                        <h5 className='mb-05 clr-dark'>Case studies</h5>
                        <p className='clr-grey'>Success stories of our customer</p>
                    </div>
                </Link>

                </div>
    )
}

export default ProductDropdown