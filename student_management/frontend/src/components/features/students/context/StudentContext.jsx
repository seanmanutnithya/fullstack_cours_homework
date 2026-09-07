import { createContext, useContext, useState } from "react";
import studentData from "../../../../../../database/data.json";
import { showToast } from "@/hooks/useToast";
import { shake } from "@/animation/shake";
const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(studentData);
  const [selectedIds, setSelectedIds] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingDeleteIds, setPendingDeleteIds] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const toggleSelect = (index) => {
    setSelectedIds((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  const selectAll = (checked) => {
    setSelectedIds(checked ? students.map((s) => s.id) : []);
  };
  const isAllSelected =
    students.length > 0 && selectedIds.length == students.length;

  const requestDeleteSingle = (index) => {
    setPendingDeleteIds(index);
    setConfirmOpen(true);
  };
  const requestDeleteSelected = () => {
    if (selectedIds.length == 0) {
      showToast("Select student to delete first", "info");
      return;
    }
    setPendingDeleteIds(null);
    setConfirmOpen(true);
  };
  const confirmDelete = () => {
    if (pendingDeleteIds !== null) {
      setStudents((prev) => prev.filter((s) => s.id !== pendingDeleteIds));
      setSelectedIds((prev) => prev.filter((id) => id !== pendingDeleteIds));
    } else {
      setStudents((prev) => prev.filter((s) => !selectedIds.includes(s.id)));
      setSelectedIds([]);
    }
    setConfirmOpen(false);
    setPendingDeleteIds(null);
  };
  const cancelDelete = () => {
    setConfirmOpen(false);
    setPendingDeleteIds(null);
  };
  const openAddStudent = () => {
    setModalOpen(true);
  };
  const openEdit = (index) => {
    setEditingId(index);
    setModalOpen(true);
  };
  const closeModal = () => {
    setEditingId(null);
    setModalOpen(false);
  };
  const saveStudent = (data, ref) => {
    const requiredFields = ["name", "gender", "ids", "std_class", "phone"];
    const isFormInvalid = requiredFields.some(
      (key) => !data[key] || String(data[key]).trim() === "",
    );
    if (isFormInvalid) {
      if (ref?.current) shake(ref.current);
      showToast("Please fill in all required fields", "info");
      return;
    }
    setStudents((prev) =>
      editingId !== null ?
        prev.map((s) => (s.id === editingId ? { ...s, ...data } : s))
      : [...prev, { ...data, id: data.ids || Date.now().toString() }],
    );
    showToast(editingId !== null ? "Saved" : "Added", "circle-check");
    closeModal();
  };
  const value = {
    students,
    selectedIds,
    toggleSelect,
    selectAll,
    isAllSelected,
    confirmOpen,
    requestDeleteSingle,
    requestDeleteSelected,
    confirmDelete,
    cancelDelete,
    modalOpen,
    editingStudent:
      editingId !== null ? students.find((s) => s.id === editingId) : null,
    openEdit,
    closeModal,
    saveStudent,
    openAddStudent,
  };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
}
export function useStudent() {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error("useStudent must be used inside <StudentProvider>");
  return ctx;
}
