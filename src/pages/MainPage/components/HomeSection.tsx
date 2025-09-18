import MensenImage from "@/assets/mensen.svg";
const HomeSection = () => {
  return (
    <section>
      <div>
        <h1 className="text-[48px] text-center tracking-widest">PRATTAFELS</h1>
      </div>

      <div className="mt-16 relative min-h-[200px]">
        <div className="absolute top-2 left-0 p-6 border-1 rounded-xl">
          <p>
            WHERE WORDS <br /> MEET PEOPLE
          </p>
        </div>
        <div className="absolute top-20 right-0 text-right p-6 border-1 rounded-xl">
          <p>
            {" "}
            AND PEOPLE <br /> MEET DUTCH
          </p>
        </div>
      </div>

      <div className="flex justify-center align-center">
        <img className="size-[250px]" src={MensenImage} alt="mensen image" />
      </div>

      <h3 className="font-semibold text-[20px] uppercase my-24">
        a real opportunity <br /> to practice dutch with natives <br /> for free
      </h3>
    </section>
  );
};

export default HomeSection;
