




export const DashBoardForm = () => {
    return (
        <div>
            <div id="preloader">
        <div className="loader"></div>
    </div>
    <div className="page-container">
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <a href="/">
                        <h1>Shaping</h1>
                    </a>
                </div>
            </div>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu" id="menu">
                            <li className="active">
                                <a href="/" aria-expanded="true"><i
                                        className="ti-dashboard"></i><span>dashboard</span></a>
                                <ul className="collapse">
                                    <li className="active"><a href="/">Dashboard</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/" aria-expanded="true"><i className="ti-user"></i><span>Clients

                                    </span></a>
                                <ul className="collapse">
                                    <li><a href="/">Clients</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/" aria-expanded="true"><i
                                        className="ti-user"></i><span>Assesments</span></a>
                                <ul className="collapse">
                                    <li><a href="/">Assesments</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/" aria-expanded="true"><i
                                        className="ti-user"></i><span>Users</span></a>
                                <ul className="collapse">
                                    <li><a href="/">User</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="main-content">
            <div className="header-area">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-8 clearfix">
                        <div className="nav-btn pull-left">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-4 clearfix">
                        <ul className="notification-area pull-right">
                            <li id="full-view"><i className="ti-fullscreen"></i></li>
                            <li id="full-view-exit"><i className="ti-zoom-out"></i></li>


                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-title-area">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="breadcrumbs-area clearfix">
                            <h4 className="page-title pull-left">Dashboard</h4>
                            <ul className="breadcrumbs pull-left">
                                <li><a href="/">Home</a></li>
                                <li><span>Dashboard</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 clearfix">
                        <div className="user-profile pull-right">
                            <img className="avatar user-thumb" src="./static/assets/images/author/avatar.png"
                                alt="avatar" />
                            <h4 className="user-name dropdown-toggle" data-toggle="dropdown"> <i
                                    className="fa fa-angle-down"></i></h4>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="{% url 'logout' %}">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content-inner"></div>

        </div>
        <footer>
            <div className="footer-area">
                <p>© Copyright 2018. All right reserved. Template by <a href="https://colorlib.com/wp/">Colorlib</a>.
                </p>
            </div>
        </footer>
    </div>
        </div>
    );
}