import { Save, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useStudent } from "../features/students/context/StudentContext";
import { useGSAP } from "@gsap/react";
const Modal = () => {
  const { modalOpen, closeModal, saveStudent, editingStudent } = useStudent();
  const [form, setForm] = useState({
    name: "",
    gender: "",
    ids: "",
    std_class: "",
    phone: "",
    remark: "",
  });
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    setErrors({});
    if (editingStudent) {
      setForm({
        name: editingStudent.name ?? "",
        gender: editingStudent.gender ?? "",
        ids: editingStudent.id ?? "",
        std_class: editingStudent.std_class ?? "",
        phone: editingStudent.phone ?? "",
        remark: editingStudent.remark ?? "",
      });
    } else {
      setForm({
        name: "",
        gender: "",
        ids: "",
        std_class: "",
        phone: "",
        remark: "",
      });
    }
  }, [editingStudent, modalOpen]);

  useGSAP(
    () => {
      if (modalOpen) {
        gsap.fromTo(
          ".modal-overlay",
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power1.out" },
        );
        gsap.fromTo(
          ".modal",
          { y: 24, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" },
          "-=0.15",
        );
      }
    },
    { dependencies: [modalOpen], scope: modalRef },
  );

  if (!modalOpen) return null;

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }

    saveStudent(form, formRef);
  };

  return (
    <div
      className="modal-overlay"
      style={{ opacity: 1, visibility: "visible" }}
      id="modalOverlay"
      ref={modalRef}
      onClick={closeModal}>
      <div
        className="modal"
        id="studentModal"
        ref={formRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3 id="modalTitle">
            {editingStudent ? "Edit Student" : "Add Student"}
          </h3>
          <button
            className="icon-btn"
            id="modalCloseBtn"
            aria-label="Close"
            type="button"
            onClick={closeModal}>
            <X />
          </button>
        </div>

        <form className="modal-body" id="studentForm">
          <div className="form-grid">
            <div className={`field ${errors.name ? "is-invalid" : ""}`}>
              <label htmlFor="studentName">Full name</label>
              <input
                type="text"
                id="studentName"
                name="name"
                placeholder="e.g. Eleanor Pena"
                value={form.name}
                onChange={handleChange}
              />
              <span className="field-error">Full name is required.</span>
            </div>
            <div className={`field ${errors.gender ? "is-invalid" : ""}`}>
              <label htmlFor="studentGender">Gender</label>
              <input
                type="text"
                id="studentGender"
                name="gender"
                placeholder="e.g. M/F"
                value={form.gender}
                onChange={handleChange}
              />
              <span className="field-error">Gender is required.</span>
            </div>
            <div className={`field ${errors.ids ? "is-invalid" : ""}`}>
              <label htmlFor="studentId">Student ID</label>
              <input
                type="text"
                id="studentId"
                name="ids"
                placeholder="e.g. #01"
                value={form.ids}
                onChange={handleChange}
              />
              <span className="field-error">Student ID is required.</span>
            </div>
            <div className={`field ${errors.std_class ? "is-invalid" : ""}`}>
              <label htmlFor="studentclassName">Class</label>
              <input
                type="text"
                id="studentclassName"
                name="std_class"
                placeholder="e.g. 12A"
                value={form.std_class}
                onChange={handleChange}
              />
              <span className="field-error">Class is required.</span>
            </div>
            <div className={`field ${errors.phone ? "is-invalid" : ""}`}>
              <label htmlFor="studentPhone">Phone number</label>
              <input
                type="tel"
                id="studentPhone"
                name="phone"
                placeholder="+123 0000000"
                value={form.phone}
                onChange={handleChange}
              />
              <span className="field-error">Phone number is required.</span>
            </div>
            <div className="field">
              <label htmlFor="studentRemark">
                Remark <span className="field-hint">(optional)</span>
              </label>
              <input
                type="text"
                id="studentRemark"
                name="remark"
                placeholder="e.g. class president"
                value={form.remark}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        <div className="modal-foot">
          <button
            className="btn btn-secondary"
            id="modalCancelBtn"
            type="button"
            onClick={closeModal}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            id="modalSaveBtn"
            type="button"
            onClick={handleSave}>
            <Save />
            <span>Save student</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
