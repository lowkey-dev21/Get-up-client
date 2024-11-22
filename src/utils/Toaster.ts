import toast from "react-hot-toast";

export const toasterS = (msg: string) => {
  toast.success(msg, {
    style: {
      padding: "16px",
      color: "white",
      background: `black`,
      height: "50px",
    },
    iconTheme: {
      primary: "green",
      secondary: "white",
    },
  });
};

export const toasterE = (msg: string) => {
  toast.error(msg, {
    style: {
      padding: "16px",
      color: "white",
      background: `red`,
      height: "50px",
    },
    iconTheme: {
      primary: "white",
      secondary: "black",
    },
  });
};
