import React, { useState } from "react";
import { useStudent } from "@/context/StudentContext";

const StudentDetailFormModal = ({ student }) => {
  const { formRef, formData, handleChange } = useStudent();

  return (
    <form
      className="modal-body"
      id="editForm"
      noValidate
      ref={formRef}
      onSubmit={(e) => e.preventDefault()}>
      <div className="upload-field">
        <div className="upload-preview" id="uploadPreview">
          <img src="https://i.pravatar.cc/160?img=9" alt="" />
        </div>
        <div className="upload-controls">
          <label className="btn btn-secondary btn-sm" htmlFor="editPhoto">
            <span>Upload photo</span>
          </label>
          <input type="file" id="editPhoto" accept="image/*" hidden />
          <p className="field-hint">PNG or JPG, up to 5MB</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="field field--full" data-field="editName">
          <label htmlFor="editName">Full name</label>
          <input
            type="text"
            id="editName"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="field-error">
            Please enter the student's full name.
          </span>
        </div>

        <div className="field" data-field="editEmail">
          <label htmlFor="editEmail">Email address</label>
          <div className="">
            <input
              type="email"
              id="editEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <span className="field-error">Enter a valid email address.</span>
        </div>

        <div className="field" data-field="editPhone">
          <label htmlFor="editPhone">Phone number</label>
          <div className="">
            <input
              type="tel"
              id="editPhone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <span className="field-error">
            Enter a valid phone number (7–15 digits).
          </span>
        </div>

        <div className="field">
          <label htmlFor="editClass">Class</label>
          <select
            id="editClass"
            name="class"
            value={formData.class}
            onChange={handleChange}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="editDob">Date of birth</label>
          <input
            type="date"
            id="editDob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="field field--full" data-field="editAddress">
          <label htmlFor="editAddress">Address</label>
          <input
            type="text"
            id="editAddress"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <span className="field-error">Please enter an address.</span>
        </div>

        <div className="field" data-field="editGuardianName">
          <label htmlFor="editGuardianName">Guardian name</label>
          <input
            type="text"
            id="editGuardianName"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
          />
        </div>
        <div className="field" data-field="editGuardianPhone">
          <label htmlFor="editGuardianPhone">Guardian phone</label>
          <div className="">
            <i data-lucide="phone" className="input-icon"></i>
            <input
              type="tel"
              id="editGuardianPhone"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
            />
          </div>
          <span className="field-error">
            Enter a valid phone number (7–15 digits).
          </span>
        </div>
      </div>
    </form>
  );
};

export default StudentDetailFormModal;
