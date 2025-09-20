import { Link } from "react-router";
import Gementehuis2 from "@/assets/gementehuis_dadizele2.jpg";
import EventCard from "./EventCard";

const EventsSection = () => {
  return (
    <section className="flex flex-col justify-center gap-4">
      <h3 className="font-bold text-4xl text-center my-8">
        Plan your next converation with us
      </h3>
      <div className="my-4">
        <h4 className="uppercase font-semibold text-xl">Upcoming events:</h4>
        <h5 className="uppercase font-semibold text-[16px] underline">
          <Link to="/events">Browse all</Link>
        </h5>
      </div>

      <div className="flex flex-nowrap overflow-scroll">
        <EventCard imageUrl={Gementehuis2} />
        <EventCard imageUrl={Gementehuis2} />
        <EventCard imageUrl={Gementehuis2} />
      </div>
    </section>
  );
};

export default EventsSection;
