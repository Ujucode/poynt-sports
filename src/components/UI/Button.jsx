import React from "react";

const Button = ({ data }) => {
  return (
    <>
      <div className="border-4 border-[#50AD29] rounded-full  text-[#F7F9FC] text-bold text-center text-[21px] h-12 w-32 pt-1">
        <a href="">{data}</a>
      </div>
    </>
  );
};

export default Button;
