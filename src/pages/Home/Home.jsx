import { AboutUs } from "./AboutUs/AboutUs";
import { Featured } from "./Featured/Featured";
import { Hero } from "./Hero/Hero";

export const Home = () => {
  return (
    <section className="text-black mt-3 flex flex-col">
      <Hero />
      <Featured />
      <AboutUs />
    </section>
  );
};
