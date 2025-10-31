import React from "react";

const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="">First Name</label>
        <input
          type="text"
          className="input input-bordred bg-base-200 w-full"
          disabled={!isEditing}
          {...register("first_name", { require: "First name is required" })}
        />
        {errors.first_name && (
          <p className="text-rose-500">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="">Last Name</label>
        <input
          type="text"
          className="input input-bordred bg-base-200 w-full"
          disabled={!isEditing}
          {...register("last_name", { require: "First name is required" })}
        />
        {errors.first_name && (
          <p className="text-rose-500">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="">Email Address</label>
        <input
          type="email"
          className="input input-bordred bg-base-200 w-full"
          disabled
          {...register("email")}
        />
      </div>

      <div className="form-control">
        <label className="">Address</label>
        <input
          type="text"
          className="input input-bordred bg-base-200 w-full"
          disabled={!isEditing}
          {...register("address")}
        />
      </div>
      {/* Role */}
      <div className="form-control">
        <label className="">Role</label>
        <select
          {...register("role")}
          disabled={!isEditing}
          className="select select-bordered bg-base-200 w-full"
        >
          <option value="">Select Role</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        {errors.role && <p className="text-rose-500">{errors.role.message}</p>}
      </div>

      <div className="form-control">
        <label className="">Phone Number</label>
        <input
          type="text"
          className="input input-bordred bg-base-200 w-full"
          disabled={!isEditing}
          {...register("phone_number")}
        />
      </div>

      <div className="form-control space-x-1">
        <label className="">Bio:</label>
        <textarea
          className="input input-bordred bg-base-200 w-80"
          disabled={!isEditing}
          {...register("bio")}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileForm;
