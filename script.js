const btn = document.getElementById("btn");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.textContent = "Processing...";

  const services = Array.from(
    document.querySelectorAll('input[name="service"]:checked')
  ).map((checkbox) => checkbox.value);

  const payload = {
    client: document.getElementById("client").value,
    email: document.getElementById("email").value,
    confirmEmail: document.getElementById("confirm-email").value,
    industry: document.getElementById("industry").value,
    contactPerson: document.getElementById("contact-person").value,
    // contactPersonLname: "", // Add this field if needed
    services: services.join(", "), // Combine into a comma-separated string
    projectDescription: document.getElementById("project-description").value,
  };

  const serviceId = "service_xw9d6ef";
  const templateId = "template_wkvu3le";

  const form = document.getElementById("form");

  emailjs.send(serviceId, templateId, payload).then(
    () => {
      btn.textContent = "SUBMIT";
      alert("Sent!");
    },
    (err) => {
      btn.textContent = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
