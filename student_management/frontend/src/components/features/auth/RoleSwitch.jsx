import { GraduationCap, ShieldCheck } from "lucide-react";

const ROLES = [
  { value: "admin", label: "Admin", icon: ShieldCheck },
  { value: "teacher", label: "Teacher", icon: GraduationCap },
];

const RoleSwitch = ({ value, onChange, formName }) => (
  <div className="role-switch" data-form={formName}>
    <span className="role-switch-pill" />
    {ROLES.map((role) => (
      <button
        key={role.value}
        type="button"
        className={`role-option${value === role.value ? " is-active" : ""}`}
        onClick={() => onChange(role.value)}>
        <role.icon />
        <span>{role.label}</span>
      </button>
    ))}
  </div>
);

export default RoleSwitch;
