import React, { useState } from "react";
import { FaMinus, FaPlus, FaServicestack } from "react-icons/fa6";
import authApiClient from "../../ServicesApi/auth-api-client";
import { useNavigate } from "react-router";

const ServiceButton = ({ servic }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();

  const CreateOrder = async () => {
    try {
      setIsAdding(true);
      const payload = {
        items: [
          {
            service_id: servic.id,
            quantity,
            price: servic.price,
          },
        ],
      };
      const order = await authApiClient.post("/orders/", payload);
      if (order.status === 201) {
        alert("order card successfully");
        setIsAdded(true);
        setQuantity(1);
        navigate("/dashboard/orders");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };

  const increaseQuantity = () => {
    if (quantity < servic.id) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="join">
        <button
          className="btn btn-outline join-item"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <FaMinus className="h-4 w-4" />
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          min={1}
          max={100}
          className="input input-bordered join-item w-16 text-center [appearance:textfield][&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          className="btn btn-outline join-item"
          onClick={increaseQuantity}
          disabled={quantity >= servic.id}
        >
          <FaPlus className="h-4 w-4" />
        </button>
        
        {/* addButton */}
        <button
          className="btn btn-neutral w-full"
          onClick={CreateOrder}
          disabled={isAdding || isAdded || servic.id === 0}
        >
          {isAdding ? (
            <span className="flex items-center">
              <span className="loading loading-spinner loading-lg mr-2"></span>
              Adding...
            </span>
          ) : isAdded ? (
            <span className="flex items-center">
              <FaServicestack className="mr-2 h-4 w-4" />
              Added to Service
            </span>
          ) : (
            <span className="flex items-center">
              <FaServicestack className="mr-2 h-4 w-4" />
              Add to Service
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceButton;
