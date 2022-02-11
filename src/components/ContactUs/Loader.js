import React from "react";
import ReactLoading from "react-loading";

function Loader({ type, color }) {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "75%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 style={{ color: "#E2E2E1" }}>Loading...</h2>
        <ReactLoading type={type} color={color} height={"80%"} width={"80%"} />
      </div>
    </div>
  );
}

export default Loader;
