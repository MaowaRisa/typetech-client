import { StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Reviews = () => {
  return (
    <div>
      <div className="mb-14 text-center">
        <h2 className="text-center text-3xl font-semibold text-gray-900 my-2">
          Latest Reviews form our Customers
        </h2>
        <p className="text-gray-600 w-1/2 m-auto text-center">
          Discover top mechanical keyboard brands we proudly offer.Innovation
          meets performance and style.
        </p>
        <div className="text-center mt-4">
          <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
          <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
          <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
          <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
          <StarOutlined style={{ color: "gray", fontSize: "24px" }} />
        
        </div>
        <Button
          className="btn-primary p-6 mt-2"
          style={{
            backgroundColor: "#2E1065",
            color: "#fff",
          }}
        >
          Review us
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 lg:grid-cols-3 ">
        {/* review 1 */}
        <div className="border-2 border-gray-200 text-center rounded-lg p-4">
          <div className="text-center p-4">
            <span className="bg-gray-200 p-2 text-violet-800 font-semibold">
              MM
            </span>
          </div>
          <h2>First name</h2>
          <p className="text-gray-400">1 month ago</p>
          <div className="text-center mt-4">
            <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
            <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
            <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
            <StarOutlined style={{ color: "gold", fontSize: "24px" }} />
            <StarOutlined style={{ color: "gray", fontSize: "24px" }} />
            
          </div>
          <p className="text-gray-600 px-4">
            Absolutely thrilled with my new mechanical keyboard from Keychron!
            The build quality is superb, and the customizable RGB lighting adds
            a stunning touch. Typing feels incredibly smooth and responsive.
            Highly recommend!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
