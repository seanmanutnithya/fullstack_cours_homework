import React from "react";
import { Mail, Phone, MapPin, Pencil, Trash2 } from "lucide-react";
const ProfileHeader = () => {
  return (
    <section className="card profile-header" id="profileHeader">
      <div className="profile-header-main">
        <div className="profile-avatar-wrap">
          <img
            src="https://i.pravatar.cc/160?img=9"
            alt=""
            className="profile-avatar"
            id="profileAvatar"
          />
          <span className="status-badge status-badge--active">Active</span>
        </div>
        <div className="profile-header-info">
          <h2 className="profile-name">Jessia Rose</h2>
          <p className="profile-meta">Roll #10 · className 02 · Section B</p>
          <div className="profile-contact-row">
            <span className="profile-contact">
              <Mail />
              jessia.rose@iaacademy.edu
            </span>
            <span className="profile-contact">
              <Phone />
              +123 8988 569
            </span>
            <span className="profile-contact">
              <MapPin />
              TA-107, Newyork
            </span>
          </div>
        </div>
      </div>
      <div className="profile-header-actions">
        <button className="btn btn-secondary" id="editStudentBtn">
          <Pencil />
          <span>Edit</span>
        </button>
        <button className="btn btn-danger" id="deleteStudentBtn">
          <Trash2 />
          <span>Delete</span>
        </button>
      </div>
    </section>
  );
};

export default ProfileHeader;
