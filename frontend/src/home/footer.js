import React from "react";
import '../App.css';
export const Footer = () => {
    return(
        <div>
             <div class="container my-4">
        <h1 className='display-4'>Contact Us</h1>
        
      </div>
      <div style={{ width: '90%', margin: '1% auto' }}><hr /></div>
        <div className="footerbody">
                <div className="container">
                    <div className="row">
                        <div className="footersections">
                          
                            <p className="card-text text-danger display-6">Convener</p>
                            <hr />
                            <div>DR.B.Dattatreya Sarma(Principal,PBR VITS)</div>
                            <div>DR.G.Jagadeeswara Reddy(Principal,VEC)</div>
                          
                            <p className="card-text text-danger display-6">Co-ordinators</p>
                            <hr />
                            <div>DR.vv.Sunil Kumar(CSE)</div>
                            <div>MR.A.Suman Kumar Reddy(ECE)</div>
                            <div>DR.Mohammad Hayath Rajvee(ECE)</div>
                        </div>
                        <div className="footersections">
                        
                            <p className="card-text text-danger display-6">Staff Coordinators</p>
                            <hr />
                            <div>R.Ranjith kumar(ECE) -7660801249</div>
                            <div>M.Venkataratnam(ECE) -9553589953</div>
                            <div>G.Rajesh(CSE)        -7013927371</div>
                            <div>G.Thirumula(CSE)     -9948791339</div>
                            <div>NCK.Prasad(MECH)     -9490536904</div>
                            <div>S.Muniraja(EEE)      -9949403091</div>
                            <div>KV.Ashok(CIVIL)      -7981050808</div>
                        </div>
                        <div className="footersections">
                          
                            <p className="card-text text-danger display-6">Student Coordinators</p>
                            <hr />
                            <div>P.SivaKumari(ECE)     -9182627073</div>
                            <div>SK.Yaseen(CSE)        -9182342667</div>
                            <div>SK.Imran(CSE)         -7337005082</div>
                            <div>V.SainadhReddy(ECE)-6303339194</div>
                            <div>M.PavanSrinivas(MECH) -8328051981</div>
                            <div>S.Yeswanth(EEE)       -8374532598</div>
                            <div>SK.Sameer(CIVIL)      -9618147717</div>
                        </div>
                        <div className="footersections">
                           
                             <p className="card-text text-danger display-6">Address</p>
                            <hr />
                             <iframe title="myframe" width="200" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=200&amp;height=300&amp;hl=en&amp;q=pbrvisvodaya%20kavali+(visvotsav)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  
                             <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=a96ca2c8bcd31d2ad57bde9e5892a17053d946ac'></script>
                        </div>
                    </div>
                </div>
        </div>
        <div>
          <div className='querymail mx-2'>
          Lost your document! mail us with DUI number : <span className='text-danger'>visvotsavqueries@gmail.com</span>
          </div>
          <hr />
        <div className='base'>
       <div> <h1 className='card-text text-danger display-6'>Follow Us :</h1></div>
       <div>
           <a href='https://www.facebook.com/pbrvitsofficial/' className='socialmedia' target="_blank" rel='noreferrer noopener' style={{ textDecoration: 'none'}}>Facebook</a>
           </div>
           <div>
           <a href='https://www.instagram.com/p/CcW4QjbJPZC/?igshid=MDJmNzVkMjY=' className='socialmedia' target="_blank" rel='noreferrer noopener' style={{ textDecoration: 'none'}}>Instagram</a>
           </div>
        </div>
       
        <div>
                <p className="display-6 devdetails">
                Developed by © K GANESH , P AMULYA 
                </p>
            </div>
    </div>
    </div>
    )
}

export default Footer