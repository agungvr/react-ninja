import React from 'react'

const RightContent = props => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-7 my-auto no-padding">
      <div className="authentication-form mx-auto">
        <div className="logo-centered d-flex justify-content-center align-items-center flex-column mb-5"
             style={{ width: 250 }}>
          <img src={"assets/img/logo-ninja.png"} alt="logo" className="no-margin-bottom"/>
          <h1>React Ninja<span className="text-logo">!</span></h1>
        </div>
        {props.children}
      </div>
    </div>
  )
};

export default RightContent;
