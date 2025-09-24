import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="relative z-20 rounded-t-2xl bg-[rgb(217,217,217)] mt-20 px-4 py-8 text-black uppercase font-[montserrat]">
      <h3 className="font-semibold text-4xl">
        Prattafels © {new Date().getFullYear()}
      </h3>
      <h5 className="font-semibold text-2xl mt-4">
        your place to learn, practice, and grow in dutch
      </h5>
      <div className="font-semibold text-xl mt-4">
        <h6>Contact Us:</h6>
        <a href="mailto:prattafels@gmail.com">prattafels@gmail.com</a>
      </div>

      <div className="text-xl mt-4 flex flex-col">
        <Link to="/account" className="duration-150 hover:font-bold">
          My account
        </Link>

        <Link to="/events" className="duration-150 hover:font-bold">
          Upcoming events
        </Link>
        <Link to="/locations" className="duration-150 hover:font-bold">
          our locations
        </Link>
        <Link to="/become-teacher" className="duration-150 hover:font-bold">
          Become a teacher
        </Link>
      </div>
    </section>
  );
};

export default Footer;
