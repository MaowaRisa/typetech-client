import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const About: React.FC = () => {
  const [isMissionOpen, setMissionOpen] = useState<boolean>(false);
  const [isValuesOpen, setValuesOpen] = useState<boolean>(false);

  const missionAnimation = useSpring({
    opacity: isMissionOpen ? 1 : 0,
    maxHeight: isMissionOpen ? 100 : 0,
    overflow: 'hidden',
  });

  const valuesAnimation = useSpring({
    opacity: isValuesOpen ? 1 : 0,
    maxHeight: isValuesOpen ? 100 : 0,
    overflow: 'hidden',
  });

  return (
    <div className="container mx-auto p-8">
      <animated.h1
        className="text-3xl text-center font-bold mb-4"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 100 })}
      >
        Let's Know About <span className='text-4xl'>Type<span className='text-violet-800'>Tech</span></span>
      </animated.h1>
      <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 })}
      >
        Welcome to Type tech, your number one source for all things mechanical keyboards. We're dedicated to providing you the best of mechanical keyboards, with a focus on dependability, customer service, and uniqueness.
      </animated.p>
      <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })}
      >
        Founded in 2024 by Maowa Risa, Type tech has come a long way from its beginnings in Sydney. When Maowa Risa first started out, their passion for "eco-friendly cleaning products" drove them to start their own business.
      </animated.p>
      <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 })}
      >
        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
      </animated.p>
      {/* <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 })}
      >
        Sincerely,
      </animated.p> */}
      {/* <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 })}
      >
        Maowa Risa
      </animated.p> */}

      <animated.h2
        className="text-2xl font-semibold mb-4"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 })}
      >
        Our Team
      </animated.h2>
      <div className="team grid grid-cols-1 md:grid-cols-2 gap-8">
        <animated.div
          className="team-member bg-white shadow-md rounded-lg p-4 transition transform hover:-translate-y-1 hover:shadow-lg"
          style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 })}
        >
          <img
            src="../../src/assets/images/image2.jpg"
            alt="Team Member 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Team Member 1</h3>
          <p className="text-gray-600">Position</p>
        </animated.div>
        <animated.div
          className="team-member bg-white shadow-md rounded-lg p-4 transition transform hover:-translate-y-1 hover:shadow-lg"
          style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900 })}
        >
          <img
            src="../../src/assets/images/image3.jpg"
            alt="Team Member 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Team Member 2</h3>
          <p className="text-gray-600">Position</p>
        </animated.div>
        {/* Add more team members as needed */}
      </div>

      <animated.h2
        className="text-2xl font-semibold mt-8 mb-4"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 })}
      >
        Learn More About Us
      </animated.h2>
      <div className="accordion space-y-4">
        <div className="accordion-item bg-white shadow-md rounded-lg p-4">
          <button
            className="accordion-header flex justify-between items-center w-full font-semibold text-left focus:outline-none"
            onClick={() => setMissionOpen(!isMissionOpen)}
          >
            Our Mission
            <span className="accordion-icon">{isMissionOpen ? '-' : '+'}</span>
          </button>
          <animated.div className="accordion-body mt-2" style={missionAnimation}>
            <p className="text-gray-600">
              Our mission is to provide the best mechanical keyboards with a focus on dependability, customer service, and uniqueness.
            </p>
          </animated.div>
        </div>
        <div className="accordion-item bg-white shadow-md rounded-lg p-4">
          <button
            className="accordion-header flex justify-between items-center w-full font-semibold text-left focus:outline-none"
            onClick={() => setValuesOpen(!isValuesOpen)}
          >
            Our Values
            <span className="accordion-icon">{isValuesOpen ? '-' : '+'}</span>
          </button>
          <animated.div className="accordion-body mt-2" style={valuesAnimation}>
            <p className="text-gray-600">
              We value quality, innovation, and exceptional customer service. Our team is committed to providing you with the best products and experience.
            </p>
          </animated.div>
        </div>
        {/* Add more accordion items as needed */}
      </div>
    </div>
  );
};

export default About;
