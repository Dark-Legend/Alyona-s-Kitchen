import { Link } from "react-router-dom";

export const Cart = () => {
  const foodItems = JSON.parse(localStorage.getItem("cartItems"));

  const handleDelete = (id) => {
    const filteredData = foodItems?.filter((val) => val?.idMeal !== id);

    localStorage.clear("cart[Items");
    localStorage.setItem("cartItems", JSON.stringify(filteredData));
    window.location.reload();
  };

  const handleCheckout = () => {
    const checkoutList = localStorage.getItem("cartItems");
    if (checkoutList) {
      const parsedList = JSON.parse(checkoutList);
      const filteredFood = parsedList?.map((val) => val?.idMeal);
      const uniqueData = foodItems?.filter(
        (val) => !filteredFood?.includes(val?.idMeal)
      );
      localStorage.setItem(
        "checkoutList",
        JSON.stringify([...parsedList, ...uniqueData])
      );
    } else {
      localStorage.setItem("checkoutList", JSON.stringify([foodItems]));
    }
    localStorage.removeItem("cartItems");
  };
  return (
    <>
      <section className="p-10 flex items-center gap-5 flex-wrap">
        {foodItems?.map((item, i) => (
          <div
            key={i}
            className="border my-2 w-[300px] border-solid border-gray-300 flex justify-between items-center gap-5 p-3"
          >
            <div className="flex items-center gap-5">
              <img
                className="w-20 h-20"
                src={item?.strMealThumb}
                alt="foodImage"
                width={100}
                height={100}
              />
              <div className="text-black py-5 text-2xl flex flex-col gap-3">
                <p>{item?.strMeal}</p>
                <p>₹ {item?.price}</p>
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
      </section>
      {foodItems?.length && (
        <section className="p-10">
          <Link onClick={handleCheckout} to="/checkout">
            <button className="bg-amber-700 hover:bg-amber-600 transition-all px-2 py-1 rounded">
              Checkout
            </button>
          </Link>
        </section>
      )}
    </>
  );
};
