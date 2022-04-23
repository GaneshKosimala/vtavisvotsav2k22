import React from 'react'
import pdf from '../pdfs/rulesforfest.pdf';
import brochure from '../pdfs/brochure.pdf';
import presentation from "../images/presentation.png";
import projectexpo from "../images/projectexpo.jpg";
import quiz from "../images/quiz.jpg";
import circuitrix from "../images/circuitrix-2.jpg";
import coding from "../images/debug.jpg";
import poster from '../images/poster.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

function Events  ()  {
  return (
    <div>
        <div class="container">
        <h1>Events we Organize</h1>
        <div style={{ width: '100%', margin: '1% auto' }}><hr /></div>
      </div>
      <div style={{ width: '90%', margin: '1% auto' }}><hr /></div>
      <div className='depts'>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={coding} className="card-img-top" alt="coding" />
          <div className="card-body">
            <h5 className="card-title">Coding</h5>
            <p className="card-text">In coding you have to solve a logical question by your logical and intellectual skills.You can discuss with your group and crack the solution</p>
            <div className='eventbtns'>
              <button type="button" class="btn btn-warning my-4 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Rules</a></button>
              <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
            </div>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={projectexpo} className="card-img-top" alt="project expo" />
          <div className="card-body">
            <h5 className="card-title">Project Expo</h5>
            <p className="card-text">
              Project Expo is a technical event in which the participants should submit their project ideas and prepare their project at home and they must bring the project to demonstrate at the event.
            </p>
            <div className='eventbtns'>
            <button type="button" class="btn btn-warning my-4 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Rules</a></button>
              <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
            </div>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={quiz} className="card-img-top" alt="quiz" />
          <div className="card-body">
            <h5 className="card-title">Technical Quiz</h5>
            <p className="card-text">Battle of Brains is a Technical Quiz game of questions and answers on all topics of TECHNICAL knowledge that is played by technical students.</p>
            <div className='eventbtns'>
            <button type="button" class="btn btn-warning my-4 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Rules</a></button>
              <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
            </div>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={circuitrix} className="card-img-top" alt="circuitrix" />
          <div className="card-body">
            <h5 className="card-title">Circuitrix</h5>
            <p className="card-text">Circuitrix is all about circuits and electronics. It is a platform for all electronics enthusiasts to exhibit their skill against the best in the specialization. Circuitrix is an event which will test a participant's knowledge on the basics of electronics and build a base in this field.</p>
            <div className='eventbtns'>
            <button type="button" class="btn btn-warning my-4 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Rules</a></button>
              <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
            </div>
        </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={presentation} className="card-img-top" alt="paper presentation" />
          <div className="card-body">
            <h5 className="card-title">Paper Presentation</h5>
            <p className="card-text">Paper presentation is an  competition where each participant is required to make a paper about a given topic or area, and then present it in front of the juries.</p>
            <div className='eventbtns'>
            <button type="button" class="btn btn-warning my-4 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Rules</a></button>
              <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
            </div>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={poster} className="card-img-top" alt="poster presentation" />
          <div className="card-body">
            <h5 className="card-title">Poster Presentation</h5>
            <p className="card-text">A poster presentation is a way to communicate your research or your understanding of a topic in a concise and visually engaging format.
            </p>
            <div className='eventbtns'>
            <button type="button" class="btn btn-warning my-4 mx-2"><a href={pdf} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Rules</a></button>
              <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container eventrules'>
        <div className='moneyrules'>
          <h5 className='text-primary'>Coding</h5>
          <div className='text-dark'>200/- per team</div>
          <div className='text-dark'>Team can have 2 members</div>
        </div>
        <div className='moneyrules'>
          <h5 className='text-primary'>Paper Presentation</h5>
          <div className='text-dark'>300/- per team</div>
          <div className='text-dark'>Team can have 2 members</div>
        </div>
        <div className='moneyrules'>
          <h5 className='text-primary'>Poster Presentation</h5>
          <div className='text-dark'>300/- per team</div>
          <div className='text-dark'>Team can have 2 members</div>
        </div>
        <div className='moneyrules'>
          <h5 className='text-primary'>Project Expo</h5>
          <div className='text-dark'>400/- per team</div>
          <div className='text-dark'>Team can have 3 members</div>
        </div>
        <div className='moneyrules'>
          <h5 className='text-primary'>Technical Quiz</h5>
          <div className='text-dark'>300/- per team</div>
          <div className='text-dark'>Team can have 3 members</div>
        </div>
        <div className='moneyrules'>
          <h5 className='text-primary'>Circuitrix</h5>
          <div className='text-dark'>100/- per person</div>
        </div>
      </div>
      <div className='brochure text-center'><button type="button" class="btn btn-warning my-4 mx-2"><a href={brochure} target = "_blank" style={{ textDecoration: 'none',color:'black' }} rel='noreferrer noopener'>Wanna see Brochure!</a></button></div>
    </div>
    
  )
}

export default Events;