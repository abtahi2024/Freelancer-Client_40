import React from "react";

const ProfileButton = ({ isEditing, setIsEditing, isSubmitting }) => {
  return (
    <div className="flex justify-center pt-4">
      {isEditing ? (
        <div className="space-x-4">
          <button
            type="submit"
            className="btn btn-info text-white px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saveing" : "save Changes"}
          </button>
          <button
            type="button"
            className="btn btn-error"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-info px-8 text-white"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileButton;
