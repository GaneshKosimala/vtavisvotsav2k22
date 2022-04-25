import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import jsPDF from "jspdf";
import festlogo from '../images/VisvotsavLogo.png';
import axios from 'axios';
import pdf from '../pdfs/paymentrules.pdf';


var events = [
  {
    value:'select event',
    label:'select event'
  },
  {
    value:'Technical  Quiz',
    label:'Technical Quiz'
  },
  {
    value:'Project Expo',
    label:'Project Expo'
  },
  {
    value:'Coding',
    label:'Coding'
  },
  {
    value:'Poster Presentation',
    label:'Poster Presentation'
  },
  {
    value:'Paper Presentation',
    label:'Paper Presentation'
  },
  {
    value:'Circuitrix',
    label:'Circuitrix'
  }
]

var branches = [
    {
      value:'select branch',
      label:'select branch'
    },
    {
      value:'CSE',
      label:'CSE'
    },
    {
      value:'ECE',
      label:'ECE'
    },
    {
      value:'MECH',
      label:'MECH'
    },
    {
      value:'EEE',
      label:'EEE'
    },
    {
      value:'CIVIL',
      label:'CIVIL'
    },
    {
      value:'Others',
      label:'Others'
    }
]

class Register extends Component {
  constructor() {
    super()
    this.state = {
      collegename: '',
      member: '',
      names: [],
      programs:'',
      noofmembers:'',
      branch:'',
      rollno:'',
      rollnumbers:[],
      email:'',
      participants:'',
      strollnos:'',
      refno:'',
      idnumber:0,
      value:false,
      rvalue:false,
      flag:false,
      load:false,
      msg:false,
      refnoerr:'',
      emailerr:'',
      noofmemerr:'',
      clgnameerr:'',
      eventerr:'',
      brancherr:'',
      phone:'',
      phoneerr:''
    }
    this.changecollegename = this.changecollegename.bind(this);
    this.changenoofmem = this.changenoofmem.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.handleBranch = this.handleBranch.bind(this);
    this.saverollno = this.saverollno.bind(this);
    this.addNewrollno = this.addNewrollno.bind(this);
    this.changerefno = this.changerefno.bind(this);
    this.showgroup = this.showgroup.bind(this);
    this.showgrouprollno=this.showgrouprollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showpdfpage = this.showpdfpage.bind(this);
    this.pdfGenerate = this.pdfGenerate.bind(this);
    this.changephone = this.changephone.bind(this);
  }

  changecollegename(event) {
    this.setState({
      collegename: event.target.value
    })
  }

  changephone(event) {
    this.setState({
      phone: event.target.value
    })
  }

  handleChange(e){
    this.setState({programs:e.target.value});
  }

  handleBranch(e){
    this.setState({branch:e.target.value});
  }

  saveInput = (e) => {
    this.setState({ member: e.target.value });
  }

  addNewItem = (e) => {
    e.preventDefault()
    let { member } = this.state;
    this.state.names.push(member);
    this.setState({
      value:true
    })
  }

    
  saverollno = (e) => {
    this.setState({ rollno: e.target.value });
  }

  addNewrollno= (e) => {
    e.preventDefault()
    let { rollno } = this.state;
    this.state.rollnumbers.push(rollno);
    this.setState({
      rvalue:true
    })
   
  }

  changenoofmem(event) {
    this.setState({
     noofmembers: event.target.value
    })
  }
  changeemail(event) {
    this.setState({
      email: event.target.value
    })
  }
  changerefno(event){
    this.setState({
      refno : event.target.value
    })
  }
  showgroup(event){
    event.preventDefault()
    this.setState({
      value:false
    })
  }
  showgrouprollno(event){
    event.preventDefault()
    this.setState({
      rvalue:false
    })
  }
  validate(){
    let refnoerr='';
    let emailerr='';
    let noofmemerr='';
    let eventerr='';
    let brancherr='';
    let clgnameerr='';
    let phoneerr='';
    if(!this.state.collegename){
        clgnameerr = "College Name is Required"
    }
    const reg = /^[a-zA-z0-9+_.-]+@(g|e)mail.com$/;
    if(!this.state.email || reg.test(this.state.email) === false){
      emailerr  = "Email Field is Invalid";
    }
    if(!this.state.programs){
      eventerr = "Event is not selected"
    }
    if(!this.state.branch){
      brancherr = "Branch is not selected"
    }
    const regex = /[1-3]/
    if(!this.state.noofmembers || regex.test(this.state.noofmembers) === false){
      noofmemerr = "Members filed is Invalid"
    }
    const phoneregex = /^[0-9]{10}$/
    if(!this.state.phone || phoneregex.test(this.state.phone) === false ){
      phoneerr = "Mobile Number filed is Invalid"
    }
    const regextransaction = /^\d{7}$/
    if(!this.state.noofmembers || regextransaction.test(this.state.refno) === false){
      refnoerr = "DUI number field is Invalid"
    }
    if(clgnameerr || brancherr || eventerr || refnoerr || noofmemerr ||emailerr || phoneerr){
      this.setState({clgnameerr,brancherr,eventerr,refnoerr,noofmemerr,emailerr,phoneerr})
      return false;
    }
    return true;
  }
  onSubmit(event) {
    event.preventDefault()
    if(this.validate()){
      let x = Math.floor((Math.random() * 90000)+10000);
      const part = this.state.names.join(', ').toString()
      const rnos = this.state.rollnumbers.join(', ').toString()
      this.setState({
        participants:part,
        strollnos:rnos,
        idnumber:x,
        
      })
      this.setState({
        load:true,
        flag:true
      })
    }
    else{
      this.setState({
        load:true
      })
  }
}
  pdfGenerate =() => {
    var doc = new jsPDF('p','pt','a4');
    doc.html(document.querySelector("#receipt2"),{
      callback:function(pdf){
        var count=0
        for(var i=0;i<12;i++){
          var pageCount = doc.internal.getNumberOfPages();
          pdf.deletePage(pageCount);
          count +=1
        }
        if(count === 12){
          try {
            pdf.save('receipt.pdf')
          } catch (error) {
            alert(`${error} : Please try clicking download pdf button again`)
          }
        }
      }
      
    });
  }

  payment(event){
    event.preventDefault()
    window.open("https://www.onlinesbi.com/sbicollect");
  }
  showpdfpage = ()  => {
     
      const registered = {
        idnumber:this.state.idnumber,
        selectedevent:this.state.programs,
        collegename : this.state.collegename,
        branch:this.state.branch,
        noofmembers:this.state.noofmembers,
        names:this.state.participants,
        rollnos :this.state.strollnos,
        email : this.state.email,
        phone:this.state.phone,
        refno:this.state.refno
      }
      axios.post('/signup',registered)
      .then(
        response =>{
          this.setState({
            flag:false,
            msg:true,

          })
          console.log(response.status)
        })
        .catch(
          err => {
            alert(`${err} : Please try again`)
          }
        )
  }

   

  render() {
    return (
      <div>
    <div className='reg'>
    {!this.state.flag && !this.state.msg &&
     <form method='POST'>
        <div className='register-body'>
          <div className='register-section shadow p-3 mb-5 bg-body rounded'>
            <div className='fields'>
              <h1 className='display-1'>Register</h1>
              <hr />
              <div className='text-secondary'>*If you entered any wrong values you can refill form again</div>
              <div>
              <button type="button" class="btn btn-warning my-2 mx-2" onClick={this.payment}>Complete your Payment here!</button>
              <button type="button" class="btn btn-secondary my-1 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'white' }} rel='noreferrer noopener'>Payment procedure</a></button>
              <br />
              <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">Select Event</label>
            <select value={this.state.programs} onChange={this.handleChange}>
              {events.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className='text-danger'>{this.state.eventerr}</div>
            {this.state.programs.length !== 0 && (<h3 className='my-2'>You selected : {this.state.programs}</h3>)}
          </div>
          <div className="row mb-3">
            <div className="col-sm-10">
            <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">College Name</label>
              <input type="text" className="form-control my-2" id="inputEmail3" placeholder='College Name' onChange={this.changecollegename} value={this.state.collegename} />
            </div>
          </div>
          <div className='text-danger'>{this.state.clgnameerr}</div>
                <div>
           <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">Select Branch</label>
            <select value={this.state.branch} onChange={this.handleBranch}>
              {branches.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            {this.state.branch.length !== 0 && (<h3 className='my-2'>You selected : {this.state.branch}</h3>)}
            </div>
            <div className='text-danger'>{this.state.brancherr}</div>
          <div class="mb-3">
            <label  class="form-label my-1 text">No of Members in group</label>
            <input type="text" class="form-control my-1"  placeholder="0" onChange={this.changenoofmem} />
          </div>
          <div className='text-danger'>{this.state.noofmemerr}</div>
          <div>
          
            <label htmlFor='exampleFormControlInput1' className='form-label my-2 text'>Name</label>
            <div className='text-secondary'>Enter name and click 'Add Name' button to proceed</div>
            <input type='text'  class="form-control my-1 mx-2"  onChange={this.saveInput} placeholder='enter student name' />
            <button className='btn btn-success my-2' onClick={this.addNewItem}>Add Name</button>
            {this.state.value && <div className='mx-2 text-success'>user added successfully continue adding all the members of group</div>}
            {this.state.value && <div><button className='btn btn-info' onClick={this.showgroup}>Group info</button>
            <ol>
              {this.state.names.map((subitems, sindex) => {
                return <li key={sindex}>{subitems}</li>
              })}
            </ol>
            </div>}
          </div>
            <div>
            <label htmlFor='exampleFormControlInput1' className='form-label my-2 text'>Roll No</label>
            <div className='text-secondary'>Enter roll number and click 'Add Rll No' button to proceed</div>
            <input type='text' class="form-control my-1 mx-2" onChange={this.saverollno} placeholder='enter full roll number'/>
            <button className='btn btn-success my-2' onClick={this.addNewrollno}>Add Roll No</button>
            {this.state.rvalue && <div className='mx-2 text-success'>roll no added successfully continue adding all the roll numbers of group</div>}
            {this.state.rvalue && <div><button className='btn btn-info' onClick={this.showgrouprollno}>Roll No info</button>
            <ol>
              {this.state.rollnumbers.map((subitems, sindex) => {
                return <li key={sindex}>{subitems}</li>
              })}
            </ol>
            </div>}
            
          </div>
        
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label my-2 text">Email</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mail  of one student in group"  onChange={this.changeemail} value={this.state.email}/>
        </div>
        <div className='text-danger'>{this.state.emailerr}</div>
        <div className="row mb-3">
            <div className="col-sm-10">
            <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">Mobile Number</label>
              <input type="text" className="form-control my-2" id="inputEmail3" placeholder='Mobile number of one student in group' onChange={this.changephone} value={this.state.phone} />
            </div>
          </div>
          <div className='text-danger'>{this.state.phoneerr}</div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label my-2 text">Transaction Reference Number</label>
            <div className='refbtn'>
                        <button className='btn btn-warning' style={{ marginRight: '4%' }}>DUI</button>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter last 7 digits of DUI number" onChange={this.changerefno} />
            </div>
        </div>
        <div className='text-danger'>{this.state.refnoerr}</div>
        </div>
        <div className='registerend'>
     <input type="submit" class="btn btn-info mx-4 my-4" value="Register" onClick={this.onSubmit} />
     <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4">Back to Home</button></Link>
    </div>  
    {this.state.load && <div className='text-danger'>*Please fill all the fields</div>} 
        </div>
      </div>
      </form>}
      </div>
     {this.state.flag && <div id='receipt' className='receipt'><br/>
     <div>
      <div className="container-fluid topcontainer2">
        <div><img src={festlogo} className='festlogo' alt='festlogo' /></div>
         <div><h1 className='display-3'>VISVOTSAV2K22</h1></div>
      </div>
      <div>
        <h6 className='text-center text-muted'>( PBR VITS and VEC )</h6>
      </div>
      </div>
     <hr />
      <div className='participantdetails'>
          <table class="table">
          <tbody>
           <tr>
            <th>ID Number</th>
            <td>:</td>
            <td>{this.state.idnumber}</td>
          </tr>
          <tr>
          <th>Selected Event</th>
          <td>:</td>
          <td>{this.state.programs}</td>
          </tr>
          <tr>
          <th>College Name</th>
          <td>:</td>
          <td>{this.state.collegename}</td>
          </tr>
          <tr>
          <th>Branch</th>
          <td>:</td>
          <td>{this.state.branch}</td>
          </tr>
          <tr>
          <th>No of Members</th>
          <td>:</td>
          <td>{this.state.noofmembers}</td>
          </tr>
          <tr>
          <th>Group Members</th>
          <td>:</td>
          <td>{this.state.participants}</td>
          </tr>
          <tr>
          <th>Roll Numbers</th>
          <td>:</td>
          <td>{this.state.strollnos}</td>
          </tr>
          <tr>
          <th>Email</th>
          <td>:</td>
          <td>{this.state.email}</td>
          </tr>
          <tr>
          <th>Mobile</th>
          <td>:</td>
          <td>{this.state.phone}</td>
          </tr>
          <tr>
          <th>Transaction Reference Number</th>
          <td>:</td>
          <td>DUI{this.state.refno}</td>
          </tr>
       </tbody>
    </table>
      </div>
            </div>}
            {this.state.flag && 
            <div className='text-center'> <button className='btn btn-secondary text-center' onClick={this.showpdfpage} >Continue</button>
            <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-dark my-1 mx-2">Back to Home</button></Link>
            <div className='text-danger text-center'>* If all details are correct click on continue to download receipt</div>
            <div className='text-danger text-center'>* If any details are incorrect fill out register form again</div>
            </div>}
            {this.state.msg && <div>
              <div class="container confirmation">
              <h1 className='text-success display-2 text-center'>Registration Successful!!</h1>
              <div id='receipt2' className='receipt'><br/>
              <div>
      <div className="container-fluid topcontainer2">
        <div><img src={festlogo} className='festlogo' alt='festlogo' /></div>
         <div><h1 className='display-3'>VISVOTSAV2K22</h1></div>
      </div>
      <div>
        <h6 className='text-center text-muted'>(PBR VITS  and  VEC  )</h6>
      </div>
      </div>
                        <hr />
                      <div className='participantdetails'>
                          <table class="table">
                          <tbody>
                          <tr>
                            <th>ID Number</th>
                            <td>:</td>
                            <td>{this.state.idnumber}</td>
                          </tr>
                          <tr>
                          <th>Selected Event</th>
                          <td>:</td>
                          <td>{this.state.programs}</td>
                          </tr>
                          <tr>
                          <th>College Name</th>
                          <td>:</td>
                          <td>{this.state.collegename}</td>
                          </tr>
                          <tr>
                          <th>Branch</th>
                          <td>:</td>
                          <td>{this.state.branch}</td>
                          </tr>
                          <tr>
                          <th>No of Members</th>
                          <td>:</td>
                          <td>{this.state.noofmembers}</td>
                          </tr>
                          <tr>
                          <th>Group Members</th>
                          <td>:</td>
                          <td>{this.state.participants}</td>
                          </tr>
                          <tr>
                          <th>Roll Numbers</th>
                          <td>:</td>
                          <td>{this.state.strollnos}</td>
                          </tr>
                          <tr>
                          <th>Email</th>
                          <td>:</td>
                          <td>{this.state.email}</td>
                          </tr>
                          <tr>
                          <th>Mobile</th>
                          <td>:</td>
                          <td>{this.state.phone}</td>
                          </tr>
                          <tr>
                          <th>Transaction Reference Number</th>
                          <td>:</td>
                          <td>DUI{this.state.refno}</td>
                          </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              <div className='text-center'>
              <button className='btn btn-secondary text-center mx-2' onClick={this.pdfGenerate} >Download Receipt</button>
              <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-primary my-4">Back to Home</button></Link>
              </div>
              <div className='text-danger text-center'>* Click on 'Download Receipt' button and pdf will be automatically gets downloaded</div>
              <div className='text-danger text-center'>*Check your downloads in your device after clicking that button</div>
              <div className='text-danger text-center'>**Bring the hardcopy of downloaded pdf while coming to the event**</div>
              </div>
              </div>}
      </div>
    )
  }
}


export default Register;