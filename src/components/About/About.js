import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      
      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>Our Features</h1>
            <p>We provides tools that make it easy for you to set up and manage a Listing.</p>
            <p>You will receive administrative communications from us using the email address or other contact information you provide for your account.</p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='https://www.vision51.co.uk/wp-content/uploads/2016/02/serv-img3.jpg' alt='' />
            {/* <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button> 
            </div> */}
          </div>
        </div>
      </section>

     
    </>
  )
}

export default About;