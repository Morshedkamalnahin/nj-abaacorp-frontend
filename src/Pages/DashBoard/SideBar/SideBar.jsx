import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <div className="vertical-menu">

                <div data-simplebar className="h-100">

                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">
                        {/* <!-- Left Menu Start --> */}
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title" data-key="t-menu">Menu</li>

                            <li>
                                <Link to='/dash-board'>
                                    <i data-feather="home"></i>
                                    <span data-key="t-dashboard">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dash-board/user'>
                                    <i data-feather=""></i>
                                    <span data-key="t-dashboard">User</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dash-board/order'>
                                    <i data-feather=""></i>
                                    <span data-key="t-dashboard">Orders</span>
                                </Link>
                            </li>

                            {/* <li>
                                <a href="javascript: void(0);" data-toggle="collapse" data-target='.sub-menu' aria-expanded="false" className="has-arrow ">
                                    <i data-feather="grid"></i>
                                    <span data-key="t-apps">Apps</span>
                                </a>
                             
                            </li> */}

                            {/* <li>
                                <a href="javascript: void(0);" className="has-arrow">
                                    <i data-feather="users"></i>
                                    <span data-key="t-authentication">Authentication</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><a href="auth-login.html" data-key="t-login">Login</a></li>
                                    <li><a href="auth-register.html" data-key="t-register">Register</a></li>
                                    <li><a href="auth-recoverpw.html" data-key="t-recover-password">Recover Password</a></li>
                                    <li><a href="auth-lock-screen.html" data-key="t-lock-screen">Lock Screen</a></li>
                                    <li><a href="auth-logout.html" data-key="t-logout">Log Out</a></li>
                                    <li><a href="auth-confirm-mail.html" data-key="t-confirm-mail">Confirm Mail</a></li>
                                    <li><a href="auth-email-verification.html" data-key="t-email-verification">Email Verification</a></li>
                                    <li><a href="auth-two-step-verification.html" data-key="t-two-step-verification">Two Step Verification</a></li>
                                </ul>
                            </li> */}
                            <li className="menu-title mt-2" data-key="t-components">Elements</li>
                            <li>
                                <Link to='/dash-board/blog'>
                                    <i data-feather="file-text"></i>
                                    <span data-key="t-pages">Blog</span>
                                </Link>

                            </li>

                            <li>
                                <Link to='/dash-board/project' >
                                    <i data-feather="briefcase"></i>
                                    <span data-key="t-components">Projects</span>
                                </Link>

                            </li>
                            <li>
                                <Link to='/dash-board/contact' >
                                    <i data-feather="briefcase"></i>
                                    <span data-key="t-components">Contact</span>
                                </Link>

                            </li>
                            <li>
                                <Link to='/dash-board/instagram' >
                                    <i data-feather="briefcase"></i>
                                    <span data-key="t-components">Instagram</span>
                                </Link>

                            </li>
                            <li>
                                <Link to='/dash-board/package' >
                                    <i data-feather="briefcase"></i>
                                    <span data-key="t-components">Packages</span>
                                </Link>

                            </li>
                            <li>
                                <Link to='/dash-board/slider' >
                                    <i data-feather="briefcase"></i>
                                    <span data-key="t-components">Slider</span>
                                </Link>

                            </li>





                            {/* <li>
                                <a href="javascript: void(0);" className="has-arrow">
                                    <i data-feather="gift"></i>
                                    <span data-key="t-ui-elements">Extended</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><a href="extended-lightbox.html" data-key="t-lightbox">Lightbox</a></li>
                                    <li><a href="extended-rangeslider.html" data-key="t-range-slider">Range Slider</a></li>
                                    <li><a href="extended-sweet-alert.html" data-key="t-sweet-alert">SweetAlert 2</a></li>
                                    <li><a href="extended-session-timeout.html" data-key="t-session-timeout">Session Timeout</a></li>
                                    <li><a href="extended-rating.html" data-key="t-rating">Rating</a></li>
                                    <li><a href="extended-notifications.html" data-key="t-notifications">Notifications</a></li>
                                </ul>
                            </li> */}








                        </ul>

                        <div className="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
                            <div className="card-body">
                                <img src="assets/images/giftbox.png" alt="" />
                                <div className="mt-4">
                                    <h5 className="alertcard-title font-size-16">Unlimited Access</h5>
                                    <p className="font-size-13">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>
                                    <a href="#!" className="btn btn-primary mt-2">Upgrade Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar