
export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center ">
      <div className="order-2 flex-1/3 px-5 flex flex-col items-start gap-5">
        <h1 className="font-bold text-4xl break-words w-[400px]">
          Everything is better with Alyona's Food
        </h1>
        <p className="w-[400px] font-medium text-gray-600">
          Alyona's food is the missing piece that makes every day complete, a
          simple yet delicious joy in life
        </p>
        <button className=" bg-amber-700 px-10 py-3 rounded text-white hover:bg-amber-600 transition-all">
          Learn More
        </button>
      </div>
      <img
        className="md:order-2 flex-2/3"
        src="https://imgs.search.brave.com/7PntywszD6DpREfFDQKS9JjEybJfrax160db_THiouI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/My9Gb29kLUZyZWUt/RG93bmxvYWQtUE5H/LnBuZw"
        alt="food image"
        width={700}
        height={700}
      />
    </section>
  );
}
