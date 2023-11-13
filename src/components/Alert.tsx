import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; // we can pass html content in props (children is pre-defined in props of type ReactNode)
  onClose: () => void; // passing a function that defines what's happening when click on close button
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
