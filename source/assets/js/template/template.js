function includeHeader() {
  const header = document.createElement("div");
  header.id = "header";
  fetch("source/assets/js/template/header.html")
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
      document.body.insertBefore(header, document.body.firstChild);

      fetch("source/assets/css/main.css")
        .then((response) => response.text())
        .then((data) => {
          const style1 = document.createElement("style");
          style1.innerHTML = data;
          document.head.appendChild(style1);
        });

      const fontAwesomeLink = document.createElement("link");
      fontAwesomeLink.rel = "stylesheet";
      fontAwesomeLink.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
      document.head.appendChild(fontAwesomeLink);

      const dropdownBtn = document.querySelector(".dropbtn");
      const dropdownContent = document.querySelector(".dropdown-content");

      let timeoutId;

      dropdownBtn.addEventListener("mouseenter", () => {
        dropdownContent.style.display = "block";
        dropdownContent.style.transition = "opacity 0.3s ease-in-out";
        dropdownContent.style.opacity = 1;
        clearTimeout(timeoutId);
      });

      dropdownBtn.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
          dropdownContent.style.transition = "opacity 0.3s ease-in-out";
          dropdownContent.style.opacity = 0;
          setTimeout(() => {
            dropdownContent.style.display = "none";
          }, 100);
        }, 250);
      });

      dropdownContent.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        dropdownContent.style.transition = "opacity 0.3s ease-in-out";
        dropdownContent.style.opacity = 1;
      });

      dropdownContent.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
          dropdownContent.style.transition = "opacity 0.3s ease-in-out";
          dropdownContent.style.opacity = 0;
          setTimeout(() => {
            dropdownContent.style.display = "none";
          }, 100);
        }, 250);
      });
    });
}

function includeFooter() {
  const footer = document.createElement("div");
  footer.id = "footer";
  fetch("source/assets/js/template/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
      document.body.appendChild(footer);
    });
}

Promise.all([includeHeader(), includeFooter()]);
