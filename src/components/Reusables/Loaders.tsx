import React from "react";
import Loading from "react-loading";

export const AppLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      <Loading type="spin" width={30} height={30} color="#7151f2" />
    </div>
  );
};

export const UtilsLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading type="spin" width={30} height={30} color="#ffffff" />
    </div>
  );
};
