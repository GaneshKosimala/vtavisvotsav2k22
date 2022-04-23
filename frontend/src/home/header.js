import React from 'react'
import '../App.css';
import clglogo from '../images/vitslogo.jpg';
import festlogo from '../images/VisvotsavLogo.png';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
    <div>
      <div className="container-fluid text-center topcontainer">
        <div><img src={festlogo} className='festlogo' alt='festlogo' /></div>
         <div><h1 className='display-3'>VISVOTSAV2K22</h1></div>
      </div>
      <div>
        <h6 className='text-center text-muted'>(PBR VITS and VEC)</h6>
      </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
        <div className="container-fluid">
          <div className='menu'><img  src={clglogo} className='vitslogo' alt='collegelogo'/></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' style={{textDecoration :'none',color:'white'}}><div className='nav-link active'>Home</div></Link>
              </li>
              <li className="nav-item">
                <Link to='/register' style={{textDecoration :'none',color:'white'}}><div className='nav-link'>Register</div></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='topbar'>
        <div className='main-section'>
          <div className='welcome-text display-2  my-4 text-center'>Welcome to Visvotsav-2k22!!</div>
        </div>
      </div>
        <div style={{ width: '90%', margin: '1% auto' }}><hr /></div>
    </div>
  )
}

export default Header
