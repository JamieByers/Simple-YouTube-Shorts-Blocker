console.log("RUNNING CONTENT SCRIPT");

const shorts = document.querySelectorAll(".ytd-rich-grid-slim-media");
const headerEtc = document.querySelectorAll(".ytd-rich-shelf-renderer");

function hide(els) {
  els.forEach((el) => (el.style.display = "none"));
}

hide(shorts);
hide(headerEtc)
