import { Button } from "@/ui/button";

const EventCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="min-w-[300px] flex flex-col mx-10 mt-4 rounded-2xl bg-[#d9d9d9] text-black">
      <img
        className="rounded-t-2xl h-[160px] object-cover object-bottom"
        src={imageUrl}
        alt="event image"
      />
      <div className="p-4 text-lg flex flex-col">
        <div>
          <h6 className="font-bold">Location:</h6>
          <p>Dadizele, Ledegemstraat X, 8890</p>
        </div>
        <div>
          <h6 className="font-bold">Date</h6>
          <p>Mon Sep 15 19:00</p>
        </div>
        <Button className="mt-12 self-end p-3 px-8 bg-[#adadad] rounded-3xl font-semibold border-1 border-black duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
          Attend!
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
