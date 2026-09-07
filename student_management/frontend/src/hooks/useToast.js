import gsap from "gsap";

let toastTimer = null;
export function showToast(message, type = "success") {
  const toastEl = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");

  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = message;

  const iconCheck = document.getElementById("toastIconCheck");
  const iconInfo = document.getElementById("toastIconInfo");
  const iconAlert = document.getElementById("toastIconAlert");

  if (iconCheck) iconCheck.style.display = "none";
  if (iconInfo) iconInfo.style.display = "none";
  if (iconAlert) iconAlert.style.display = "none";

  if (type === "info" && iconInfo) {
    iconInfo.style.display = "inline-block";
  } else if (
    (type === "alert" || type === "error" || type === "alert-circle") &&
    iconAlert
  ) {
    iconAlert.style.display = "inline-block";
  } else if (iconCheck) {
    iconCheck.style.display = "inline-block";
  }

  clearTimeout(toastTimer);

  if (gsap) {
    gsap.killTweensOf(toastEl);
    gsap.fromTo(
      toastEl,
      { xPercent: -50, y: 24, opacity: 0 },
      {
        xPercent: -50,
        y: 0,
        opacity: 1,
        duration: 0.32,
        ease: "back.out(1.6)",
      },
    );
  }
  toastTimer = setTimeout(() => {
    gsap.to(toastEl, {
      xPercent: -50,
      y: 24,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
  }, 2600);
}
