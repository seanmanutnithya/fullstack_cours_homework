import { useEffect, useRef, useState } from "react";
import { Save } from "lucide-react";
import { useStudent } from "@/context/StudentContext";
import { Modal, Button, TextField } from "@/components/ui";

const emptyForm = {
  name: "",
  gender: "",
  ids: "",
  std_class: "",
  phone: "",
  remark: "",
};

const StudentFormModal = () => {
  const { modalOpen, closeModal, saveStudent, editingStudent } = useStudent();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    setErrors({});
    setForm(
      editingStudent ?
        {
          name: editingStudent.name ?? "",
          gender: editingStudent.gender ?? "",
          ids: editingStudent.id ?? "",
          std_class: editingStudent.std_class ?? "",
          phone: editingStudent.phone ?? "",
          remark: editingStudent.remark ?? "",
        }
      : emptyForm,
    );
  }, [editingStudent, modalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSave = () => {
    const requiredFields = ["name", "gender", "ids", "std_class", "phone"];
    const newErrors = {};
    requiredFields.forEach((key) => {
      if (!form[key] || String(form[key]).trim() === "") {
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    saveStudent(form, formRef);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={closeModal}
      title={editingStudent ? "Edit Student" : "Add Student"}
      titleId="modalTitle"
      overlayId="modalOverlay"
      footer={
        <>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button icon={Save} onClick={handleSave}>
            Save student
          </Button>
        </>
      }>
      <form
        className="form-grid"
        id="studentForm"
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="studentName"
          name="name"
          label="Full name"
          placeholder="e.g. Eleanor Pena"
          value={form.name}
          onChange={handleChange}
          error={errors.name ? "Full name is required." : null}
        />
        <TextField
          id="studentGender"
          name="gender"
          label="Gender"
          placeholder="e.g. M/F"
          value={form.gender}
          onChange={handleChange}
          error={errors.gender ? "Gender is required." : null}
        />
        <TextField
          id="studentId"
          name="ids"
          label="Student ID"
          placeholder="e.g. #01"
          value={form.ids}
          onChange={handleChange}
          error={errors.ids ? "Student ID is required." : null}
        />
        <TextField
          id="studentclassName"
          name="std_class"
          label="Class"
          placeholder="e.g. 12A"
          value={form.std_class}
          onChange={handleChange}
          error={errors.std_class ? "Class is required." : null}
        />
        <TextField
          id="studentPhone"
          name="phone"
          type="tel"
          label="Phone number"
          placeholder="+123 0000000"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone ? "Phone number is required." : null}
        />
        <TextField
          id="studentRemark"
          name="remark"
          label={
            <>
              Remark <span className="field-hint">(optional)</span>
            </>
          }
          placeholder="e.g. class president"
          value={form.remark}
          onChange={handleChange}
        />
      </form>
    </Modal>
  );
};

export default StudentFormModal;
