import { CheckCircle2, Info, AlertCircle } from "lucide-react";
const Toast = () => {
  return (
    <div className="toast" id="toast">
      <CheckCircle2
        id="toastIconCheck"
        className="toast-icon toast-icon--success"
      />
      <Info
        id="toastIconInfo"
        className="toast-icon toast-icon--info"
        style={{ display: "none" }}
      />
      <AlertCircle
        id="toastIconAlert"
        className="toast-icon toast-icon--alert"
        style={{ display: "none" }}
      />
      <span id="toastMsg">Done</span>
    </div>
  );
};

export default Toast;
