import React from "react";
import ServicesItem from "./ServicesItem";
import "./Services.css";

function Cards() {
  return (
    <div className="cards" id="services" >
      <strong>Our Services!</strong>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="Eating plan with emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products."
              label="Alimentary Plan"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/1112633/pexels-photo-1112633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="Personalized workout plans your clients will love! Access the full video library with hundreds of pre-recorded exercises for you."
              label="Workout Rutines"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ServicesItem
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              text="Medical, surgical, dental, and professional dietitian."
              label="Medical Services"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/4045549/pexels-photo-4045549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              text="A sleep therapies to prevent sleep disorders or insomnia."
              label="Sleep Therapy"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              text="Classes featured include beginner yoga classes, vinyasa yoga, hatha yoga, free meditation classes."
              label="Yoga Classes"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
          <ServicesItem
              src="https://images.pexels.com/photos/3984353/pexels-photo-3984353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="What makes us different?"
              text2="You, the client is what makes us different. Our job is to become a catalyst for your results. We are highly educated and knowledgeable, however you are the most important component in the equation."
              label="Why us?"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
