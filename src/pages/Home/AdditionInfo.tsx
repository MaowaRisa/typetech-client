import { CheckOutlined } from "@ant-design/icons";
import additional1 from '../../../src/assets/images/addition-1.jpg';
import additional2 from '../../../src/assets/images/addition2.jpg';
const AdditionInfo = () => {
  return (
    <div className="my-10 px-4 md:px-0">
      <section className="">
        <h2 className="text-center text-3xl font-semibold text-gray-900 my-4">
          Why Choose Mechanical Keyboards?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 p-2 border-2 shadow-xl border-gray-100">
            <img className="rounded-xl" src={additional1} alt="addition 1" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="">
              <h3 className="text-lg font-semibold"><CheckOutlined /> Durability</h3>
              <p className="">
                Mechanical keyboards are built to last, with high-quality
                switches rated for millions of keystrokes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold"><CheckOutlined /> Enhanced Typing Experience</h3>
              <p className="">
                Experience precise and satisfying keystrokes, reducing typing
                fatigue and increasing productivity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold"><CheckOutlined /> Customization</h3>
              <p className="">
                Personalize your keyboard with customizable keycaps, switches,
                and RGB lighting to match your style.
              </p>
            </div>
          </div>
          {/* <div className="">
            <img src="images/durability.jpg" alt="Durability" />
            
          </div>
          <div className="feature">
            <img src="images/typing-experience.jpg" alt="Typing Experience" />
            
          </div>
          <div className="feature">
            <img src="images/customization.jpg" alt="Customization" />
            
          </div> */}
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-center text-3xl font-semibold text-gray-900 my-4">
          Customized your keyboard?
        </h2>
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="md:w-1/2 p-2 border-2 shadow-xl border-gray-100">
            <img className="rounded-xl" src={additional2} alt="addition 2" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="">
              <h3 className="text-lg font-semibold"><CheckOutlined /> Durability</h3>
              <p className="">
                Mechanical keyboards are built to last, with high-quality
                switches rated for millions of keystrokes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold"><CheckOutlined /> Enhanced Typing Experience</h3>
              <p className="">
                Experience precise and satisfying keystrokes, reducing typing
                fatigue and increasing productivity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold"><CheckOutlined /> Customization</h3>
              <p className="">
                Personalize your keyboard with customizable keycaps, switches,
                and RGB lighting to match your style.
              </p>
            </div>
          </div>
          {/* <div className="">
            <img src="images/durability.jpg" alt="Durability" />
            
          </div>
          <div className="feature">
            <img src="images/typing-experience.jpg" alt="Typing Experience" />
            
          </div>
          <div className="feature">
            <img src="images/customization.jpg" alt="Customization" />
            
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AdditionInfo;
