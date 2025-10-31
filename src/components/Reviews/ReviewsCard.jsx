import React from "react";
import { FaStar } from "react-icons/fa6";
import EditReviewForm from "./EditReviewForm";

const ReviewsCard = ({
  review,
  editReview,
  setEditReview,
  onEditClick,
  isEditing,
  onCancelEdit,
  onSaveEdit,
  onDeleteClick,
}) => {
  // console.log(review);
  // if(!review)return null
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border border-base-200 rounded-xl overflow-hidden">
      <div className="card-body">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <p className="font-semibold">{review.buyer}</p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < review.rating ? `text-yellow-500` : "text-base-300"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={onEditClick} className="btn btn-outline btn-info">
              Edit
            </button>
            <button
              onClick={onDeleteClick}
              className="btn btn-outline btn-error"
            >
              Delete
            </button>
          </div>
        </div>
        {isEditing ? (
          <EditReviewForm
            editReview={editReview}
            setEditReview={setEditReview}
            onCancelEdit={onCancelEdit}
            onSave={() => onSaveEdit(review.id)}
          />
        ) : (
          <div className="mt-4">
            <p className="leading-relaxed whitespace-pre-line">
              {review.comment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsCard;
