import React from 'react'
import civil from  '../images/civil.jpeg';
import cse from '../images/cse.jpeg';
import ece from '../images/ece.jpeg';
import eee from '../images/eee.jpeg';
import mech from '../images/mech.jpeg';
import '../App.css';
import { Link } from 'react-router-dom';

function Branches() {
  return (
    <div>
        
      <div class="container my-4">
        <h1 className='display-4'>Branches We Allow </h1>
      </div>
      <div style={{ width: '90%', margin: '1% auto' }}><hr /></div>
      <div className='depts'>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={cse} className="card-img-top" alt="camera" />
          <div className="card-body">
            <h5 className="card-title">CSE</h5>
            <p className="card-text text-danger">Staff Coordinators :</p>
            <p className="card-text"> G.Thirumala - 9948791339</p>
            <p className="card-text"> G.Rajesh - 7013927371</p>
            <p className="card-text text-danger">Student Coordinators :</p>
            <p className="card-text"> SK. Yaseen - 9182342667</p>
            <p className="card-text"> SK.Imran - 7337005082</p>
           <Link to='/register' ><button type="button" class="btn btn-outline-secondary">Join Us Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={ece} className="card-img-top" alt="camera" />
          <div className="card-body">
            <h5 className="card-title">ECE</h5>
            <p className="card-text text-danger">Staff Coordinators :</p>
            <p className="card-text"> R.Ranjith Kumar - 7660801249</p>
            <p className="card-text"> M.Venkataratnam - 9553589953</p>
            <p className="card-text text-danger">Student Coordinators :</p>
            <p className="card-text"> P.SivaKumar - 9182627073</p>
            <p className="card-text"> CH.V.SainadhReddy - 6303339194</p>
           <Link to='/register' ><button type="button" class="btn btn-outline-secondary">Join Us Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={mech} className="card-img-top" alt="camera" />
          <div className="card-body">
            <h5 className="card-title">MECH</h5>
            <p className="card-text text-danger">Staff Coordinators :</p>
            <p className="card-text"> NCK.Prasad - 9490536904 </p>
            <p className="card-text text-danger">Student Coordinators :</p>
            <p className="card-text"> M.Pavan Srinivas - 8328051981</p>
         
           <Link to='/register' ><button type="button" class="btn btn-outline-secondary">Join Us Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={eee} className="card-img-top" alt="camera" />
          <div className="card-body">
            <h5 className="card-title">EEE</h5>
            <p className="card-text text-danger">Staff Coordinators :</p>
            <p className="card-text"> S.Muni Raja - 9949403091</p>
            <p className="card-text text-danger">Student Coordinators :</p>
            <p className="card-text"> S.Yeswanth - 8374532598</p>
           <Link to='/register' ><button type="button" class="btn btn-outline-secondary">Join Us Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={civil} className="card-img-top" alt="camera" />
          <div className="card-body">
            <h5 className="card-title">CIVIL</h5>
            <p className="card-text text-danger">Staff Coordinators :</p>
            <p className="card-text"> K.V.Ashok - 7981050808</p>
            <p className="card-text text-danger">Student Coordinators :</p>
            <p className="card-text"> SK.Sameer- 9618147717</p>
           <Link to='/register' ><button type="button" class="btn btn-outline-secondary">Join Us Now!</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Branches;