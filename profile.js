const fullName = document.querySelector("#name");
const age = document.querySelector("#id-Age");
const number = document.querySelector("#id-Number");
const email = document.querySelector("#id-email");
const address = document.querySelector("#id-address");
const descriptionInput = document.querySelector("#id-description");
const imageUpload = document.querySelector("#imageUpload");
const preview = document.getElementById("preview");
const generateBtn = document.querySelector(".generateBtn");

const profileName = document.querySelector(".profileName"); // name on image
const descriptionDiv = document.getElementById("descriptionDiv"); // fixed
const detailName = document.querySelector(".detail-Name");
const detailAge = document.querySelector(".detail-Age");
const detailMobile = document.querySelector(".detail-Mobile");
const detailEmail = document.querySelector(".detail-Email");
const detailAddress = document.querySelector(".detail-Address");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const profileSection = document.getElementById("profileSection");
  profileSection.scrollIntoView({ behavior: "smooth" });
  const fullNameValue = fullName.value;
  const descriptionValue = descriptionInput.value;
  const ageValue = age.value;
  const numberValue = number.value;
  const emailValue = email.value;
  const addressValue = address.value;

  profileName.innerHTML = fullNameValue;
  descriptionDiv.innerHTML = descriptionValue;
  detailName.innerHTML = fullNameValue;
  detailAge.innerHTML = ageValue;
  detailMobile.innerHTML = numberValue;
  detailEmail.innerHTML = emailValue;
  detailAddress.innerHTML = addressValue;

  if (imageUpload.files.length > 0) {
    const file = imageUpload.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please select a file first.");
  }
});
