import React from "react";
import { ToastContainer, toast } from "react-toastify";
const Toast = () => {
    const toastStyle = {
        borderRadius: "8px",
        padding: "16px",
        fontSize: "16px",
      };
  return <div>
    <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        style={toastStyle} />
  </div>;
};

export default Toast;