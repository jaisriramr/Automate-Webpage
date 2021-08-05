import React from 'react';
import {Link} from 'react-router-dom'

import './home.css'
import Layout from '../../Components/Layout'
import HeroImage from '../../images/hero.png'
import Adobe from '../../images/adobe.svg'
import Redhat from '../../images/redhat.svg'
import Uber from '../../images/Uber.svg'
import Vonage from '../../images/vonage.svg'

import Connector from '../../images/Simple-and-Intuitive.svg'
import PowerTool from '../../images/powerfull-tool.svg'
import Sharing from '../../images/Sharing-Collaboration.svg'
import SecureReliable from '../../images/Secure-Reliable.svg'
import FeatureImg from '../../images/User interface_Monochromatic.png'

import Notion from '../../images/support-ui/Notion_app_logo.png'
import MSoffice from '../../images/support-ui/microsoft.png'
import Salesforce from '../../images/support-ui/Salesforce.com_logo 1.png'
import Quickbook from '../../images/support-ui/quickbook.png'

const Home = () => {

    return(
        <Layout>
            <header className='mt-2 bg-light'>
                <div className='hero split align-items-center container'>
                <div className='rs-text-center'>
                    <h1>
                    Connect your cloud apps.
                    </h1>
                    <h1>
                    Automate work.
                    </h1>
                    <p className='mt-1 mb-05'>
                    Have a repetitive process? Automate it in minutes.
                    </p>
                    <p className='mb-2'>
                    No IT help required.
                    </p>
                    <button className='btn btn-m bg-accent'>
                        Get Started
                    </button>
                </div>

                <div>
                    <img src={HeroImage} alt='hero' />
                </div>
                </div>
                <div>
                    <p className='mb-1 text-center clr-accent'>
                    Trusted by 30,000+ Organizations
                    </p>
                    <div className='mt-1 d-flex justify-center align-items-center'>
                        <img src={Adobe} alt='adobe' />
                        <img src={Redhat} alt='redhat' />
                        <img src={Uber} alt='uber' />
                        <img src={Vonage} alt='vonage' />
                    </div>
                </div>
            </header>

            <section className='container'>
                <h2 className='mb-3 text-center'>
                    What can you do
                </h2>
                <div className='split rs-align-center mb-5'>
                    <div>
                        <h3 className='clr-primary-900 mb-1'>
                            Simple Automation
                        </h3>
                        <p className='mb-3 '>
                        Create simple one-to-one automation workflows, or just sync data between two apps.
                        </p>
                    </div>
                    <div>
                        <div className='d-flex mb-4'>
                            <div className='bg-light bottom-arrow box'>
                            <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <span className='badge'>Trigger</span>
                                <p className='mt-1'>When an email is tagged “To do”</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='bg-light box'>
                            <i class="fab fa-trello"></i>
                            </div>
                            <div>
                                <span className='badge'>Action</span>
                                <p className='mt-1'>Create a Card</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='complex-container'>
                    <div className='width-70'>

                    <div className='content-block d-flex mb-4'>
                            <div className='bg-light bottom-arrow box'>
                            <i class="fab fa-trello"></i>
                            </div>
                            <div className='content-box'>
                                <span className='badge'>Trigger</span>
                                <p className='mt-1 width-60'>When an email is tagged “To do”</p>
                            </div>
                        </div>
                        <div className='content-block split'>
                        <div className='d-flex rs-arrow'>
                            <div className='bg-light box right-arrow'>
                            <i class="fab fa-mailchimp"></i>
                            </div>
                            <div className='content-box'>
                                <span className='badge'>Action</span>
                                <p className='mt-1 width-60'>Add them to “Lead Nurturing Campaign”</p>
                            </div>
                        </div>
                        <div className='d-flex mb-4'>
                            <div className='bg-light box  bottom-arrow'>
                            <i class="far fa-clock"></i>
                            </div>
                            <div className='content-box'>
                                <span className='badge'>Delay</span>
                                <p className='mt-1 width-60'>Wait for 4 days</p>
                            </div>
                        </div>
                        </div>

                        <div className='content-block split'>
                        <div className='d-flex rs-arrow'>
                            <div className='bg-light box '>
                            <i class="fab fa-salesforce"></i>
                            </div>
                            <div className='content-box left-arrow'>
                                <span className='badge'>Action</span>
                                <p className='mt-1 width-60'>If it's good, “Create a Contact”</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='bg-light box'>
                            <i class="fas fa-cogs"></i>
                            </div>
                            <div className='content-box'>
                                <span className='badge'>Condition</span>
                                <p className='mt-1 width-60'>Check the lead score or email open rate in Mailchimp</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div  className='width-30 float-right'>
                    <div className=' content-box_right'>
                    <h3 className='clr-primary-900 mb-1'>
                        Complex Workflows
                    </h3>
                    <p className='mb-3 width-60'>
                    Create complex workflows spanning across multiple apps in minutes. Add delay, conditional logic, format data and do much more.
                    </p>
                    </div>
                    </div>
                </div>
            </section>

            <section className='bg-light'>
                <h2 className='text-center'>The Modern iPaaS Platform</h2>
                <p className='mt-1 mb-4 text-center'>The power of automation for all users, across business functions and applications.</p>
            
                <div className='container split'>
                    
                    <div>
                        <img src={FeatureImg} alt='feature' />
                    </div>

                    <div>
                    <div className='d-flex mb-3'>
                        <img src={Connector} alt='connector' className='feature-icon' />
                        <div>
                        <h3 className='mb-1'>200+ Connectors</h3>
                        <p>Connect 200+ cloud applications. Use our Webhooks / Rest API to connect other apps.</p>
                        </div>
                    </div>
                    
                    <div className='d-flex mb-3'>
                        <img src={PowerTool} alt='connector' className='feature-icon' />
                        <div>
                        <h3 className='mb-1'>Powerful Tools</h3>
                        <p>Format data, add conditional logic, or time delay into your workflows.</p>
                        </div>
                    </div>
                    
                    <div className='d-flex mb-3'>
                        <img src={Sharing} alt='connector' className='feature-icon' />
                        <div>
                        <h3 className='mb-1'>Sharing & Collaboration</h3>
                        <p>Create and Share Workflows with your team. Imbibe a culture of automation across your organization.</p>
                        </div>
                    </div>
                    
                    <div className='d-flex'>
                        <img src={SecureReliable} alt='connector' className='feature-icon' />
                        <div>
                        <h3 className='mb-1'>Secure & Reliable</h3>
                        <p>Data encryption at rest and transit, data retention controls and audit logs.</p>
                        </div>
                    </div>
                    </div>
                </div>

                <h4 className='mt-1 text-center'><Link to='/' className='link clr-accent'>See all features</Link></h4>
            </section>

            <section className='bg-primary'>
                <h2 className='text-center mb-1'>Supported Apps</h2>
                <p className='text-center'>All popular apps for - CRM, Marketing, E-Commerce, Helpdesk, Payments, Web forms, Collaboration and more.</p>

                <div className='supported-container'>
                    
                    <ul>
                        <li className='justify-center'><img src={Notion} alt='notion' className='support-icon' /></li>
                        <li>
                        <svg className='support-icon' width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.96 0.448083L3.12963 6.9984C2.24931 7.36272 2.25843 8.61336 3.14427 8.96448L19.0407 15.2683C20.4374 15.8223 21.9928 15.8223 23.3895 15.2683L39.2861 8.96424C40.1717 8.61336 40.1813 7.36296 39.3005 6.99864L23.4706 0.447843C22.0264 -0.149769 20.404 -0.149769 18.9598 0.447843" fill="#FCB400"/>
                        <path d="M22.6255 18.7104V34.4585C22.6255 35.2073 23.3808 35.7204 24.077 35.4444L41.7904 28.5689C41.988 28.4906 42.1575 28.3547 42.2769 28.1789C42.3963 28.0031 42.4601 27.7955 42.46 27.583V11.8351C42.46 11.0861 41.7048 10.5732 41.0085 10.8492L23.2951 17.7247C23.0976 17.8031 22.9281 17.939 22.8087 18.1148C22.6894 18.2905 22.6255 18.4981 22.6255 18.7106" fill="#18BFFF"/>
                        <path d="M18.4891 19.523L13.2322 22.0613L12.6984 22.3193L1.60128 27.6365C0.89808 27.9758 0 27.4632 0 26.6818V11.9011C0 11.6184 0.14496 11.3743 0.33936 11.1907C0.419112 11.1113 0.50959 11.0434 0.60816 10.9891C0.87312 10.83 1.25136 10.7875 1.57296 10.9147L18.4008 17.5824C19.2562 17.9218 19.3234 19.1203 18.4891 19.5233" fill="#F82B60"/>
                        <path d="M18.4891 19.523L13.2322 22.0613L0.339355 11.1905C0.419123 11.1112 0.5096 11.0434 0.608155 10.9891C0.873115 10.83 1.25136 10.7875 1.57296 10.9147L18.4008 17.5824C19.2562 17.9218 19.3234 19.1203 18.4891 19.5233" fill="black" fill-opacity="0.25"/>
                        </svg>
                        </li>
                        <li>
                        <svg className="support-icon" width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.806 10.75V7.22302C22.2721 7.00518 22.6667 6.65946 22.9439 6.22607C23.2212 5.79269 23.3696 5.28948 23.372 4.77502V4.69402C23.372 3.19402 22.156 1.97802 20.656 1.97802H20.575C19.8547 1.97802 19.1638 2.26416 18.6545 2.77351C18.1451 3.28286 17.859 3.97369 17.859 4.69402V4.77502C17.8614 5.28948 18.0098 5.79269 18.287 6.22607C18.5643 6.65946 18.9589 7.00518 19.425 7.22302V10.75C18.0854 10.9551 16.8238 11.5105 15.768 12.36L6.09498 4.82602C6.16398 4.57702 6.19998 4.32102 6.20398 4.06402C6.20517 3.45872 6.02681 2.86667 5.69147 2.36276C5.35613 1.85884 4.87888 1.4657 4.32008 1.23306C3.76128 1.00041 3.14603 0.938726 2.55216 1.05579C1.95829 1.17286 1.41248 1.46343 0.983777 1.89074C0.555069 2.31805 0.262721 2.8629 0.143712 3.45638C0.0247029 4.04986 0.0843847 4.66531 0.315198 5.22487C0.546011 5.78443 0.937587 6.26296 1.4404 6.59995C1.94322 6.93693 2.53469 7.11722 3.13998 7.11802C3.66953 7.11552 4.18916 6.97415 4.64699 6.70802L14.172 14.12C13.3163 15.4127 12.8699 16.9331 12.891 18.4832C12.912 20.0333 13.3995 21.5411 14.29 22.81L11.393 25.708C11.1588 25.6331 10.9148 25.5934 10.669 25.59C10.1721 25.5904 9.68654 25.7381 9.27359 26.0144C8.86063 26.2907 8.53884 26.6831 8.34889 27.1423C8.15893 27.6014 8.10934 28.1065 8.20636 28.5938C8.30339 29.0811 8.5427 29.5286 8.89402 29.88C9.24535 30.2313 9.69294 30.4706 10.1802 30.5676C10.6675 30.6647 11.1726 30.6151 11.6317 30.4251C12.0909 30.2352 12.4833 29.9134 12.7596 29.5004C13.0359 29.0875 13.1836 28.6019 13.184 28.105C13.1808 27.8592 13.141 27.6152 13.066 27.381L15.932 24.514C16.8666 25.2335 17.9534 25.7296 19.1093 25.9641C20.2652 26.1987 21.4595 26.1656 22.6006 25.8673C23.7417 25.569 24.7995 25.0135 25.6927 24.2433C26.586 23.4731 27.2911 22.5087 27.7541 21.4239C28.217 20.3391 28.4255 19.1627 28.3636 17.9848C28.3017 16.807 27.971 15.659 27.3969 14.6287C26.8227 13.5984 26.0204 12.7132 25.0513 12.0409C24.0822 11.3686 22.9721 10.927 21.806 10.75V10.75ZM20.618 22.35C20.0883 22.3646 19.5611 22.2728 19.0675 22.0802C18.5739 21.8876 18.1239 21.598 17.7441 21.2285C17.3643 20.859 17.0624 20.4171 16.8563 19.929C16.6501 19.4409 16.5439 18.9164 16.5439 18.3865C16.5439 17.8566 16.6501 17.3321 16.8563 16.844C17.0624 16.3559 17.3643 15.914 17.7441 15.5445C18.1239 15.1751 18.5739 14.8854 19.0675 14.6928C19.5611 14.5002 20.0883 14.4084 20.618 14.423C21.6446 14.459 22.6171 14.8919 23.3308 15.6307C24.0445 16.3695 24.4437 17.3564 24.4442 18.3836C24.4447 19.4108 24.0466 20.3981 23.3336 21.1376C22.6207 21.8771 21.6485 22.311 20.622 22.348" fill="#FF7A59"/>
                        </svg>
                        </li>
                        <li>
                            <img src={MSoffice} alt='ms office' className='support-icon' />
                        </li>
                        <li>
                        <svg className='support-icon' xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                        </svg>
                        </li>
                        <li>
                        <svg className='support-icon' width="53" height="60" viewBox="0 0 53 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.3758 11.5534C46.3342 11.2504 46.0695 11.0823 45.8498 11.064C45.6318 11.0457 41.3604 10.9808 41.3604 10.9808C41.3604 10.9808 37.7881 7.51175 37.4352 7.15885C37.0824 6.80596 36.3932 6.91249 36.1252 6.99239C36.1219 6.99406 35.4544 7.20047 34.3308 7.54837C34.1427 6.93913 33.8663 6.19005 33.4718 5.43765C32.2001 3.01066 30.3374 1.72725 28.0868 1.72393C28.0835 1.72393 28.0818 1.72393 28.0785 1.72393C27.922 1.72393 27.7672 1.73891 27.6108 1.75222C27.5442 1.67232 27.4776 1.59409 27.4077 1.51751C26.4272 0.468815 25.1705 -0.0422181 23.664 0.00272612C20.7576 0.0859563 17.8629 2.18502 15.5158 5.91373C13.8645 8.53714 12.6077 11.8331 12.2515 14.3849C8.91395 15.4186 6.58017 16.141 6.52857 16.1577C4.84399 16.687 4.79073 16.7386 4.571 18.3267C4.40787 19.5268 0 53.6113 0 53.6113L36.9392 60L52.9493 56.0199C52.9493 56.0199 46.4174 11.8564 46.3758 11.5534ZM32.4814 8.12099C31.6308 8.384 30.6636 8.68363 29.6149 9.00823C29.5933 7.53672 29.4185 5.48926 28.7327 3.71978C30.9383 4.1376 32.0236 6.63284 32.4814 8.12099ZM27.6823 9.60748C25.7464 10.2067 23.634 10.8609 21.515 11.5168C22.1109 9.23461 23.2412 6.96243 24.6295 5.47261C25.1455 4.9183 25.8679 4.30073 26.7235 3.94783C27.5275 5.62575 27.7023 8.00114 27.6823 9.60748ZM23.7222 1.93699C24.4047 1.92201 24.979 2.07183 25.4701 2.39476C24.6844 2.80259 23.9253 3.38853 23.2129 4.15258C21.3668 6.13346 19.9519 9.20798 19.3876 12.1743C17.6281 12.7186 15.9069 13.253 14.3222 13.7424C15.3227 9.07315 19.2361 2.06683 23.7222 1.93699Z" fill="#95BF47"/>
                        <path d="M45.8514 11.0657C45.6334 11.0474 41.362 10.9825 41.362 10.9825C41.362 10.9825 37.7898 7.51344 37.4369 7.16055C37.3054 7.02904 37.1273 6.96079 36.9408 6.9325L36.9425 59.9984L52.951 56.02C52.951 56.02 46.4191 11.8581 46.3775 11.5551C46.3358 11.2521 46.0695 11.084 45.8514 11.0657Z" fill="#5E8E3E"/>
                        <path d="M28.0668 19.2972L26.2075 26.2535C26.2075 26.2535 24.1334 25.3097 21.6748 25.4645C18.0692 25.6926 18.0309 27.9664 18.0676 28.5374C18.264 31.6485 26.4488 32.3277 26.9083 39.6153C27.2695 45.3482 23.867 49.27 18.9648 49.5796C13.0804 49.9508 9.84109 46.4801 9.84109 46.4801L11.0879 41.1767C11.0879 41.1767 14.3488 43.637 16.9589 43.4722C18.6635 43.364 19.2727 41.9774 19.2111 40.9969C18.9548 36.9386 12.2897 37.1783 11.8686 30.5099C11.514 24.8986 15.1995 19.2123 23.331 18.6996C26.4638 18.4982 28.0668 19.2972 28.0668 19.2972Z" fill="white"/>
                        </svg>
                        </li>
                    </ul>

                    <ul >
                    <li>
                    <img src={Salesforce} alt='salesforce' className='support-icon' />
                    </li>
                    <li>
                    <svg className='support-icon' width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8845 0.0270135H2.69696C2.07536 0.0270135 1.47922 0.273944 1.03968 0.713482C0.600141 1.15302 0.35321 1.74916 0.35321 2.37076L0.35321 19.5583C0.35321 20.1799 0.600141 20.776 1.03968 21.2155C1.47922 21.6551 2.07536 21.902 2.69696 21.902H9.39862V14.465H6.32245V10.9645H9.39862V8.29654C9.39862 5.26188 11.2053 3.58561 13.9724 3.58561C15.2975 3.58561 16.6833 3.82194 16.6833 3.82194V6.80045H15.1564C13.652 6.80045 13.1828 7.73404 13.1828 8.69156V10.9645H16.5412L16.0041 14.465H13.1828V21.902H19.8845C20.5061 21.902 21.1022 21.6551 21.5417 21.2155C21.9813 20.776 22.2282 20.1799 22.2282 19.5583V2.37076C22.2282 1.74916 21.9813 1.15302 21.5417 0.713482C21.1022 0.273944 20.5061 0.0270135 19.8845 0.0270135V0.0270135Z" fill="#1977F3"/>
                    </svg>
                    </li>
                    <li>
                    <img src={Quickbook} alt='quickbook' className='support-icon' />
                    </li>
                    <li>
                    <svg className='support-icon' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40555 0.776825C4.22166 0.776825 0.934326 4.06416 0.934326 8.24805C0.934326 10.4396 1.83087 12.4319 3.2255 13.8266C3.72358 14.3246 4.62012 14.3246 5.21782 13.9262C6.01475 13.2289 7.21015 12.8304 8.40555 12.8304C9.70056 12.8304 10.6967 13.2289 11.5933 13.9262C12.191 14.4243 12.9879 14.3246 13.5856 13.7269C14.9802 12.3323 15.8768 10.4396 15.8768 8.24805C15.7772 4.16378 12.4898 0.776825 8.40555 0.776825V0.776825ZM8.30592 12.1331C6.01475 12.1331 4.52051 10.4396 4.52051 8.34766C4.52051 6.25572 6.01475 4.56224 8.30592 4.56224C10.5971 4.56224 12.0913 6.25572 12.0913 8.34766C12.0913 10.4396 10.5971 12.1331 8.30592 12.1331Z" fill="#81B5A1"/>
                    </svg>
                    </li>
                    <li>
                    <svg className='support-icon' width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.2 80C27.2 87.3 21.3 93.2 14 93.2C6.69999 93.2 0.799988 87.3 0.799988 80C0.799988 72.7 6.69999 66.8 14 66.8H27.2V80ZM33.8 80C33.8 72.7 39.7 66.8 47 66.8C54.3 66.8 60.2 72.7 60.2 80V113C60.2 120.3 54.3 126.2 47 126.2C39.7 126.2 33.8 120.3 33.8 113V80Z" fill="#E01E5A"/>
                    <path d="M47 27C39.7 27 33.8 21.1 33.8 13.8C33.8 6.49998 39.7 0.599976 47 0.599976C54.3 0.599976 60.2 6.49998 60.2 13.8V27H47ZM47 33.7C54.3 33.7 60.2 39.6 60.2 46.9C60.2 54.2 54.3 60.1 47 60.1H13.9C6.60001 60.1 0.700012 54.2 0.700012 46.9C0.700012 39.6 6.60001 33.7 13.9 33.7H47Z" fill="#36C5F0"/>
                    <path d="M99.9 46.9C99.9 39.6 105.8 33.7 113.1 33.7C120.4 33.7 126.3 39.6 126.3 46.9C126.3 54.2 120.4 60.1 113.1 60.1H99.9V46.9ZM93.3 46.9C93.3 54.2 87.4 60.1 80.1 60.1C72.8 60.1 66.9 54.2 66.9 46.9V13.8C66.9 6.49998 72.8 0.599976 80.1 0.599976C87.4 0.599976 93.3 6.49998 93.3 13.8V46.9V46.9Z" fill="#2EB67D"/>
                    <path d="M80.1 99.8C87.4 99.8 93.3 105.7 93.3 113C93.3 120.3 87.4 126.2 80.1 126.2C72.8 126.2 66.9 120.3 66.9 113V99.8H80.1ZM80.1 93.2C72.8 93.2 66.9 87.3 66.9 80C66.9 72.7 72.8 66.8 80.1 66.8H113.2C120.5 66.8 126.4 72.7 126.4 80C126.4 87.3 120.5 93.2 113.2 93.2H80.1Z" fill="#ECB22E"/>
                    </svg>
                    </li>
                    <li>
                    <svg className='support-icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1574 0H2.74143C1.22776 0 0.00217014 1.22559 0.00217014 2.73438C-0.00271267 2.73438 0.00217014 2.53906 0.00217014 19.1406C0.00217014 20.6494 1.22776 21.875 2.73655 21.875H19.1526C20.6565 21.8652 21.8723 20.6445 21.8723 19.1406V2.73438C21.8772 1.23047 20.6613 0.00976563 19.1574 0V0ZM9.62131 16.5674C9.61155 17.2852 9.03049 17.8662 8.30783 17.8662H4.26975C3.54709 17.8711 2.95627 17.29 2.95139 16.5674V4.15527C2.95139 3.43262 3.53733 2.8418 4.26487 2.8418H8.31272C9.03537 2.8418 9.62619 3.42773 9.62619 4.15527V16.5674H9.62131ZM19.05 11.0986C19.05 11.8213 18.4641 12.4121 17.7365 12.4121H13.7815C13.0588 12.4121 12.468 11.8262 12.468 11.0986V4.16016C12.468 3.4375 13.0539 2.84668 13.7766 2.84668H17.7365C18.4592 2.84668 19.05 3.43262 19.05 4.16016V11.0986Z" fill="#116DD9"/>
                    </svg>
                    </li>
                    <li>
                    <svg className='support-icon' width="203" height="154" viewBox="0 0 203 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M93.82 40.5V153.36H0.339966L93.82 40.5ZM93.82 0C93.82 12.3962 88.8956 24.2847 80.1301 33.0502C71.3647 41.8156 59.4762 46.74 47.08 46.74C34.6838 46.74 22.7953 41.8156 14.0298 33.0502C5.26435 24.2847 0.339966 12.3962 0.339966 0L93.82 0ZM109.22 153.37C109.22 140.974 114.144 129.085 122.91 120.32C131.675 111.554 143.564 106.63 155.96 106.63C168.356 106.63 180.245 111.554 189.01 120.32C197.776 129.085 202.7 140.974 202.7 153.37H109.22ZM109.22 112.87V0H202.72L109.22 112.86V112.87Z" fill="#03363D"/>
                    </svg>
                    </li>
                    </ul>
                    <ul>
                        <li>
                        <svg className='support-icon' viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
	                    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
	                    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
	                    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
	                    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
	                    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
	                    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                        </svg>
                        </li>
                        <li>
                        <svg className='support-icon' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4225 12.3743C18.5732 12.3548 18.7259 12.3548 18.8766 12.3743C18.9577 12.1873 18.9718 11.8651 18.8986 11.5145C18.7897 10.9935 18.6422 10.6776 18.338 10.7269C18.0338 10.7762 18.0221 11.1536 18.131 11.6751C18.1925 11.9681 18.3014 12.2191 18.424 12.3743H18.4225ZM15.8073 12.7884C16.0255 12.8861 16.1588 12.9476 16.2116 12.8924C16.3039 12.7977 16.0416 12.4339 15.6198 12.2532C15.3762 12.1523 15.1107 12.1158 14.8489 12.1473C14.5871 12.1788 14.3379 12.2771 14.1251 12.4329C13.9787 12.5394 13.8414 12.6878 13.861 12.7777C13.9025 12.9603 14.3493 12.6453 14.9645 12.6077C15.3063 12.5863 15.5895 12.6932 15.8073 12.7889V12.7884ZM15.3678 13.0389C14.9249 13.1082 14.6354 13.3577 14.7101 13.5321C14.754 13.5487 14.7672 13.5716 14.9645 13.4925C15.2559 13.3825 15.5708 13.3497 15.8786 13.3973C16.0211 13.4139 16.089 13.4227 16.1198 13.3734C16.1911 13.265 15.841 12.9827 15.3683 13.0389H15.3678ZM18.0128 13.8738C18.1779 13.5384 17.4806 13.1937 17.3146 13.5321C17.1486 13.8704 17.8478 14.2098 18.0138 13.8724L18.0128 13.8738ZM18.7775 12.8743C18.4035 12.868 18.3893 13.6458 18.7648 13.6522C19.1403 13.6585 19.1544 12.8802 18.7785 12.8729L18.7775 12.8743ZM8.09438 16.7269C8.02993 16.742 7.80141 16.7977 7.6808 16.6121C7.4269 16.2215 8.22329 15.617 7.82729 14.8655C7.38295 14.0125 6.46889 14.2044 6.11586 14.595C5.69057 15.0638 5.69008 15.7445 5.87172 15.7708C6.08022 15.7987 6.07094 15.4549 6.23207 15.203C6.2771 15.1335 6.33545 15.0736 6.40374 15.0268C6.47204 14.98 6.54894 14.9473 6.62998 14.9304C6.71103 14.9135 6.79462 14.9128 6.87592 14.9284C6.95723 14.944 7.03463 14.9756 7.10366 15.0213C7.66957 15.3919 7.17055 15.8885 7.21498 16.4188C7.28286 17.2332 8.1144 17.2181 8.2687 16.8582C8.27866 16.8405 8.28306 16.8201 8.28132 16.7998C8.27957 16.7795 8.27177 16.7603 8.25893 16.7445C8.26039 16.7879 8.29213 16.681 8.09536 16.7254L8.09438 16.7269ZM22.7291 15.8934C22.5656 15.3206 22.6037 15.4432 22.3981 14.8914C22.5177 14.7122 23.1447 13.7196 22.2482 12.7796C21.7404 12.2464 20.5929 11.972 20.2414 11.8743C20.1681 11.3182 20.4684 9.00813 19.1906 7.8216C20.2057 6.76936 20.839 5.61018 20.8375 4.61604C20.8346 2.70393 18.4865 2.1258 15.5924 3.32356L14.9796 3.58381C14.9767 3.58137 13.8707 2.49641 13.8541 2.48176C10.5558 -0.395194 0.239886 11.0701 3.53823 13.8553L4.25893 14.4661C4.06443 14.988 3.99584 15.5485 4.05873 16.1019C4.2228 17.7327 5.81655 19.0521 7.3561 19.0501C10.1749 25.5472 20.4372 25.5579 23.0929 19.1966C23.1779 18.9783 23.5377 17.9949 23.5377 17.1273C23.5377 16.2596 23.0451 15.8934 22.7306 15.8934H22.7291ZM7.29946 18.2449C6.1852 18.2152 4.98207 17.2122 4.86245 16.0228C4.56118 13.0291 8.48842 12.3475 8.96401 15.4207C9.18569 16.868 8.73598 18.2767 7.29799 18.2435L7.29946 18.2449ZM6.39565 12.6688C5.65541 12.8128 5.00307 13.2322 4.60366 13.8138C4.36537 13.6151 3.92006 13.2279 3.84243 13.0814C3.20717 11.868 4.53774 9.51691 5.4684 8.1883C7.76869 4.90559 11.3707 2.42121 13.0392 2.8719C13.3102 2.94856 14.2081 3.98957 14.2081 3.98957C14.2081 3.98957 12.5407 4.91438 10.9953 6.20393C8.91225 7.80793 7.33852 10.139 6.39565 12.6688ZM18.0597 17.6077C18.0597 17.6077 16.3146 17.8665 14.6657 17.2625C14.9689 16.2781 15.984 17.5604 19.3727 16.5882C20.1193 16.3743 21.0997 15.9534 21.8629 15.3504C22.0272 15.7298 22.1439 16.128 22.2106 16.536C22.3893 16.5037 22.9064 16.5106 22.7692 17.4197C22.6085 18.39 22.1964 19.1776 21.5031 19.9022C21.07 20.3714 20.5544 20.7572 19.9821 21.0404C19.6633 21.2074 19.331 21.3475 18.9889 21.4593C16.3761 22.3128 13.7008 21.3743 12.8366 19.3597C12.7665 19.2059 12.7085 19.0469 12.6632 18.8841C12.2956 17.556 12.6076 15.9627 13.5831 14.9598C13.6432 14.8958 13.7042 14.8206 13.7042 14.7259C13.6957 14.6443 13.6631 14.5672 13.6105 14.5042C13.2687 14.0096 12.0875 13.1663 12.3248 11.534C12.4957 10.3621 13.5206 9.53645 14.4767 9.58527L14.7208 9.59943C15.1349 9.62385 15.4967 9.67707 15.838 9.69123C16.4088 9.71565 16.922 9.63313 17.5294 9.12678C17.7345 8.95588 17.8991 8.80744 18.1769 8.76008C18.2892 8.73227 18.406 8.72762 18.5202 8.74642C18.6344 8.76523 18.7435 8.80709 18.841 8.86945C19.3292 9.19367 19.3976 9.97932 19.423 10.5535C19.4372 10.8817 19.4767 11.6766 19.4904 11.9027C19.5211 12.4237 19.6579 12.4969 19.9352 12.5863C20.091 12.6375 20.2355 12.6756 20.4484 12.7357C21.0934 12.9168 21.4738 13.1009 21.7179 13.3367C21.8424 13.4587 21.9237 13.618 21.9494 13.7904C22.0255 14.3455 21.5187 15.0306 20.1764 15.6536C17.8956 16.7122 15.6022 16.3592 15.2702 16.3216C14.2863 16.1893 13.7257 17.4603 14.3156 18.3309C15.421 19.9622 20.2921 19.3074 21.7067 17.2884C21.7404 17.2396 21.7125 17.2108 21.671 17.2396C19.6315 18.6351 16.9318 19.1053 15.3986 18.5091C15.1657 18.4188 14.6793 18.1946 14.6203 17.6951C16.7492 18.3538 18.0871 17.7313 18.0871 17.7313C18.0871 17.7313 18.1862 17.595 18.0597 17.6077V17.6077ZM10.6442 8.17414C11.4616 7.22932 12.4684 6.40754 13.3703 5.94611C13.3771 5.94209 13.385 5.94044 13.3929 5.94143C13.4007 5.94242 13.408 5.94599 13.4136 5.95159C13.4192 5.95718 13.4228 5.96448 13.4238 5.97233C13.4248 5.98018 13.4231 5.98813 13.4191 5.99494C13.3478 6.12483 13.2096 6.40217 13.1657 6.61262C13.1639 6.61985 13.1644 6.62745 13.1671 6.63439C13.1698 6.64134 13.1745 6.6473 13.1807 6.65149C13.1868 6.65568 13.1941 6.6579 13.2015 6.65784C13.209 6.65779 13.2162 6.65547 13.2223 6.65119C13.7833 6.26887 14.7594 5.8592 15.6149 5.80647C15.6229 5.80592 15.631 5.80798 15.6378 5.81235C15.6446 5.81671 15.6498 5.82316 15.6526 5.83072C15.6555 5.83828 15.6558 5.84656 15.6536 5.85433C15.6514 5.8621 15.6467 5.86894 15.6403 5.87385C15.4988 5.98284 15.3723 6.1099 15.2638 6.25178C15.2599 6.25719 15.2575 6.26356 15.257 6.27022C15.2564 6.27687 15.2577 6.28356 15.2607 6.28954C15.2636 6.29552 15.2682 6.30058 15.2738 6.30417C15.2794 6.30775 15.2859 6.30973 15.2926 6.30988C15.8937 6.31428 16.7409 6.52473 17.2946 6.8343C17.3317 6.85529 17.3053 6.92756 17.2633 6.91828C13.8673 6.13996 11.2536 7.82307 10.6959 8.22834C10.6885 8.23313 10.6796 8.23511 10.6709 8.23392C10.6621 8.23274 10.654 8.22846 10.6482 8.22187C10.6423 8.21527 10.6389 8.20679 10.6387 8.19795C10.6385 8.18911 10.6415 8.1805 10.6471 8.17365L10.6442 8.17414Z" fill="black"/>
                        </svg>
                        </li>
                        <li>
                        <svg className='support-icon' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6617 0.665375H3.25543C1.74664 0.665375 0.521057 1.89096 0.521057 3.39975V19.806C0.521057 21.3148 1.74664 22.5404 3.25543 22.5404H19.6617C21.1705 22.5404 22.3961 21.3148 22.3961 19.806V3.39975C22.3961 1.89096 21.1705 0.665375 19.6617 0.665375ZM14.3736 4.67416C14.3736 3.70737 15.8336 3.70737 15.8336 4.67416V14.4154C15.8336 15.3822 14.3736 15.3822 14.3736 14.4154V4.67416ZM10.731 4.30795C10.731 3.34116 12.191 3.34116 12.191 4.30795V14.8792C12.191 15.846 10.731 15.846 10.731 14.8792V4.30795ZM7.08356 4.67416C7.08356 3.70737 8.54352 3.70737 8.54352 4.67416V14.4154C8.54352 15.3822 7.08356 15.3822 7.08356 14.4154V4.67416ZM3.4361 6.13412C3.4361 5.16733 4.89606 5.16733 4.89606 6.13412V12.6917C4.89606 13.6585 3.4361 13.6585 3.4361 12.6917V6.13412V6.13412ZM19.2271 17.2572C15.6724 20.3333 7.42535 20.4505 3.69489 17.2572C2.96246 16.6322 3.90973 15.5238 4.64215 16.1488C7.85992 18.849 15.1939 18.7806 18.2798 16.1488C19.0074 15.5189 19.9547 16.6273 19.2271 17.2572V17.2572ZM19.481 12.6917C19.481 13.6585 18.0211 13.6585 18.0211 12.6917V6.13412C18.0211 5.16733 19.481 5.16733 19.481 6.13412V12.6917Z" fill="#0075FF"/>
                        </svg>
                        </li>
                    </ul>

                </div>

                <h4 className='mt-3 text-center'><Link to='/' className='link clr-accent'>See all features</Link></h4>
            </section>

            <section className='container'>
            <div className='split mb-2'>
                <div>
                    <h2 className='mb-1'>Why Automate.io?</h2>
                    <p className='light-desc mb-2'>iPaaS products that connect multiple apps have been costly and complicated to use. Automate.io brings the same power to small businesses at economical price so you can automate away your tedious & repetitive tasks once and for all.</p>
                    <div className='rating-badge bg-light'>
                        Rated 4.8 out of 5
                    </div>
                </div>
                <div>
                    <div className='d-flex mb-3'>
                        <div className='why-box'>
                        <i class="fab fa-angellist"></i>
                        </div>
                        <div>
                        <h3 className='mb-1'>Easy</h3>
                        <p className='light-desc'>No coding. Easy to use drag and drop interface designed keeping non-technical users in mind.</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className='why-box'>
                        <i class="fas fa-globe"></i>
                        </div>
                        <div>
                        <h3 className='mb-1'>Trusted Worldwide</h3>
                        <p className='light-desc'>Used by 30,000+ organizations from 93 countries, from small businesses to Fortune 500.</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className='why-box'>
                        <i class="fas fa-shield-alt"></i>
                        </div>
                        <div>
                        <h3 className='mb-1'>Secure & Reliable</h3>
                        <p className='light-desc'>Runs on secure HTTPS and all sensitive data is stored using powerful encryption format.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className='split'>
                    <div className='review-box d-flex'>
                        <img src='https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' 
                        alt='kate' className='review__user-image' />
                        <div>
                            <p className='mb-1'>
                            The drag-and-drop interface makes setting up bots very easy. I was able to integrate the CRM I created in Airtable with Acuity Scheduling, Square, and Google Contacts. Now I don't have to quadruple-enter new clients. Yay!
                            </p>
                            <p className='light-desc'>Kate, Founder</p>
                        </div>
                    </div>
                    <div className='review-box d-flex'>
                        <img src='https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' 
                        alt='kate' className='review__user-image' />
                        <div>  
                            <p className='mb-1'>
                            Their team is always responsive whenever I have any issues and answer usually right away or within a couple of hours. Whether it’s live chat or via video call, they always try to answer all of my questions and even go in to troubleshoot for me which saves so much time and energy. I have never seen customer support this responsive and helpful!
                            </p>
                            <p className='light-desc'>Mia, Small Business Founder</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='cta-box bg-light'>
                     <div>
                         <h2 className='mb-05'>Put your business on autopilot</h2>
                         <p>Setup your automation workflows and see the magic in minutes. No Coding & IT help required.</p>
                     </div>
                     <button className='btn bg-accent'>Get Started</button>
                </div>
            </section>
        </Layout>
    )

}

export default Home