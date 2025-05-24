import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { addFoodToCart } from "../../utils";

export const Food = () => {
  const [foodItem, setFoodItem] = useState({});
  const { id } = useParams();

  const fetchFoodItem = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const result = await response?.json();

    setFoodItem(result?.meals?.[0]);
  };

  function getIngredientsWithMeasures(recipe) {
    const ingredients = [];

    Object.keys(recipe).forEach((key) => {
      if (
        key.startsWith("strIngredient") &&
        recipe[key] &&
        recipe[key].trim()
      ) {
        const index = key.match(/\d+/)[0];
        const measureKey = `strMeasure${index}`;
        const measure = recipe[measureKey] ? recipe[measureKey].trim() : "";
        const ingredient = recipe[key].trim();
        ingredients.push(`${measure} ${ingredient}`.trim());
      }
    });

    return ingredients;
  }

  const ingredients = getIngredientsWithMeasures(foodItem);
  const price = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  const videoId = useMemo(() => {
    if (!foodItem?.strYoutube) return "";
    try {
      const urlObj = new URL(foodItem.strYoutube);
      return urlObj.searchParams.get("v");
    } catch (error) {
      console.error("Invalid YouTube URL:", foodItem.strYoutube);
      return "";
    }
  }, [foodItem]);

  useEffect(() => {
    if (id?.length) {
      fetchFoodItem();
    }
  }, [id]);
  console.log(foodItem);
  return (
    <section className="flex flex-col items-center py-4 px-3">
      <img
        src={foodItem?.strMealThumb}
        alt="food item image"
        width={1000}
        height={900}
      />
      <section className="mt-5 w-3/4 flex justify-between items-center flex-wrap gap-3">
        <p className="text-2xl text-black">
          {" "}
          Meal Name:{" "}
          <span className="font-semibold bg-amber-600 text-white px-2 py-1.5 rounded-2xl">
            {foodItem?.strMeal}
          </span>
        </p>
        <p className="text-2xl text-black">
          Category:{" "}
          <span className="font-semibold bg-amber-600 text-white px-2 py-1.5 rounded-2xl">
            {foodItem?.strCategory}
          </span>
        </p>
        <p className="text-2xl text-black">
          Area:{" "}
          <span className="font-semibold bg-amber-600 text-white px-2 py-1.5 rounded-2xl">
            {foodItem?.strArea}
          </span>
        </p>
      </section>
      <section>
        <h1 className="text-4xl font-semibold text-black mt-14">
          <span className="text-amber-600">Recipe</span> Video
        </h1>
        <iframe
          className="mt-14"
          src={videoId ? `https://www.youtube.com/embed/${videoId}` : ""}
          width={1000}
          height={500}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section className="flex flex-col text-black mt-14">
        <h1 className="text-4xl text-center">
          Cooking<span className="text-amber-600"> Instruction</span>
        </h1>
        <section className="h-96 overflow-auto py-5 mt-5">
          {foodItem?.strInstructions?.split(". ").map((step, index) => (
            <li key={index} className="mb-2 text-lg text-gray-800">
              {step.trim()}
              {step.endsWith(".") ? "" : "."}
            </li>
          ))}
        </section>
      </section>
      <section className="flex flex-col text-black mt-14 w-4/5">
        <h1 className="text-4xl text-center">
          Cooking <span className="text-amber-600">Ingredients</span> &{" "}
          <span className="text-amber-600">Measurements</span>
        </h1>
        <section className="w-full h-96 overflow-auto py-5">
          {ingredients?.map((val, i) => (
            <li key={i} className="mb-2 text-lg text-gray-800">
              {val}
            </li>
          ))}
        </section>
      </section>
      <section className="flex flex-col text-black mt-14 w-4/5">
        <p>Tags</p>
        <div className="flex items-center gap-2 mt-3">
          {foodItem?.strTags?.split(",")?.map((val, i) => (
            <div key={i} className="bg-amber-600 text-white px-2 py-1 rounded">
              {val}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-start gap-5">
        <h1 className="text-black text-3xl">
          Pricing <span className="text-amber-600 font-medium">₹{price}</span>
        </h1>
        <Link to="/cart">
          <button
            onClick={() => addFoodToCart({ ...foodItem, price })}
            className="bg-amber-600 w-52 hover:bg-amber-500 px-5 py-2 rounded text-white"
          >
            Add to Cart
          </button>
        </Link>
      </section>
    </section>
  );
};
