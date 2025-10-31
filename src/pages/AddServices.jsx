import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api_Client from "../ServicesApi/api_Client";
import authApiClient from "../ServicesApi/auth-api-client";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [serviceId, setServiceId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api_Client.get("/categories/").then((res) => {
      //   console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  const handleServiceAdd = async (data) => {
    try {
      const servicesRes = await authApiClient.post("/services/", data);
      setServiceId(servicesRes.data.id);
      if (servicesRes.status === 201) alert("Services created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // handle image's
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  //   handle uploading
  const handleUpload = async () => {
    if (!images.length) return alert("please select images");
    setLoading(true);
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        await authApiClient.post(`/services/${serviceId}/images/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      alert("Image uploaded succefully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Services</h2>
        {!serviceId ? (
          <form onSubmit={handleSubmit(handleServiceAdd)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Services Name</label>
              <input
                {...register("title", { required: true })}
                className="input input-bordered w-full"
                placeholder="service title"
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

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="text"
                {...register("price", {
                  required: "This Field is required",
                  validate: (value) => {
                    const parsedValue = parseFloat(value);
                    return (
                      !isNaN(parsedValue) || "Please enter a valid number!"
                    );
                  },
                })}
                className="input input-bordered w-full"
                placeholder="Price"
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price.message}</p>
              )}
            </div>

            {/* Dropdown for categories */}
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                {...register("category_id", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs">This field is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Delivery Time</label>
              <input
                type="number"
                {...register("delivary_time", { required: true })} // ✅ correct spelling
                className="input input-bordered w-full"
                placeholder="e.g. 3 days"
              />
              {errors.delivary_time && (
                <p className="text-red-500 text-xs">This field is required</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Add Service
            </button>
          </form>
        ) : (
          // images
          <div className="">
            <h3 className="text-lg font-medium mb-2">Upload Services Images</h3>
            <input
              type="file"
              multiple
              accept="image/*"
              className="file-input file-input-bordered w-full"
              onChange={handleImageChange}
            />
            {previewImages.length > 0 && (
              <div className="flex gap-2 mt-2">
                {previewImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="Preview "
                    className="w-16 h-16 rounded-md object-cover"
                  ></img>
                ))}
              </div>
            )}
            <button
              onClick={handleUpload}
              type="submit"
              className="btn btn-warning text-base-200 w-full mt-2"
              disabled={loading}
            >
              {loading ? "Uploading Images..." : "Upload Images"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddServices;
