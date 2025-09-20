import React from "react";

const TeacherCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="min-w-[200px] mx-10 flex flex-col justify-center items-center text-center">
      <img
        className="rounded-full object-cover w-full"
        src={imageUrl}
        alt="Teacher's photo"
      />
      <h5 className="font-semibold text-lg">Cristiano Ronaldo</h5>
      <p>Leerkracht van Dadizele</p>
    </div>
  );
};

export default TeacherCard;
