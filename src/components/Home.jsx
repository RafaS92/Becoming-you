import React from 'react'
import FirstSection from './FirstSection';
import Form from './Form';
import Passion from './Passion';
import Services from './Services'
import Team from './Team';
import Footer from './Footer';

function Home() {
    return (
      <div>
          <FirstSection />
          <Passion />
          <Services />
          <Team />
          <Form />
          <Footer />
      </div>
        
    )
}

export default Home
