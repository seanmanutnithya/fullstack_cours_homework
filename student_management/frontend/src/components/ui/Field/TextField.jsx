import { AlertCircle, CheckCircle2 } from "lucide-react";
import Field from "./Field";

const TextField = ({
  id,
  name,
  label,
  type = "text",
  icon: Icon,
  statusIcons = false,
  error,
  valid,
  hint,
  className,
  ...rest
}) => {
  const inputId = id ?? name;
  return (
    <Field
      label={label}
      htmlFor={inputId}
      error={error}
      valid={valid}
      hint={hint}
      className={className}>
      <div className="input-wrap">
        {Icon && <Icon className="input-icon" />}
        <input id={inputId} name={name} type={type} {...rest} />
        {statusIcons && (
          <>
            <CheckCircle2 className="status-icon status-valid" />
            <AlertCircle className="status-icon status-invalid" />
          </>
        )}
      </div>
    </Field>
  );
};

export default TextField;
