import React from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({children}) => {

    return (
        <>
        <Navbar />
        <div className='layout-container'>
            {children}
        </div>
        <Footer />
        </>
    )

}

export default Layout