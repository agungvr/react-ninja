import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar fixed-top">

        <div className="search-box">
          <button className="dismiss">
            <i className="ion-close-round"/>
          </button>
          <form id="searchForm" action="#" role="search">
            <input type="search" placeholder="Search something ..." className="form-control"/>
          </form>
        </div>

        <div className="navbar-holder">
          <div className="row align-items-center">
            <div className="col-xl-4 col-2">

              <Link to={'#'} id="toggle-btn" href="#" className="menu-btn active ml-2">
                <span/>
                <span/>
                <span/>
              </Link>

            </div>
            <div className="col-xl-4 col-3 d-flex justify-content-center">
              <div className="navbar-header">
                <a href="db-default.html" className="navbar-brand">
                  <div className="brand-image brand-big d-flex justify-content-center align-items-center"
                       style={{ height: 60 }}>
                    <img src="assets/img/logo-ninja.png" alt="logo" className="logo-big" style={{ width: 60 }}/>
                    <h3 className="title-header">React Ninja<span className="text-logo">!</span></h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-7">

              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">

                <li className="nav-item dropdown">
                  <Link to={'#'} id="notifications" rel="nofollow" data-target="#"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        className="nav-link">
                    <i className="la la-bell animated infinite swing"/>
                    <span className="badge-pulse"/>
                  </Link>
                  <ul aria-labelledby="notifications" className="dropdown-menu notification">
                    <li>
                      <div className="notifications-header">
                        <div className="title">Notifications (4)</div>
                        <div className="elisyam-overlay overlay-07"/>
                        <img src="assets/img/notifications/01.jpg" alt="..." className="img-fluid"/>
                      </div>
                    </li>
                    <li>
                      <Link to={'#'}>
                        <div className="message-icon">
                          <i className="la la-user"/>
                        </div>
                        <div className="message-body">
                          <div className="message-body-heading">
                            New user registered
                          </div>
                          <span className="date">2 hours ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'}>
                        <div className="message-icon">
                          <i className="la la-calendar-check-o"/>
                        </div>
                        <div className="message-body">
                          <div className="message-body-heading">
                            New event added
                          </div>
                          <span className="date">7 hours ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'}>
                        <div className="message-icon">
                          <i className="la la-history"/>
                        </div>
                        <div className="message-body">
                          <div className="message-body-heading">
                            Server rebooted
                          </div>
                          <span className="date">7 hours ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'}>
                        <div className="message-icon">
                          <i className="la la-twitter"/>
                        </div>
                        <div className="message-body">
                          <div className="message-body-heading">
                            You have 3 new followers
                          </div>
                          <span className="date">10 hours ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'} rel="nofollow" className="dropdown-item all-notifications text-center">
                        View All Notifications
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link to={'#'} id="user" rel="nofollow" data-target="#" href="#"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                     className="nav-link">
                    <img src="assets/img/avatar/avatar-01.jpg" alt="..." className="avatar rounded-circle"/>
                  </Link>
                  <ul aria-labelledby="user" className="user-size dropdown-menu">
                    <li className="welcome">
                      <Link to={'#'} className="edit-profil">
                        <i className="la la-gear"/>
                      </Link>
                      <img src="assets/img/avatar/avatar-01.jpg" alt="..." className="rounded-circle"/>
                    </li>
                    <li>
                      <Link to={'#'} className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'} className="dropdown-item">
                        Messages
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'} className="dropdown-item no-padding-bottom">
                        Settings
                      </Link>
                    </li>
                    <li className="separator"/>
                    <li>
                      <Link to={'#'} className="dropdown-item no-padding-top">
                        Faq
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'} className="dropdown-item logout text-center">
                        <i className="ti-power-off"/>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to={'#'} className="open-sidebar">
                    <i className="la la-ellipsis-h"/>
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </div>

      </nav>
    </header>
  )
};

export default Header;
