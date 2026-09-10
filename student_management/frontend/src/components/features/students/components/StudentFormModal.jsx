import { Save } from "lucide-react";
import { useStudent } from "@/context/StudentContext";
import { Modal, Button, TextField } from "@/components/ui";

const StudentFormModal = () => {
  const {
    formData,
    modalOpen,
    closeModal,
    editingStudent,
    formRef,
    handleChange,
    handleSave,
    errors,
  } = useStudent();

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
          value={formData.name}
          onChange={handleChange}
          error={errors.name ? "Full name is required." : null}
        />
        <TextField
          id="studentGender"
          name="gender"
          label="Gender"
          placeholder="e.g. M/F"
          value={formData.gender}
          onChange={handleChange}
          error={errors.gender ? "Gender is required." : null}
        />
        <TextField
          id="studentId"
          name="ids"
          label="Student ID"
          placeholder="e.g. #01"
          value={formData.ids}
          onChange={handleChange}
          error={errors.ids ? "Student ID is required." : null}
        />
        <TextField
          id="studentclassName"
          name="std_class"
          label="Class"
          placeholder="e.g. 12A"
          value={formData.std_class}
          onChange={handleChange}
          error={errors.std_class ? "Class is required." : null}
        />
        <TextField
          id="studentPhone"
          name="phone"
          type="tel"
          label="Phone number"
          placeholder="+123 0000000"
          value={formData.phone}
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
          value={formData.remark}
          onChange={handleChange}
        />
      </form>
    </Modal>
  );
};

export default StudentFormModal;
