import React from "react";

export const AuthLayout = ({greeting,tagline,children}) => {
  return (
    <div className="row">
      <div className="col-6  text-center welcome-section w-50">
        <h2 className="fs-1 mb-2 text-light  pb-2 fw-bold">{greeting}</h2>
        <p className="text-light fs-5 w-50 mx-auto pb-3">
          {tagline}
        </p>
      </div>
      {children}
    </div>
  );
};
