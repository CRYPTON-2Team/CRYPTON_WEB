import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const SuccessToast = (title: string) => {
  Toast.fire({
    icon: "success",
    title: title
  });
};

export const ErrorToast = (title: string) => {
  Toast.fire({
    icon: "error",
    title: title
  });
};

export const WarningToast = (title: string) => {
  Toast.fire({
    icon: "warning",
    title: title
  });
};

export const InfoToast = (title: string) => {
  Toast.fire({
    icon: "info",
    title: title
  });
};
