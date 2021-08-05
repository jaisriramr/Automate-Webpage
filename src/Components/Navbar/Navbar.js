import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../images/nav-logo.svg'
import './Navbar.css'
import ProductDropdown from './ProductDropdown'
import ResourceDropdown from './ResourceDropdown'
import ResponsiveNav from './ResponsiveNav'

const Navbar = () => {

    const hamHandler = () =>{
        const menubar = document.querySelector('.nav-hamburger')
        const responsiveMenu = document.querySelector('.rs-nav')

        menubar.addEventListener('click',()=>{
            menubar.classList.toggle('open')
            responsiveMenu.classList.toggle('rs-active')
        })

    }

    const scrollHandler = () =>{
        const navbar = document.querySelector(".navbar");
        const sectionOne = document.querySelector(".hero")
        const sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
          };
          
          const sectionOneObserver = new IntersectionObserver(function(
            entries,
            sectionOneObserver
          ) {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                navbar.classList.add("nav-scrolled");
              } else {
                navbar.classList.remove("nav-scrolled");
              }
            });
          },
          sectionOneOptions);
          sectionOneObserver.observe(sectionOne);
    }

    useEffect(()=>{
        hamHandler()
        scrollHandler()
    },[])

    return (
        <nav className='bg-light navbar align-items-center'>
            <div className='nav-logo__container align-items-center'>
            <img src={Logo} alt='automate-logo' />
            <Link to='/' className='link nav-logo'>automate.io</Link>
            </div>

            <div className='nav-hamburger'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ResponsiveNav />
            <ul className='nav-items split align-items-center'>
                <li className='list-item nav-link dropdown'>
                Product <span><i class="arrow fas fa-chevron-down"></i></span>
                <ProductDropdown />
                </li>
                <li className='list-item nav-link dropdown'>Integrations</li>
                <li className='list-item nav-link'>Pricing</li>
                <li className='list-item nav-link dropdown'>
                Resources <span><i class="arrow fas fa-chevron-down"></i></span>
                <ResourceDropdown />
                </li>
                <li className='list-item nav-link'>Login</li>
                <li className='list-item nav-link'><button className='btn btn-s bg-accent'>Sign Up</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
