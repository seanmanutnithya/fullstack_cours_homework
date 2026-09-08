import "../../styles/index.css";
import PageHead from "@/components/features/students/components/PageHead";
import Table from "@/components/features/students/components/Table";
import StudentCards from "@/components/features/students/components/StudentCards";
import TopBar from "@/components/layout/TopBar";
import CardHead from "@/components/features/students/components/CardHead";
import ConfirmDialog from "@/components/features/students/components/ConfirmDialog";
import StudentFormModal from "@/components/features/students/components/StudentFormModal";
import { Pagination } from "@/components/ui";
import { usePagination } from "@/hooks/usePagination";
import { useStudent } from "@/components/features/students/context/StudentContext";

import { ChevronDown } from "lucide-react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { wireHoverScale } from "../../animation/hover";

const AllStudents = () => {
  const containerRef = useRef(null);
  const { students } = useStudent();
  const { page, pageCount, pageStart, pageEnd, setPage } = usePagination({
    total: students.length,
    pageSize: 10,
  });
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
        <ConfirmDialog />
        <StudentFormModal />
        <div className="page">
          <PageHead />
          <section className="card">
            <CardHead />
            {/* <!-- Table (desktop / tablet) --> */}
            <Table />
            {/* <!-- Card list (mobile) --> */}
            <StudentCards />

            <div className="card-foot">
              <span className="results-note">
                Showing <strong>{pageStart}–{pageEnd}</strong> of{" "}
                <strong>{students.length}</strong> students
              </span>
              <nav
                className="pagination"
                id="pagination"
                aria-label="Pagination">
                <Pagination
                  page={page}
                  pageCount={pageCount}
                  onPageChange={setPage}
                />
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
    </>
  );
};

export default AllStudents;
