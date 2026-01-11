document.querySelectorAll(".project h3").forEach((title) => {
  title.addEventListener("click", () => {
    const details = title.parentElement.querySelector(".project-details");

    if (details.style.maxHeight) {
      details.style.maxHeight = null;
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
    }
  });
});
