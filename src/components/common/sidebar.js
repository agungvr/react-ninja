import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'

const enhance = compose(
  withRouter,
  withHandlers({
    navigate: props => to => (e) => {
      props.history.push(to)
    }
  })
);

const Sidebar = enhance(props => {
  return (
    <div className="default-sidebar">
      <div className="compact-light-sidebar has-shadow">

        <nav className="side-navbar box-scroll sidebar-scroll">

          <ul className="list-unstyled">
            <li className="active">
              <a href="#dropdown-db" aria-expanded="false" data-toggle="collapse">
                <i className="la la-puzzle-piece"/>
              </a>
              <ul id="dropdown-db" className="collapse list-unstyled pt-0">
                <li><Link to={'#'}>Default</Link></li>
                <li><Link to={'#'}>Clean</Link></li>
                <li><Link to={'#'}>Compact</Link></li>
                <li><Link to={'#'}>Modern</Link></li>
                <li><Link to={'#'}>Social</Link></li>
                <li><Link to={'#'}>Smarthome</Link></li>
                <li><Link to={'#'}>All</Link></li>
              </ul>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  )
});

export default Sidebar
