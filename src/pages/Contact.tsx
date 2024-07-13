import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "antd";

const Contact: React.FC = () => {
  const [isFormOpen, setFormOpen] = useState<boolean>(false);

  const formAnimation = useSpring({
    opacity: isFormOpen ? 1 : 0,
    maxHeight: isFormOpen ? 400 : 0,
    overflow: "hidden",
  });

  return (
    <div className="container mx-auto p-8">
      <animated.h1
        className="text-3xl font-bold mb-4 text-center"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 100 })}
      >
        Get in Touch With Us
      </animated.h1>
      <animated.p
        className="md:w-2/4 mx-auto text-justify md:text-center mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 })}
      >
        If you have any questions, concerns, or feedback, we'd love to hear from
        you! You can reach us through the following contact details or by
        filling out the contact form below:
      </animated.p>

      <animated.h2
        className="text-2xl font-semibold mb-4"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })}
      >
        Our Details
      </animated.h2>
      <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 })}
      >
        Email: sales-team@typetech.com
      </animated.p>
      <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 })}
      >
        Phone: (123) 456-7890
      </animated.p>
      <animated.p
        className="mb-6 text-gray-700"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 })}
      >
        Address: 123 Keyboard St., Typing City, TX 78901
      </animated.p>

      <animated.h2
        className="text-2xl font-semibold mt-8 mb-4"
        style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 })}
      >
        Let us know! How can we help?
      </animated.h2>
      <div className="accordion space-y-4">
        <div className="accordion-item bg-white shadow-md rounded-lg p-4">
          <button
            className="accordion-header flex justify-between items-center w-full font-semibold text-left focus:outline-none"
            onClick={() => setFormOpen(!isFormOpen)}
          >
            Fill Out the Form
            <span className="accordion-icon">{isFormOpen ? "-" : "+"}</span>
          </button>
          <animated.div className="accordion-body mt-2" style={formAnimation}>
            <form action="submit_form.php" method="post" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                ></textarea>
              </div>
              <Button className=" bg-violet-900 text-white font-semibold p-6">
                Send Message
              </Button>
            </form>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
