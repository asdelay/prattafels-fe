import type { RootState } from "@/store/store";
import type { Lesson } from "@/types";
import { Button } from "@/ui/button";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useUpdateLessonMutation } from "@/modules/Events/eventsApi";
interface EventCardProps {
  lesson: Lesson;
}
export const EventCard: React.FC<EventCardProps> = ({ lesson }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.authSlice.user);
  const [updateLesson, { isLoading, isSuccess, error }] =
    useUpdateLessonMutation();
  const handleAttend = async () => {
    if (!user) {
      navigate("/auth/login");
      toast.error("Log in before attending events");
      return;
    }
    const updatedLesson = await updateLesson({
      id: lesson.id,
      attendeeId: user.id,
    });
    console.log(updatedLesson);
  };
  return (
    <div className="w-[250px] flex flex-col mt-4 rounded-2xl bg-[#d9d9d9] text-black">
      <img
        className="rounded-t-2xl h-[160px] object-cover object-bottom"
        src={lesson.location.imageUrl}
        alt="event image"
      />
      <div className="p-4 text-lg flex flex-col gap-2">
        <div>
          <h6 className="font-bold">{lesson.name}</h6>
          <p className="text-sm">{lesson.description}</p>
        </div>
        <div>
          <h6 className="font-bold">Location:</h6>
          <p className="text-sm">{lesson.location.address}</p>
        </div>
        <div>
          <h6 className="font-bold">Date</h6>
          <p className="text-sm">
            {new Date(lesson.startTime).toLocaleString()}
          </p>
        </div>
        <Button
          onClick={handleAttend}
          className="mt-8 self-end p-3 px-8 bg-[#adadad] rounded-3xl font-semibold border-1 border-black duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
        >
          Attend!
        </Button>
      </div>
    </div>
  );
};
