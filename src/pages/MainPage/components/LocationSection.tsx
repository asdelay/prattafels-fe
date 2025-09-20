import Gementehuis2 from "@/assets/gementehuis_dadizele2.jpg";
import MoorsledeBibliotheek from "@/assets/bibliotheek_moorslede.jpg";
import LocationCard from "./LocationCard";
const LocationSection = () => {
  return (
    <section className="flex flex-col justify-center">
      <h3 className="font-bold text-4xl text-center">
        Wherever you are, there’s a Prattafel waiting.
      </h3>
      <LocationCard imageSrc={Gementehuis2} />
      <LocationCard imageSrc={MoorsledeBibliotheek} />
    </section>
  );
};

export default LocationSection;
