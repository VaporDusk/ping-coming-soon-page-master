const containerInputs = document.querySelector(".container-inputs");
const containerInputEmail = document.querySelector(".container-input-email");
const inputEmail = document.querySelector(".input-email");
const inputButton = document.querySelector(".input-button");
const containerDashboard = document.querySelector(".container-dashboard");
const containerLinks = document.querySelector(".container-links");

inputButton.addEventListener("click", function(event) {
  if (inputEmail.value === "") {
    if (document.querySelector(".input-email-error")) {
      if (document.querySelector(".input-email-error").innerHTML !== "Whoops! It looks like you forgot to add your email") {
        document.querySelector(".input-email-error").innerHTML = "Whoops! It looks like you forgot to add your email";
      };
    } else if (!document.querySelector(".input-email-error")) {
      const para = document.createElement("p");
      const paraText = document.createTextNode("Whoops! It looks like you forgot to add your email");
      para.appendChild(paraText);
      containerInputEmail.appendChild(para);
      containerInputEmail.classList.add("error");
      containerInputs.classList.add("error");
      para.setAttribute("class", "input-email-error");
      inputEmail.classList.add("error");
      inputEmail.setAttribute("placeholder", "");
      containerDashboard.classList.add("error");
      containerLinks.classList.add("error");
    };
  } else if (inputEmail.value !== "") {
    if (!inputEmail.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      if (document.querySelector(".input-email-error")) {
        if (document.querySelector(".input-email-error").innerHTML !== "Please provide a valid email address") {
          document.querySelector(".input-email-error").innerHTML = "Please provide a valid email address";
        };
      } else {
        const para = document.createElement("p");
        const paraText = document.createTextNode("Please provide a valid email address");
        para.appendChild(paraText);
        containerInputEmail.appendChild(para);
        containerInputs.classList.add("error");
        containerInputEmail.classList.add("error");
        para.setAttribute("class", "input-email-error");
        inputEmail.classList.add("error");
        inputEmail.setAttribute("placeholder", "");
        containerDashboard.classList.add("error");
      };
    } else {
      if (document.querySelector(".input-email-error")) {
        const para = document.querySelector(".input-email-error");
        para.remove();
      };
      containerInputs.classList.remove("error");
      containerInputEmail.classList.remove("error");
      inputEmail.classList.remove("error");
      inputEmail.setAttribute("placeholder", "Email Address");
      containerDashboard.classList.remove("error");
      containerLinks.classList.remove("error");
    }
  };
});