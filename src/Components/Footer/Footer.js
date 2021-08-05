import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='d-flex align-items-center mb-2'>
                <h3>Connect With Us</h3>
                <div className='d-flex align-items-center'>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-youtube"></i>
                </div>
                </div>

                <hr/>

                <div className='mt-2 mb-3 split'>
                    
                    <div className='mb-2'>
                        <h4>Product</h4>
                        <p>App Integrations</p>
                        <p>Pricing</p>
                        <p>Blog</p>
                        <p>Academy</p>
                        <p>Help Center</p>
                        <p>Affiliate Program</p>
                    </div>

                    <div className='mb-2'>
                        <h4>New Apps</h4>
                        <p>Webex Meetings</p>
                        <p>Translate</p>
                        <p>Snowflake</p>
                        <p>Wave</p>
                        <p>Pardot</p>
                    </div>
                    
                    <div className='mb-2'>
                        <h4>From Our Academy</h4>
                        <p>How to Delete a Notion Workspace?</p>
                        <p>How to start a Shopify Store?</p>
                        <p>How to Create a Product Wiki in Notion?</p>
                        <p>How to Download Leads from Facebook Ad Manager</p>
                    </div>
                    
                    <div className='mb-2'>
                        <h4>From Our Blog</h4>
                        <p>16 Best Online Collaboration Tools For Teams In 2021</p>
                        <p>20 Best Shopify Apps For Your Shopify Store(2021)</p>
                        <p>The State of SMB E-Commerce Automation: 2021 Report</p>
                        <p>20 Google Sheets Formulas You Must Know!</p>
                    </div>
                </div>

                <hr />

                <p className="mt-2 text-center">created by jaisriram</p>
            </div>
        </footer>
    )
}

export default Footer
