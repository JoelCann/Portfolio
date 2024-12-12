// Js for request quote sending

const btn = document.getElementById("btn");
const form = document.getElementById("form");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.textContent = "Processing...";

  const services = Array.from(
    document.querySelectorAll('input[name="service"]:checked')
  ).map((checkbox) => checkbox.value);

  const payload = {
    client: document.getElementById("client").value,
    client_email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
    industry: document.getElementById("industry").value,
    contactPerson: document.getElementById("contact-person").value,
    // contactPersonLname: "", // Add this field if needed
    services: services.join(", "), // Combine into a comma-separated string
    projectDescription: document.getElementById("project-description").value,
  };

  const serviceId = "service_xw9d6ef";
  const templateId = "template_wkvu3le";

  // const form = document.getElementById("form");

  emailjs.send(serviceId, templateId, payload).then(
    () => {
      btn.textContent = "SUBMIT";

      btn.textContent = "SUBMIT";
      Toastify({
        text: "✅ Request sent successfully!",
        duration: 3000,

        gravity: "bottom",
        position: "center",
        style: {
          background: "#a2d953",
        },
      }).showToast();

      form.reset();
    },
    () => {
      btn.textContent = "Send Email";
      Toastify({
        text: "Couldn't send Request...Chech internet and try again",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "center",
        style: {
          background: "#FF0000",
        },
      }).showToast();
    }
  );
});

// js for active nav link behavior

const navBtns = document.querySelectorAll(".nav-btn"); //selects all menu items

navBtns.forEach((item) => {
  //add event listeners to each button
  item.addEventListener("click", () => {
    navBtns.forEach((navBtn) => navBtn.classList.remove("active"));
    item.classList.add("active");
  });
});

const homeBtn = document.querySelector("#home");
homeBtn.classList.add("active");

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // Replace 'section' with your section tags or IDs
  const navBtns = document.querySelectorAll(".nav-btn"); // Select all navigation buttons

  // Function to update the active state
  const updateActiveNav = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navBtns.forEach((btn) => {
      btn.classList.remove("active");
      const targetSection = btn.parentElement.getAttribute("href").substring(1);
      if (targetSection === currentSection) {
        btn.classList.add("active");
      }
    });
  };

  // Event listener for scroll
  window.addEventListener("scroll", updateActiveNav);
});

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});


const listItem = document.querySelectorAll(".list-item");
listItem.forEach((item)=>{
  item.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  });
})


const mobileNavbarAvatar = document.querySelector("#mobile-navbar-avatar");
const mobileSideBar = document.querySelector(".mobile-sidebar");

mobileNavbarAvatar.addEventListener("click", ()=> {
  console.log("clicked");
  mobileSideBar.classList.toggle("active");
})


const sidebarCloseBtn = document.querySelector(
  ".mobile-sidebar-close-icon-container"
);

sidebarCloseBtn.addEventListener("click", ()=>{
  mobileSideBar.classList.remove("active");
})