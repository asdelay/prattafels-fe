import React from "react";
import { useGetAllLessonsQuery } from "@/modules/Events/eventsApi";
import type { Lesson } from "@/types";
import { EventCard } from "./EventCard";

export const Events = () => {
  const { data, isLoading, error } = useGetAllLessonsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching events</p>;
  console.log(data);
  return (
    <div className="flex justify-center">
      <div className="mt-4 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-center md:place-items-center">
        {data && data.length > 0 ? (
          data.map((lesson: Lesson) => (
            <EventCard key={lesson.id} lesson={lesson} />
          ))
        ) : (
          <h3>No events added yet</h3>
        )}
      </div>
    </div>
  );
};
