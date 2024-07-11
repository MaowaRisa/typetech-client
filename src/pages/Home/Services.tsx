import { CarOutlined, MoneyCollectOutlined, PhoneOutlined, SettingOutlined } from "@ant-design/icons";

const Services = () => {
  return (
    <div className="grid grid-cols-4 mt-8 cursor-pointer gap-4">
      {/* Card 1 */}
      <div className="p-4 text-center border-2 border-[#cfd1d4] rounded-2xl space-y-2">
        <SettingOutlined style={{fontSize: "45px", color:"#9788b2"}}/>
        <h2 className="text-lg font-semibold">Customizable</h2>
        <p className="text-gray-400">Make your 100% Customizable Keyboards</p>
      </div>
      {/* Card 1 */}
      <div className="p-4 text-center border-2 border-[#cfd1d4] rounded-2xl space-y-2">
        <PhoneOutlined style={{fontSize: "45px", color:"#9788b2"}}/>
        <h2 className="text-lg font-semibold">24/7 Support</h2>
        <p className="text-gray-400">Make your 100% Customizable Keyboards</p>
      </div>
      {/* Card 1 */}
      <div className="p-4 text-center border-2 border-[#cfd1d4] rounded-2xl space-y-2">
        <CarOutlined style={{fontSize: "45px", color:"#9788b2"}}/>
        <h2 className="text-lg font-semibold">Free shipping</h2>
        <p className="text-gray-400">Free Shipping on Orders Over $50</p>
      </div>
      {/* Card 1 */}
      <div className="p-4 text-center border-2 border-[#cfd1d4] rounded-2xl space-y-2">
        <MoneyCollectOutlined style={{fontSize: "45px", color:"#9788b2"}}/>
        <h2 className="text-lg font-semibold">Money back</h2>
        <p className="text-gray-400">30-Day Money-Back Guarantee</p>
      </div>
    </div>
  );
};

export default Services;
