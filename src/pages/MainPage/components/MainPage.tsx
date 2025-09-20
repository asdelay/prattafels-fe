import EventsSection from "./EventsSection";
import HomeSection from "./HomeSection";
import LocationSection from "./LocationSection";

export const MainPage = () => {
  return (
    <div className="font-[montserrat]">
      <HomeSection />
      <LocationSection />
      <EventsSection />
    </div>
  );
};
