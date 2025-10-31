import React, { Suspense, useEffect, useState } from "react";
import ServiceImagesGallery from "../components/ServiceDetails/ServiceImagesGallery";
import ServiceButton from "../components/ServiceDetails/ServiceButton";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

import authApiClient from "../ServicesApi/auth-api-client";
import ReviewsSection from "../components/Reviews/ReviewsSection";

const ServiceDetail = () => {
  const [servic, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const { serviceId } = useParams();

  useEffect(() => {
    setLoading(true);
    authApiClient.get(`/services/${serviceId}/`).then((res) => {
      setService(res.data);
      // console.log(res.data);
      setLoading(false);
    });
  }, [serviceId]);

  if (loading)
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (!servic) return <div>service not found</div>;

  return (
    <div className="w-3/4 mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to={"/shopservice"}
          className="flex items-center text-sm text-base-content hover:text-rose-500 transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to Service
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <Suspense
          fallback={
            <div className="aspect-square bg-base-300 animate-pulse"></div>
          }
        >
          <ServiceImagesGallery
            images={servic.images}
            ServiceName={servic.category.name}
          />
        </Suspense>

        <div className="flex flex-col">
          <div className="mb-4">
            <div className="badge badge-outline mb-2">
              Category {servic.category.id}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {servic.category.name}
            </h1>
          </div>

          <div className="mt-2 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${servic.price}</span>
              <span className="text-sm text-base-content/70">
                (${servic.price})
              </span>
            </div>
          </div>

          <div className="prose prose-sm mb-6">
            <p>{servic.category.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <div className="mr-2 text-sm font-medium">Availability</div>
              {servic.id > 0 ? (
                <div className="badge badge-outline bg-success/10 text-success border-success/20">
                  In Stock ({servic.id} Available)
                </div>
              ) : (
                <div className="badge badge-outline bg-error/10 text-error border-error/20">
                  Out of Stock
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <ServiceButton servic={servic} />
        </div>
      </div>

      <ReviewsSection/>
    </div>
  );
};

export default ServiceDetail;
