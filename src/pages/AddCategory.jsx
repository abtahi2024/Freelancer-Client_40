import React from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../ServicesApi/auth-api-client";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCategoryAdd = async (data) => {
    try {
      const categoryRes = await authApiClient.post("/categories/", data);
      if (categoryRes.status === 201) alert("Category created successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit(handleCategoryAdd)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Category Name</label>
          <input
            {...register("name", { required: true })}
            className="input input-bordered w-full"
            placeholder="Product Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
