import "../../index.css";
import PageHead from "@/components/features/students/components/PageHead";
import Table from "@/components/features/students/components/Table";
import TopBar from "@/components/layout/TopBar";
import CardHead from "@/components/features/students/components/CardHead";
import ConfimDialog from "@/components/features/students/components/ConfimDialog";
import Modal from "@/components/common/Modal";
import Toast from "@/components/Toast";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { wireHoverScale } from "../../animation/hover";

const AllStudents = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      tl.fromTo(
        ".topbar, .mobile-topbar",
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.3 },
      )
        .fromTo(
          ".card",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          "-=0.1",
        )
        .fromTo(
          ".table-row",
          { opacity: 0, x: -8 },
          {
            opacity: 1,
            x: 0,
            duration: 0.25,
            stagger: 0.03,
            onComplete: () => {
              wireHoverScale(".btn", 1.035);
              wireHoverScale(".icon-btn", 1.08);
              wireHoverScale(".row-action-btn", 1.12);
              wireHoverScale(".page-btn", 1.08);
            },
          },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );
  return (
    <>
      <main className="main" ref={containerRef}>
        <TopBar />
        <ConfimDialog />
        <Modal />
        <div className="page">
          <PageHead />
          <section className="card">
            <CardHead />
            {/* <!-- Table (desktop / tablet) --> */}
            <Table />
            {/* <!-- Card list (mobile) --> */}
            {/* <StudentCards /> */}

            <div className="card-foot">
              <span className="results-note">
                Showing <strong>1–10</strong> of
                <strong>1,000</strong> students
              </span>
              <nav
                className="pagination"
                id="pagination"
                aria-label="Pagination">
                <button className="page-btn" aria-label="Previous page">
                  <ChevronLeft />
                </button>
                <button className="page-btn is-active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <span className="page-ellipsis">···</span>
                <button className="page-btn">100</button>
                <button className="page-btn" aria-label="Next page">
                  <ChevronRight />
                </button>
                <button
                  className="select-field select-field--sm"
                  id="pageSizeBtn">
                  <span>10 / page</span>
                  <ChevronDown />
                </button>
              </nav>
            </div>
          </section>
        </div>
      </main>
      <Toast />
    </>
  );
};

export default AllStudents;
