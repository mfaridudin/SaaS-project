"use client"

import Link from "next/link"

export default function Header() {
    return (
        <div>
            <header className="site-header header-transparent header mo-left">
                {/* <!-- main header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- website logo --> */}
                            <div className="logo-header mostion">
                                <a href="index.html" className="dez-page"><img src="/landingpage/images/logo-2.png" alt="" /></a>
                            </div>
                            {/* <!-- nav toggle button --> */}
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- extra nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link href="/auth/register" className="btn outline radius-xl btn-sign btn-aware">Sign up <span></span></Link>

                                    <button id="quik-search-btn" type="button" className="btn-link btn-search text-secondry"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                            {/* <!-- Quik search --> */}
                            <div className="dlab-quik-search">
                                <form action="#">
                                    <input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
                                    <span id="quik-search-remove"><i className="ti-close"></i></span>
                                </form>
                            </div>
                            {/* <!-- main nav --> */}
                            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                <div className="logo-header mostion">
                                    <a href="index.html" className="dez-page"><img src="/landingpage/images/logo.png" alt="" /></a>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><a href="#"><span>Home</span></a></li>
                                    {/* <li><a href="#services"><span>Services</span></a></li> */}
                                    <li><a href="#about"><span>About</span></a></li>
                                    <li><a href="#experience"><span>Experience</span></a></li>
                                    <li><a href="#features"><span>Features</span></a></li>
                                    <li><a href="#testimonials"><span>Testimonials</span></a></li>
                                    <li><a href="#projects"><span>Projects</span></a></li>
                                    <li><a href="#announcements"><span></span>Announcements</a></li>

                                    {/* <li><a href="#"><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="about-1.html">About </a></li>
                                            <li><a href="coming-soon.html">Comign Soon</a></li>
                                            <li><a href="clients.html">Clients</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><span>Protfolio</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio-1.html">Portfolio 1</a></li>
                                            <li><a href="portfolio-2.html">Portfolio 2</a></li>
                                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><a href="javascript:void(0)"><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="javascript:void();">Page Layout <i className="fa fa-angle-right"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void();">No Sidebar <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list.html">Blog List</a></li>
                                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                                            <li><a href="blog-grid-wide.html">Blog Grid Wide</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void();">2 Columns <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list-right-sidebar.html">Blog List</a></li>
                                                            <li><a href="blog-grid-right-sidebar.html">Blog Grid</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void();">3 Columns <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list-both-sidebar.html">Blog List</a></li>
                                                            <li><a href="blog-grid-both-sidebar.html">Blog Grid</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void();">Blog Sidebar <i className="fa fa-angle-right"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void();">No Sidebar <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list.html">Blog List</a></li>
                                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void();">Left Sidebar <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list-left-sidebar.html">Blog List</a></li>
                                                            <li><a href="blog-grid-left-sidebar.html">Blog Grid</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void();">Right Sidebar <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list-right-sidebar.html">Blog List</a></li>
                                                            <li><a href="blog-grid-right-sidebar.html">Blog Grid</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void();">2 Sidebar <i className="fa fa-angle-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-list-both-sidebar.html">Blog List</a></li>
                                                            <li><a href="blog-grid-both-sidebar.html">Blog Grid</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-mega-menu"><a href="javascript:void(0)"><span>Post Layout</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="mega-menu">
                                            <li><a href="javascript:void(0)">Side Bar</a>
                                                <ul>
                                                    <li><a href="post-left-sidebar.html">Post Left Sidebar</a></li>
                                                    <li><a href="post-right-sidebar.html">Post Right Sidebar</a></li>
                                                    <li><a href="post-both-sidebar.html">Post Both Sidebar <span className="new-page">New</span></a></li>
                                                    <li><a href="post-no-sidebar.html">Post No Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="javascript:void(0)">Post Types</a>
                                                <ul>
                                                    <li><a href="post-text.html">Text Post <span className="new-page">New</span></a></li>
                                                    <li><a href="post-image.html">Image Post <span className="new-page">New</span></a></li>
                                                    <li><a href="post-video.html">Post Video</a></li>
                                                    <li><a href="post-link.html">Post Link</a></li>
                                                    <li><a href="post-audio.html">Post Audio</a></li>
                                                    <li><a href="post-quote.html">Post Quote</a></li>
                                                    <li><a href="post-tutorial.html">Tutorial Post <span className="new-page">New</span></a></li>
                                                    <li><a href="post-cateloge.html">Cateloge Post <span className="new-page">New</span></a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="javascript:void(0)">Multiple Media</a>
                                                <ul>
                                                    <li><a href="post-banner.html">Banner <span className="new-page">New</span></a></li>
                                                    <li><a href="post-slide-show.html">Post Slide Show</a></li>
                                                    <li><a href="post-gallery.html">Gallery</a></li>
                                                    <li><a href="post-status-slider.html">Status Slider <span className="new-page">New</span></a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="javascript:void(0)">Post Layout Type</a>
                                                <ul>
                                                    <li><a href="post-standard.html">Standard Post </a></li>
                                                    <li><a href="post-side.html">Side Post <span className="new-page">New</span></a></li>
                                                    <li><a href="post-corner.html">Corner Post <span className="new-page">New</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li><Link href="#announcements"><span>Announcements</span></Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- main header END --> */}
            </header>
        </div>
    )
}
