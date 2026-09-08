import { Link } from "react-router-dom";
import "./StudentDetail.css";
import {
  ChevronRight,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Trash2,
  Award,
  CheckCircle2,
  CalendarClock,
  User,
  Users,
} from "lucide-react";
const StudentDetail = () => {
  return (
    <main className="main">
      <div className="page">
        <div className="page-head">
          <div>
            <h1 className="page-title">Student Details</h1>
            <p className="breadcrumb">
              <Link to={"/"}>Home</Link>
              <ChevronRight />
              <Link to={"/allstudents"}>Students</Link>
              <ChevronRight />
              <span className="is-current">Jessia Rose</span>
            </p>
          </div>
          <div className="page-head-actions">
            <button className="btn btn-secondary" id="backBtn">
              <ArrowLeft />
              <Link to={"/allstudents"}>Back to list</Link>
            </button>
          </div>
        </div>

        {/* <!-- ============ Profile header ============ --> */}
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
              <p className="profile-meta">
                Roll #10 · className 02 · Section B
              </p>
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

        {/* <!-- ============ Stat cards ============ --> */}
        <section className="stat-grid">
          <div className="stat-card">
            <div className="stat-ring-wrap">
              <svg className="stat-ring" viewBox="0 0 80 80">
                <circle
                  className="stat-ring-track"
                  cx="40"
                  cy="40"
                  r="34"></circle>
                <circle
                  className="stat-ring-fill"
                  id="attendanceRing"
                  cx="40"
                  cy="40"
                  r="34"></circle>
              </svg>
              <span className="stat-ring-value" id="attendanceValue">
                0%
              </span>
            </div>
            <div>
              <span className="stat-card-title">Attendance</span>
              <span className="stat-card-sub">Last 30 days</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon--purple">
              <Award />
            </div>
            <div>
              <span className="stat-card-value">A-</span>
              <span className="stat-card-title">Overall grade</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon--green">
              <CheckCircle2 />
            </div>
            <div>
              <span className="stat-card-value">Paid</span>
              <span className="stat-card-title">Fee status</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon--amber">
              <CalendarClock />
            </div>
            <div>
              <span className="stat-card-value">2 yrs</span>
              <span className="stat-card-title">At this school</span>
            </div>
          </div>
        </section>

        {/* <!-- ============ Tabs ============ --> */}
        <section className="card tab-card">
          <div
            className="detail-tabs"
            role="tablist"
            aria-label="Student details">
            <button
              className="detail-tab is-active"
              id="tab-overview"
              role="tab"
              aria-selected="true"
              aria-controls="panel-overview"
              data-tab="overview">
              Overview
            </button>
            <button
              className="detail-tab"
              id="tab-attendance"
              role="tab"
              aria-selected="false"
              aria-controls="panel-attendance"
              data-tab="attendance">
              Attendance
            </button>
            <button
              className="detail-tab"
              id="tab-results"
              role="tab"
              aria-selected="false"
              aria-controls="panel-results"
              data-tab="results">
              Results
            </button>
            <button
              className="detail-tab"
              id="tab-fees"
              role="tab"
              aria-selected="false"
              aria-controls="panel-fees"
              data-tab="fees">
              Fees
            </button>
            <button
              className="detail-tab"
              id="tab-documents"
              role="tab"
              aria-selected="false"
              aria-controls="panel-documents"
              data-tab="documents">
              Documents
            </button>
            <span
              className="detail-tab-indicator"
              id="tabIndicator"
              aria-hidden="true"></span>
          </div>

          <div className="detail-panels">
            {/* <!-- Overview --> */}
            <div
              className="detail-panel is-active"
              id="panel-overview"
              role="tabpanel"
              aria-labelledby="tab-overview"
              data-panel="overview">
              <div className="info-grid">
                <div className="info-block">
                  <h3 className="info-block-title">
                    <User />
                    Personal information
                  </h3>
                  <dl className="info-list">
                    <div>
                      <dt>Date of birth</dt>
                      <dd>03/04/2000</dd>
                    </div>
                    <div>
                      <dt>Gender</dt>
                      <dd>Female</dd>
                    </div>
                    <div>
                      <dt>Blood group</dt>
                      <dd>O+</dd>
                    </div>
                    <div>
                      <dt>Admission date</dt>
                      <dd>18/08/2023</dd>
                    </div>
                    <div>
                      <dt>Previous school</dt>
                      <dd>Westbrook High</dd>
                    </div>
                    <div>
                      <dt>Address</dt>
                      <dd>TA-107, Newyork</dd>
                    </div>
                  </dl>
                </div>
                <div className="info-block">
                  <h3 className="info-block-title">
                    <Users />
                    Guardian information
                  </h3>
                  <dl className="info-list">
                    <div>
                      <dt>Guardian name</dt>
                      <dd>Robert Rose</dd>
                    </div>
                    <div>
                      <dt>Relationship</dt>
                      <dd>Father</dd>
                    </div>
                    <div>
                      <dt>Phone</dt>
                      <dd>+123 4433 221</dd>
                    </div>
                    <div>
                      <dt>Email</dt>
                      <dd>robert.rose@mail.com</dd>
                    </div>
                    <div>
                      <dt>Occupation</dt>
                      <dd>Civil Engineer</dd>
                    </div>
                    <div>
                      <dt>Emergency contact</dt>
                      <dd>+123 9988 552</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* <!-- Attendance --> */}
            <div
              className="detail-panel"
              id="panel-attendance"
              role="tabpanel"
              aria-labelledby="tab-attendance"
              data-panel="attendance">
              <div className="attendance-legend">
                <span>
                  <i className="legend-dot legend-dot--present"></i>Present
                </span>
                <span>
                  <i className="legend-dot legend-dot--late"></i>Late
                </span>
                <span>
                  <i className="legend-dot legend-dot--absent"></i>Absent
                </span>
              </div>
              <div className="calendar-grid" id="calendarGrid"></div>
              <div className="attendance-bars" id="attendanceBars"></div>
            </div>

            {/* <!-- Results --> */}
            <div
              className="detail-panel"
              id="panel-results"
              role="tabpanel"
              aria-labelledby="tab-results"
              data-panel="results">
              <div className="table-wrap">
                <table className="table results-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Term</th>
                      <th>Marks</th>
                      <th>Grade</th>
                      <th className="col-progress">Progress</th>
                    </tr>
                  </thead>
                  <tbody id="resultsBody"></tbody>
                </table>
              </div>
            </div>

            {/* <!-- Fees --> */}
            <div
              className="detail-panel"
              id="panel-fees"
              role="tabpanel"
              aria-labelledby="tab-fees"
              data-panel="fees">
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Invoice</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody id="feesBody"></tbody>
                </table>
              </div>
            </div>

            {/* <!-- Documents --> */}
            <div
              className="detail-panel"
              id="panel-documents"
              role="tabpanel"
              aria-labelledby="tab-documents"
              data-panel="documents">
              <div className="document-grid" id="documentGrid"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StudentDetail;
