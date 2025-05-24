import { ToastContainer, toast } from "react-toastify";

export const Checkout = () => {
  const checkoutList = JSON.parse(localStorage.getItem("checkoutList"));

  const handleCheckout = () => {
    toast("Your order has been placed");
    localStorage.removeItem("cartItems");
  };
  const totalPrice = checkoutList?.reduce(
    (acc, curr) => (acc += curr?.price),
    0
  );
  console.log(checkoutList);
  return (
    <section className="mt-10">
      <h1 className="font-semibold text-4xl text-center text-black">
        <span className="text-amber-600">Checkout</span> List
      </h1>
      <section className=" p-10 flex items-center flex-wrap gap-5">
        {checkoutList?.length &&
          checkoutList?.map((val, i) => (
            <div
              key={i}
              className="border my-2 w-[300px] border-solid border-gray-300 flex justify-between items-center gap-5 p-3"
            >
              <div className="flex items-center gap-5">
                <img
                  className="w-20 h-20"
                  src={val?.strMealThumb}
                  alt="Food item"
                  width={100}
                  height={100}
                />
                <div className="text-black py-5 text-2xl flex flex-col gap-3">
                  <p>{val?.strMeal}</p>
                  <p>₹ {val?.price}</p>
                </div>
              </div>
              <div onClick={() => handleDelete(item?.idMeal)}>
                <img
                  src="https://imgs.search.brave.com/kLKyqyvtp2la9WFM2kdQPLnM6OorY6Lc211fAArcm3I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20va2ZiVWhm/ZmI3NWhMdURMQzVS/S2NVR1g0a2J2clY2/OERTNnlnMWtoQnpC/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV010TURB/dWFXTnZibVIxL1ky/c3VZMjl0TDJGemMy/VjAvY3k0d01DOWta/V3hsZEdVdC9hV052/YmkweU16TjRNalUy/L0xXWnZOR1l5WTNW/NkxuQnUvWnc"
                  alt="delete icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        {!checkoutList?.length && (
          <p className="text-black text-2xl font-medium text-center py-14 w-full">
            No Data Available !
          </p>
        )}
      </section>
      {totalPrice && (
        <p className="text-black text-xl font-medium p-10">₹ {totalPrice}</p>
      )}

      {checkoutList?.length && (
        <section className=" p-10">
          <button
            onClick={handleCheckout}
            className="bg-amber-700 hover:bg-amber-600 transition-all px-2 py-1 rounded"
          >
            Order
          </button>
        </section>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};
