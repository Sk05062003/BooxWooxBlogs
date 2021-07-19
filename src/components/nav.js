import React from "react";

export default function Nav () {

    return ( <div style={{height:100+'px'}}> 

<div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
            <span className="icofont-close js-menu-toggle"></span>
        </div>
    </div>
    <div className="site-mobile-menu-body"></div>
</div>
<div id="sticky-wrapper" className="sticky-wrapper" style={{height:90+'px'}}>
<header className="site-navbar js-sticky-header site-navbar-target" role="banner">

    <div className="container">
        <div className="row align-items-center">
            <div className="col-6 col-lg-2">
                <a href='index.html'><img src="/assets/img/White.png" className="logo" alt='logo'/></a>
            </div>

            <div className="col-12 col-md-10 d-none d-lg-block">
                <nav className="site-navigation position-relative text-right" role="navigation">

                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                        <li><a href="#hero" className="nav-link scroll">Home</a></li>
                        <li><a href="#AboutUS" className="nav-link scroll">About Us</a></li>
                        <li><a href="#Features" className="nav-link scroll">Features</a></li>
                        <li className="active"><a href="blog.html" className="nav-link">Blog</a></li> 
                        <li><a href="#Contact" className="nav-link scroll">Contact</a></li>
                        <li><a href="#Download" className="nav-link scroll">Downloads</a></li>
                    </ul>
                </nav>
            </div>

            <div className="col-6 d-inline-block d-lg-none ml-md-0 py-3" style={{position:'relative', top:3+'px'}}>

                <a href="#" className="burger site-menu-toggle js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                </a>
            </div>

        </div>
    </div>
</header>

</div>
        </div>
    )
}