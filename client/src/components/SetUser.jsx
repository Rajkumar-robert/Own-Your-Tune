import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { UserStateContext } from "../context/UserStateContext";

const Input = ({ type, value, handleChange }) => (
  <input
    type={type}
    step="0.0001"
    value={value}
    onChange={handleChange}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const SetUser = () => {
  const { setUserState, handleChange, formValue } = useContext(UserStateContext);
console.log("sss",formValue);
  const handleSubmit = (e) => {
    const { userId } = formValue; // Corrected property name to userId

    e.preventDefault();

    if (!userId) return;

    setUserState();
  };

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <Input placeholder="userid" type="text" handleChange={(e) => handleChange(e, "userId")} />

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      <button
        type="button"
        onClick={handleSubmit}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
        Send now
      </button>
    </div>
  );
};

export default SetUser;
