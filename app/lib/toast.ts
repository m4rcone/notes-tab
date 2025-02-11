import { toast } from "react-toastify";

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    // closeOnClick: false,
    pauseOnHover: true,
    closeButton: false,
    draggable: true,
    style: {
      minHeight: "0",
      marginBottom: "70px",
      width: "270px",
      color: "#0E121B",
      borderRadius: "0.5rem",
      borderColor: "#E0E4EA",
    },
  });
};
