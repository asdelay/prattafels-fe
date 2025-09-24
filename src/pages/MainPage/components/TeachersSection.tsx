import React from "react";
import CriRo from "@/assets/cristiano_ronaldo.jpeg";
import TeacherCard from "./TeacherCard";

const TeachersSection = () => {
  return (
    <section className="flex flex-col justify-center gap-4">
      <h3 className="font-bold text-4xl text-center my-12">
        Guided by friedly facilitators
      </h3>
      <div className="flex flex-nowrap overflow-x-scroll  py-4">
        <TeacherCard imageUrl={CriRo} />
        <TeacherCard imageUrl={CriRo} />
        <TeacherCard imageUrl={CriRo} />
      </div>
    </section>
  );
};

export default TeachersSection;
