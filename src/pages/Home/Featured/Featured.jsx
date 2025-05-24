import { Link } from "react-router-dom";
import { mockData } from "../../../mockData";
import { addFoodToCart } from "../../../utils";

export const Featured = ({
  className,
  count = 7,
  showTitle = true,
  data = [],
}) => {
  const mock = data?.length ? data : mockData;

  return (
    <section className="mt-10">
      {showTitle && (
        <h1 className="font-semibold text-3xl text-center">
          Checkout <span className="text-amber-600">Out</span> Featured
        </h1>
      )}

      <div
        className={`${className} flex  justify-center items-center flex-wrap gap-10 my-10`}
      >
        {mock?.slice(0, count)?.map((item, i) => {
          const price = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
          return (
            <div className="bg-gray-300 p-6 flex flex-col items-center gap-3">
              <Link key={i} to={`/food/${item?.idMeal}`}>
                <img
                  src={item?.strMealThumb}
                  alt="meal image"
                  width={130}
                  height={130}
                />
              </Link>
              <p className="font-semibold text-lg">{item?.strMeal}</p>
              <div className="flex flex-col gap-3 items-center">
                <Link to="/cart">
                  <button
                    onClick={() => addFoodToCart({ ...item, price })}
                    className="bg-amber-600 text-white px-2 p-1 rounded"
                  >
                    Add to Cart
                  </button>
                </Link>
                <p>&#8377; {price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
