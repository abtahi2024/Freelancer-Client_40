import React from "react";
import ReviewsCard from "./ReviewsCard";

const ReviewsList = ({
  reviews,
  editReview,
  setEditReview,
  editingId,
  setEditingId,
  handleUpdateReview,
  handleDeleteReview,
}) => {
  return reviews.map((review) => (
    <ReviewsCard
      key={review.id}
      review={review}
      editReview={editReview}
      setEditReview={setEditReview}
      isEditing={editingId === review.id}
      onEditClick={() => {
        setEditingId(review.id);
        setEditReview({ rating: review.rating, comment: review.comment });
      }}
      onCancelEdit={() => setEditingId(null)}
      onSaveEdit={handleUpdateReview}
      onDeleteClick={() => handleDeleteReview(review.id)}
    />
  ));
};

export default ReviewsList;
