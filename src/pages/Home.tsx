import React from 'react'
import Content from '../components/Content';
import Hero from '../components/Hero';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero/>
      <Content/>      
      <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      <div id="preloader">
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Home;