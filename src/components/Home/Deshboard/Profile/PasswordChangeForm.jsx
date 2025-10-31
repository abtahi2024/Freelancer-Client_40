import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

const PasswordChangeForm = ({ register, errors, watch, isEditing }) => {
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePssword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsPasswordSectionOpen(!isPasswordSectionOpen)}
        type="button"
        className="btn btn-link justify-start text-success font-semibold h-auto min-h-0 p-0"
      >
        Change Password
      </button>
      {isPasswordSectionOpen && (
        <div className="mt-3 space-y-3 pl-2 border-l-2 border-base-300">
          {/* Current Password */}
          <div className="form-control">
            <label className="">Current Password</label>
            <div className="relative">
              <input
                type={showPassword.current ? "text" : "password"}
                className="input input-bordered bg-base-200 w-full pr-10"
                disabled={!isEditing}
                {...register("current_password", {
                  required: "Current Password is Required",
                })}
              />
              <button
                type="button"
                onClick={() => togglePssword("current")}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword.current ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>
            </div>

            {errors.current_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.current_password.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="form-control">
            <label className="">New Password</label>
            <div className="relative">
              <input
                type={showPassword.new ? "text" : "password"}
                className="input input-bordered bg-base-200 w-full pr-10"
                disabled={!isEditing}
                {...register("new_password", {
                  required: "New Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => togglePssword("new")}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword.new ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>
            </div>

            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="form-control">
            <label className="">Confirm New Password</label>
            <div className="relative">
              <input
              type={showPassword.confirm ? "text" : "password"}
                className="input input-bordered bg-base-200 w-full pr-10"
                disabled={!isEditing}
                {...register("confirm_new_password", {
                  validate: (value) =>
                    value === watch("new_password") || "Passwords do not match",
                })}
              />
                <button
                type="button"
                onClick={() => togglePssword("confirm")}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword.confirm ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>
            </div>
            {errors.confirm_new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_new_password.message}
              </p>
            )}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default PasswordChangeForm;
