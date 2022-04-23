import React from 'react'
import  Header  from './header'
import Footer from './footer'
import Branches from './branches';
import Events from './events';
import Stalls from './stalls';

export const Home = () => {
  return (
    <div>
        <Header />
        <Branches />
        <Events />
        <Stalls />
        <Footer />
    </div>
  )
}

export default Home