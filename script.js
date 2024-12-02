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
    confirmEmail: document.getElementById("confirm-email").value,
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
