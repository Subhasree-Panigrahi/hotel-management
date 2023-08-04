import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h1>About Us</h1>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>We aim to have you make the right decision for your next hotel booking by listing the most relevant information on our website. We compare prices from leading travel brands in a fast, simple and easy to use interface. In addition, our travel guides review the best hotels available in leading cities such as London, Paris, New York and many more.</p>
          <p>If you are searching for a cheap beach resort or a deluxe five star hotel - our site is a guide to the best places to stay. We list over a million properties around the world to help you find the best accommodation options today.

</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        
        <div className='row image'>
          <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-760x400.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mission">
      <h1>Our Mission</h1>
        <div className="mission-d">
        <p>Our mission is to create a world where you can belong anywhere. From cabins to castles to cooking classes, browse through millions of Listings to find the ones that fit the way you like to travel. Learn more about a Listing by reviewing the description and photos, the Host profile, and past Guest reviews. If you have questions, just message the Host.</p>
        <p>We aim to provide you with the best hotels and resorts around the world at the best available price. Our hotel information includes ratings, reviews, filters and other features to help you make the right selection.</p>
        </div>
      </div>
    </>
  )
}

export default AboutCard