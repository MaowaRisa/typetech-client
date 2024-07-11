import { Button } from "antd";

const Hero = () => {
  return (
    <div className="hero bg-violet-50">
      <div className="hero-content flex-col md:flex-row-reverse md:justify-between  app-hero">
        <div className="border-8 border-[#6d5893] rounded-2xl">
          <img
            src="../../../src/assets/images/hero.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <div className="text-5xl font-bold">
            <h1 className="mb-1">Discover the Ultimate</h1>
            <h1 style={{ color: "#2E1065" }}>Typing Experience</h1>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            Unleash Your Typing Potential with Premium Mechanical Keyboards and
            experience the Perfect Blend of Performance and Aesthetics. explore
            our best-selling or featured mechanical keyboards.
          </p>
          <Button
            className="btn-primary p-6"
            style={{
              backgroundColor: "#2E1065",
              color: "#fff",
            }}
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
