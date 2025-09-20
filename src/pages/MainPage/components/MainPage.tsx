import EventsSection from "./EventsSection";
import HomeSection from "./HomeSection";
import LocationSection from "./LocationSection";
import TeachersSection from "./TeachersSection";

export const MainPage = () => {
  return (
    <div className="font-[montserrat]">
      <HomeSection />
      <LocationSection />
      <EventsSection />
      <TeachersSection />
    </div>
  );
};
