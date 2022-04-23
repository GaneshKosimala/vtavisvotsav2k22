import React from 'react'
import '../App.css';
import horsetail from '../images/horsetail.jpg';
import touch from '../images/touch.jpeg';
import juice from "../images/juice.jpg";
import pyramid from "../images/pyramid.jpeg";
import balloon from "../images/balloon.jpg";
import buffeet from "../images/buffeet.jpg";
import pedicure from "../images/pedicure.jpg";
import crafts from "../images/crafts.jpg";
import ringtoss from "../images/ringtoss.jpg";
import rose from "../images/rose.jpg";
import gallery from "../images/gallery.jpg";
import mehandi from "../images/mehandi.jpg";
import arrow  from "../images/arrow.jpg";
import icecream  from "../images/icecream.jpg";
import panipuri  from "../images/panipuri.jpg";
import corn from "../images/popcorn.jpg";
import pizza from "../images/pizza.jpg";
import updown from '../images/7updown.jpeg';
import housy from '../images/housy.jpg';
import { Link } from 'react-router-dom';

function Stalls (){
  return (
    <div>
        <div class="container">
        <h1>Stalls</h1>
        <div style={{ width: '100%', margin: '1% auto' }}><hr /></div>
      </div>
                  <div className='depts'>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={rose} className="card-img-top" alt="rose stall" />
          <div className="card-body">
            <h5 className="card-title">Rose Stall</h5>
            <p className="card-text">
              Here we can have a variety of flowers and students can buy their desired ones.rose is a flower, often with a pleasant smell, which grows on a bush with stems that have sharp points called thorns on them. She bent to pick a red rose.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={panipuri} className="card-img-top" alt="chat stall" />
          <div className="card-body">
            <h5 className="card-title">Chat Bandar</h5>
            <p className="card-text">
            The original chat is a mixture of potato pieces, crisp fried bread dahi vada or dahi bhalla, gram or chickpeas and tangy-salty spices, with sour Indian chili and saunth (dried ginger and tamarind sauce), fresh green coriander leaves.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={juice} className="card-img-top" alt="juice stall" />
          <div className="card-body">
            <h5 className="card-title">Juice and Fruit Stall</h5>
            <p className="card-text">
            Juices are the perfect drink to kick start the day. It doesn't get any healthier than to start a day with freshly squeezed juice out of pulpy fruits. Juices are always refreshing, and people love them through different weathers.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={crafts} className="card-img-top" alt="crafts stall" />
          <div className="card-body">
            <h5 className="card-title">Crafts</h5>
            <p className="card-text">
            Most arts and crafts activities consist of moving fingers and hands, they help in developing fine motor skills. Simple actions like holding a paintbrush and coloring with pencils help strengthen muscles and improve their control.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={pedicure} className="card-img-top" alt="pedicure stall" />
          <div className="card-body">
            <h5 className="card-title">Pedicure</h5>
            <p className="card-text">
            A pedicure is a cosmetic treatment of the feet and toenails, analogous to a manicure. Pedicures include care not only for the toenails; dead skin cells are rubbed off the bottom of the feet using a rough stone. Skin care is often provided up to the knee, including granular exfoliation, moisturizing, and massage.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={ringtoss} className="card-img-top" alt="ring toss stall" />
          <div className="card-body">
            <h5 className="card-title">Ring Toss</h5>
            <p className="card-text">
            Ring toss is a game where rings are tossed around a peg. It is common at carnivals.A variant, sometimes referred to as "ring-a-bottle", replaces pegs with bottles, where the thrower may keep the bottle (and its contents) if successful.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={balloon} className="card-img-top" alt="balloon stall" />
          <div className="card-body">
            <h5 className="card-title">Balloon games</h5>
            <p className="card-text">
            Balloons are fun to each and every ages.In this stall you can take a chance to make the balloons blow off! By adding in a few easy rules it will be a very good and fun game. 
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={buffeet} className="card-img-top" alt="food stall" />
          <div className="card-body">
            <h5 className="card-title">Food Stall</h5>
            <p className="card-text">
            food stalls will be most beneficial for you as almost every person buys some food in fests or events perticularly and yes, watter bottles are the best.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={gallery} className="card-img-top" alt="gallery stall" />
          <div className="card-body">
            <h5 className="card-title">Photo frame and Gallery stall</h5>
            <p className="card-text">
              Here you can get a beautiful chance of making your moments into memories.Photo frames are a great way to showcase photos that are special to you. Be it birthdays, wedding pics, or trip memories, displaying moments that are special ...
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={mehandi} className="card-img-top" alt="mehandi stall" />
          <div className="card-body">
            <h5 className="card-title">Tatoo and Mehandi stall</h5>
            <p className="card-text">
            Mehendi is a form of body art and temporary skin decoration from the Indian subcontinent usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={arrow} className="card-img-top" alt="arrow stall" />
          <div className="card-body">
            <h5 className="card-title">Arrowing the target</h5>
            <p className="card-text">
            This stall invovles the shooting of the things and it will defenitely be a very good fun event for all kinds of ages.
            archery, sport involving shooting arrows with a bow, either at an inanimate target.You can show up your shooting skills over here!
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={pizza} className="card-img-top" alt="pizza stall" />
          <div className="card-body">
            <h5 className="card-title">Lassi,Cool drinks,Pizza Stall</h5>
            <p className="card-text">
            pizza is unique and tastes great. High-quality, fresh ingredients are important for flavor, and you can also experiment with various toppings to design innovative pizzas.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={corn} className="card-img-top" alt="popcorn stall" />
          <div className="card-body">
            <h5 className="card-title">Popcorn Stall</h5>
            <p className="card-text">
            You can have a quite good taste of popcorn over here.
            Popcorn is a whole grain food that is high in important nutrients. This includes vitamins, minerals and very high amounts of fiber.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={pyramid} className="card-img-top" alt="pyramid stall" />
          <div className="card-body">
            <h5 className="card-title">Throwing a ball on pyramid of glass</h5>
            <p className="card-text">
            First of all Pyramid is an interesting game. Where the objective is to remove all the glass from the pyramid the foundation. Pyramid game made a different thing. As like (glass, card Pepsi bottle and dabba ).
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={housy} className="card-img-top" alt="housy stall" />
          <div className="card-body">
            <h5 className="card-title">Housy</h5>
            <p className="card-text">
            Players buy ticket books to play at the start of each session. A Housie Caller selects numbers at random which are then announced to the players. Each player marks off the numbers on their ticket as they are called. A player wins if they can mark off all the numbers on their ticket first.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={updown} className="card-img-top" alt="7up and down stall" />
          <div className="card-body">
            <h5 className="card-title">7Up and Down</h5>
            <p className="card-text">
            Seven Up Seven Down is a simple dice game, two 6 sided dice are rolled and the results are totalled up. You can bet on the total being over 7, under 7 or exactly seven.
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={touch} className="card-img-top" alt="touch me not stall" />
          <div className="card-body">
            <h5 className="card-title">Touch Me Not</h5>
            <p className="card-text">
            The game is made up of a thin copper wire with a bulb holder attached to it that can be used as a touch-me-not game
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={icecream} className="card-img-top" alt="icecram stall" />
          <div className="card-body">
            <h5 className="card-title">Smoke Icecream</h5>
            <p className="card-text">
            Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>
        <div className="card branches" style={{ width: '21rem' }}>
          <img src={horsetail} className="card-img-top" alt="horse tail stall" />
          <div className="card-body">
            <h5 className="card-title">Horse Tail</h5>
            <p className="card-text">
              This is a fun game for students.You can have a good fun over here
            </p>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4 mx-2">Join Now!</button></Link>
          </div>
        </div>

        </div>

    </div>
  )
}

export default Stalls;