document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    alert("✅ Thank you! Your message has been sent successfully.");
  });
});
