import React, { useEffect, useState } from "react";
import ProfileForm from "../components/Home/Deshboard/Profile/ProfileForm";
import { useForm } from "react-hook-form";
import ProfileButton from "../components/Home/Deshboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Home/Deshboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } =
    useAuthContext();
  const {
    register,
    watch,
    setValue,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      // Profile update
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        role: data.role,
        address: data.address,
        phone_number: data.phone_number,
      };

      await updateUserProfile(profilePayload);
      // password change
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-2xl">
      <div className="card-body">
        {errorMsg && <ErrorAlert error={errorMsg} />}
        <h1 className="card-title text-2xl mb-4">Profile Information</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />

          <PasswordChangeForm
            register={register}
            errors={errors}
            isEditing={isEditing}
            watch={watch}
          />

          <ProfileButton
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
