import React from "react";
import defaultImage from "../../assets/images/images.png";
import { Link } from "react-router";
const ServicesProductItem = ({ servic }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm w-[440px] transition duration-300 ease-in-out hover:scale-110">
      <figure className="px-10 pt-10">
        <img
          src={servic.images.length > 0 ? servic.images[0].image : defaultImage}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{servic.category.name}</h2>
        <p>{servic.description}</p>
        <h2 className="font-bold text-xl text-sky-500">
          Price: ${servic.price}
        </h2>
        <div className="card-actions justify-end">
          <Link to={`/shopservice/${servic.id}`}>
            <button className="btn btn-neutral">Bye Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesProductItem;
