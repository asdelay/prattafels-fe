import Gementehuis2 from "@/assets/gementehuis_dadizele2.jpg";
import MoorsledeBibliotheek from "@/assets/bibliotheek_moorslede.jpg";
import LocationCard from "./LocationCard";
const LocationSection = () => {
  return (
    <section className="flex flex-col justify-center">
      <h3 className="font-bold text-4xl text-center">
        Wherever you are, there’s a Praattafel waiting.
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row my-8 gap-8">
        <LocationCard imageSrc={Gementehuis2} />
        <LocationCard imageSrc={MoorsledeBibliotheek} />
      </div>
    </section>
  );
};

export default LocationSection;
