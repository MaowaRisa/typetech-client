import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";

const FeaturedProducts = () => {
  const {data: product, isLoading} = useGetAllProductsQuery(undefined)
  if(isLoading){
    console.log('loading....')
  }
  console.log(product)
  return (
    <div className=" mt-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 ">
          TypeTech's Signature products
        </h2>
        <p className="text-gray-600 w-1/2 m-auto">
          Explore our top mechanical keyboards: customizable RGB lighting,
          premium switches, ergonomic design, and unmatched durability for the
          ultimate typing experience.
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-6 gap-4">
        {/* card 1 */}
        <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
          <figure className="">
            <img
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="mt-4 space-y-1">
            <h2 className="text-lg font-semibold">Image Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div>
              <h2 className="text-sm font-semibold">
                Brand: <span className="font-normal">ServerOX</span>
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-normal">$120.00</span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <MinusOutlined style={{ font: "bold" }} />
                  </span>
                  <input defaultValue={1} className="w-[20px] text-lg bg-violet-50 text-center"></input>
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <PlusOutlined style={{ font: "bold" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#fff",
                  color: "#111827",
                }}
              >
                View
              </Button>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
          <figure className="">
            <img
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="mt-4 space-y-1">
            <h2 className="text-lg font-semibold">Image Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div>
              <h2 className="text-sm font-semibold">
                Brand: <span className="font-normal">ServerOX</span>
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-normal">$120.00</span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <MinusOutlined style={{ font: "bold" }} />
                  </span>
                  <input defaultValue={1} className="w-[20px] text-lg bg-violet-50 text-center"></input>
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <PlusOutlined style={{ font: "bold" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#fff",
                  color: "#111827",
                }}
              >
                View
              </Button>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
          <figure className="">
            <img
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="mt-4 space-y-1">
            <h2 className="text-lg font-semibold">Image Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div>
              <h2 className="text-sm font-semibold">
                Brand: <span className="font-normal">ServerOX</span>
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-normal">$120.00</span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <MinusOutlined style={{ font: "bold" }} />
                  </span>
                  <input defaultValue={1} className="w-[20px] text-lg bg-violet-50 text-center"></input>
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <PlusOutlined style={{ font: "bold" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#fff",
                  color: "#111827",
                }}
              >
                View
              </Button>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
          <figure className="">
            <img
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="mt-4 space-y-1">
            <h2 className="text-lg font-semibold">Image Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div>
              <h2 className="text-sm font-semibold">
                Brand: <span className="font-normal">ServerOX</span>
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-normal">$120.00</span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <MinusOutlined style={{ font: "bold" }} />
                  </span>
                  <input defaultValue={1} className="w-[20px] text-lg bg-violet-50 text-center"></input>
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <PlusOutlined style={{ font: "bold" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#fff",
                  color: "#111827",
                }}
              >
                View
              </Button>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
          <figure className="">
            <img
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="mt-4 space-y-1">
            <h2 className="text-lg font-semibold">Image Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div>
              <h2 className="text-sm font-semibold">
                Brand: <span className="font-normal">ServerOX</span>
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-normal">$120.00</span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <MinusOutlined style={{ font: "bold" }} />
                  </span>
                  <input defaultValue={1} className="w-[20px] text-lg bg-violet-50 text-center"></input>
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <PlusOutlined style={{ font: "bold" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#fff",
                  color: "#111827",
                }}
              >
                View
              </Button>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
          <figure className="">
            <img
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="mt-4 space-y-1">
            <h2 className="text-lg font-semibold">Image Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div>
              <h2 className="text-sm font-semibold">
                Brand: <span className="font-normal">ServerOX</span>
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-normal">$120.00</span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <MinusOutlined style={{ font: "bold" }} />
                  </span>
                  <input defaultValue={1} className="w-[20px] text-lg bg-violet-50 text-center"></input>
                  <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                    <PlusOutlined style={{ font: "bold" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#fff",
                  color: "#111827",
                }}
              >
                View
              </Button>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
