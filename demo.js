const countries = [
  { name: "India", countryId: "1" },
  { name: "China", countryId: "2" },
  { name: "USA", countryId: "3" },
];

const states = [
  { name: "Gujarat", stateId: "1", countryId: "1" },
  { name: "Rajasthan", stateId: "2", countryId: "1" },
  { name: "Punjab", stateId: "3", countryId: "1" },
  { name: "Fujian", stateId: "4", countryId: "2" },
  { name: "Gansu", stateId: "5", countryId: "2" },
  { name: "Hebei", stateId: "6", countryId: "2" },
  { name: "California", stateId: "7", countryId: "3" },
  { name: "Indiana", stateId: "8", countryId: "3" },
  { name: "Texas", stateId: "9", countryId: "3" },
];

const cities = [
  { name: "Surat", stateId: "1", cityId: "1" },
  { name: "Junagadh", stateId: "1", cityId: "2" },
  { name: "Ahmedabad", stateId: "1", cityId: "3" },
  { name: "Amreli", stateId: "1", cityId: "4" },
  { name: "Jaipur", stateId: "2", cityId: "5" },
  { name: "udaypur", stateId: "2", cityId: "6" },
  { name: "ludhiyana", stateId: "3", cityId: "7" },
  { name: "jamshedpur", stateId: "3", cityId: "8" },
  { name: "Beijing", stateId: "4", cityId: "9" },
  { name: "Hangzous", stateId: "4", cityId: "10" },
  { name: "Xi An", stateId: "5", cityId: "11" },
  { name: "Ninjing", stateId: "5", cityId: "12" },
  { name: "Suzhoy", stateId: "6", cityId: "13" },
  { name: "Chongqing", stateId: "6", cityId: "14" },
  { name: "LA", stateId: "7", cityId: "15" },
  { name: "Sanjose", stateId: "7", cityId: "16" },
  { name: "West", stateId: "8", cityId: "17" },
  { name: "South", stateId: "8", cityId: "18" },
  { name: "East", stateId: "8", cityId: "19" },
  { name: "Dallas", stateId: "9", cityId: "20" },
  { name: "North Texas", stateId: "9", cityId: "21" },
];

let users = [
  {
    id: 1,
    name: "Anil",
    email: "anil@gmail.com",
    gender: "Male",
    hobbies: "Sports",
    country: { name: "India", countryId: "1" },
    state: { name: "Gujarat", stateId: "1", countryId: "1" },
    city: { name: "Ahmedabad", stateId: "1", cityId: "3" },
  },
  {
    id: 2,
    name: "Sunil",
    email: "sunil@gmail.com",
    gender: "Male",
    hobbies: "Travelling",
    country: { name: "India", countryId: "1" },
    state: { name: "Gujarat", stateId: "1", countryId: "1" },
    city: { name: "Surat", stateId: "1", cityId: "1" },
  },
  {
    id: 3,
    name: "Mahesh",
    email: "mahesh@gmail.com",
    gender: "Male",
    hobbies: "Reading",
    country: { name: "USA", countryId: "3" },
    state: { name: "Texas", stateId: "9", countryId: "3" },
    city: { name: "North Texas", stateId: "9", cityId: "21" },
  },
];
showDataIntoTable(users);
renderCountries();

document.getElementById("country").required = true;

function renderCountries() {
  const selectedCountry = document.getElementById("country");
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.countryId;
    option.text = country.name;
    selectedCountry.append(option);
  });
}

function renderStates() {
  const selectedCountryId = document.getElementById("country").value;
  const sortedState = !selectedCountryId
    ? []
    : states.filter((state) => selectedCountryId === state.countryId);
  const selectedState = document.getElementById("state");
  const option = document.createElement("option");
  selectedState.innerHTML = "";
  option.value = "";
  option.text = "Select Your State";
  option.setAttribute("selected", true);
  selectedState.appendChild(option);
  sortedState.forEach((state) => {
    const option = document.createElement("option");
    option.value = state.stateId;
    option.text = state.name;

    selectedState.appendChild(option);
    if (selectedCountryId == "") {
      selectedState.selected;
    }
  });
}

function renderCities() {
  const selectedStateId = document.getElementById("state").value;
  const selectedCity = document.getElementById("city");
  selectedCity.innerHTML = "";

  const sortedCity = !selectedStateId
    ? []
    : cities.filter((city) => selectedStateId === city.stateId);

  const option = document.createElement("option");
  option.value = "";
  option.text = "Select Your City";
  selectedCity.appendChild(option);
  sortedCity.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.cityId;
    option.text = city.name;
    selectedCity.appendChild(option);
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    const id = document.getElementById("id").value;
    id ? saveEditedUser(parseInt(id)) : addUser();
  } else {
    return;
  }
});

document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("searchText").addEventListener("input", searchText);

function formReset() {
  document.getElementById("country").value = "";
  document.getElementById("state").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").readOnly = false;

  document.getElementById("countryerrormsg").style.display = "none";
  document.getElementById("stateerrormsg").style.display = "none";
  document.getElementById("cityerrormsg").style.display = "none";

  renderCities();
  renderStates();
  form.reset();
  document.getElementById("orderSelect").value = "";
  document.getElementById("hobbiesCheck").style.visibility = "hidden";
}


function validateForm() {
 
return true;
}

function validateName() {
  document.getElementById("nameerrormsg").style.display = isNameValid()
    ? (document.getElementById("nameerrormsg").style.display = "none")
    : (document.getElementById("nameerrormsg").style.display = "inline");
}

function isNameValid() {
  let regex = /^[a-zA-Z\s-, ]+$/;
  let x = document.getElementById("name").value;
  return regex.test(x) == true || x == "" ? true : false;
}

function validateEmail() {
  document.getElementById("emailerrormsg").style.display = isEmailValid()
    ? (document.getElementById("emailerrormsg").style.display = "none")
    : (document.getElementById("emailerrormsg").style.display = "inline");
}

function isEmailValid() {
  let x = document.getElementById("email").value;
  const regexEmail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regexEmail.test(x) == true || x == "" ? true : false;
}

function showDataIntoTable(data) {
  const table = document.querySelector("tbody");
  data &&
    data.length &&
    data.forEach((item, index) => {
      table.innerHTML =
        table.innerHTML +
        `<tr class="tr-${item.id}">
            
                <td class="name">${item.name}</td>
                <td class="email">${item.email}</td>
                <td class="gender">${item.gender}</td>
                <td class="hobbies">${item.hobbies}</td>
                <td class="country">${item.country.name}</td>
                <td class="state">${item.state.name}</td>
                <td class="city">${item.city.name}</td>
                <td><button type="submit" onClick="deleteUser(${item.id}) " class="btn btn-outline-danger">Delete</button></td>
                <td><button type="submit" onClick="editUser('${item.id}') " class="btn btn-outline-primary">Edit</button></td>
  
            </tr>`;
    });
}
let newUserId = users.length;
function addUser() {
  newUserId = newUserId+1;
  let isFormValid = true;
  let hobbiesArray = []; 
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;

  if (!name.match(/^[a-zA-Z\s-, ]+$/)) {
    document.getElementById("nameerrormsg").style.display = "inline";
    // console.log("empty name");
  } else {
    document.getElementById("nameerrormsg").style.display = "none";
  }

  if (!email.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    document.getElementById("emailerrormsg").style.display = "inline";
    
  } else {
    document.getElementById("emailerrormsg").style.display = "none";
  }

  if (
    !document.getElementById("hobbies1").checked &&
    !document.getElementById("hobbies2").checked &&
    !document.getElementById("hobbies3").checked
  ) {
    document.getElementById("hobbiesCheck").style.visibility = "visible";
  }else{
    document.getElementById("hobbiesCheck").style.visibility = "hidden";

  }

  if (country == "select") {
    // console.log("empty country");

    document.getElementById("countryerrormsg").style.display = "inline";
    document.getElementById("stateerrormsg").style.display = "inline";
    document.getElementById("cityerrormsg").style.display = "inline";
    return true;
  }else{
    document.getElementById("countryerrormsg").style.display = "none";
    document.getElementById("stateerrormsg").style.display = "none";
    document.getElementById("cityerrormsg").style.display = "none";
  }

  if (!state) {
    // console.log("empty state");

    document.getElementById("stateerrormsg").style.display = "inline";
    document.getElementById("cityerrormsg").style.display = "inline";
    return true;
  }else{
    document.getElementById("stateerrormsg").style.display = "none";
    document.getElementById("cityerrormsg").style.display = "none";
  }

  if (!city) {
    // console.log("empty city");

    document.getElementById("cityerrormsg").style.display = "inline";
    return true;
  }else{
    document.getElementById("cityerrormsg").style.display = "none";
  }

  if (document.getElementById("hobbies1").checked) {
    hobbiesArray.push(document.getElementById("hobbies1").value);
  }
  if (document.getElementById("hobbies2").checked) {
    hobbiesArray.push(document.getElementById("hobbies2").value);
  }
  if (document.getElementById("hobbies3").checked) {
    hobbiesArray.push(document.getElementById("hobbies3").value);
  }
  if (
    !document.getElementById("hobbies1").checked &&
    !document.getElementById("hobbies2").checked &&
    !document.getElementById("hobbies3").checked
  ) {
    document.getElementById("hobbiesCheck").style.visibility = "visible";
    return isFormValid;
  }
  let hobbies = hobbiesArray.join(", ");
   country = countries.find(
    (c) => c.countryId === document.getElementById("country").value
  );
   state = states.find(
    (s) => s.stateId === document.getElementById("state").value
  );
   city = cities.find(
    (c) => c.cityId === document.getElementById("city").value
  );
  let newusers = {
    id: newUserId,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    hobbies: hobbies,
    country: country,
    state: state,
    city: city,
  };

  users.push(newusers);

  showDataIntoTable([newusers]);
  document.getElementById("country").value = "";
  document.getElementById("state").value = "";
  document.getElementById("city").value = "";
  document.getElementById("countryerrormsg").style.display = "none";
  document.getElementById("stateerrormsg").style.display = "none";
  document.getElementById("cityerrormsg").style.display = "none";
  renderCities();
  renderStates();
  form.reset();

  document.getElementById("orderSelect").value = "";
  document.getElementById("hobbiesCheck").style.visibility = "hidden";
}

function deleteUser(id) {
  
  const deleteRow = document.querySelector(`.tr-${id}`);
  if (deleteRow) {
    deleteRow.remove();
    users = users.filter((user) => user.id !== id);
  }
  newUserId = newUserId+1;
}

function saveEditedUser(id) {
  document.getElementById("countryerrormsg").style.display = "none";
  document.getElementById("stateerrormsg").style.display = "none";
  document.getElementById("cityerrormsg").style.display = "none";

  const item = users.find((i) => i.id === id);
  const userHtml = document.querySelector(`.tr-${id}`);
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;

  if (!name.match(/^[a-zA-Z\s-, ]+$/)) {
    document.getElementById("nameerrormsg").style.display = "inline";
    // console.log("empty name");
    
  } else {
    document.getElementById("nameerrormsg").style.display = "none";
  }

  if (!email.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    document.getElementById("emailerrormsg").style.display = "inline";
    return;
  } else {
    document.getElementById("emailerrormsg").style.display = "none";
  }

  if (
    !document.getElementById("hobbies1").checked &&
    !document.getElementById("hobbies2").checked &&
    !document.getElementById("hobbies3").checked
  ) {
    document.getElementById("hobbiesCheck").style.visibility = "visible";
  }

  if (country == "select") {
    // console.log("empty country");

    document.getElementById("countryerrormsg").style.display = "inline";
    document.getElementById("stateerrormsg").style.display = "inline";
    document.getElementById("cityerrormsg").style.display = "inline";
    return true;
  }else{
    document.getElementById("countryerrormsg").style.display = "none";
    document.getElementById("stateerrormsg").style.display = "none";
    document.getElementById("cityerrormsg").style.display = "none";
  }
  if (!state) {
    // console.log("empty state");
    document.getElementById("stateerrormsg").style.display = "inline";
    document.getElementById("cityerrormsg").style.display = "inline";
    return true;
  }
  else{
    document.getElementById("stateerrormsg").style.display = "none";
    document.getElementById("cityerrormsg").style.display = "none";
  }
  if (!city) {
    // console.log("empty city");

    document.getElementById("cityerrormsg").style.display = "inline";
    return true;
  }
  else{
    document.getElementById("cityerrormsg").style.display = "none";

  }




  if (!item || !userHtml) {
    return;
  }

  const formData = new FormData(form);
  const updatedUser = Object.fromEntries(formData);
  updatedUser.id = id;

  let hobbiesArray = [];
  if (document.getElementById("hobbies1").checked) {
    hobbiesArray.push(document.getElementById("hobbies1").value);
  }
  if (document.getElementById("hobbies2").checked) {
    hobbiesArray.push(document.getElementById("hobbies2").value);
  }
  if (document.getElementById("hobbies3").checked) {
    hobbiesArray.push(document.getElementById("hobbies3").value);
  }
  if (
    !document.getElementById("hobbies1").checked &&
    !document.getElementById("hobbies2").checked &&
    !document.getElementById("hobbies3").checked
  ) {
    // console.log("empty hobbeis");

    document.getElementById("hobbiesCheck").style.visibility = "visible";
    return true;
  }

  updatedUser.hobbies = hobbiesArray.join(", ");


  item.name = updatedUser.name;
  item.email = updatedUser.email;
  item.gender = updatedUser.gender;
  item.hobbies = updatedUser.hobbies;


  country = countries.find((c) => c.countryId === updatedUser.country);
  state = states.find((s) => s.stateId === updatedUser.state);
  city = cities.find((c) => c.cityId === updatedUser.city);

  if (country && state && city) {
    item.country = country;
    item.state = state;
    item.city = city;
  }
  // console.log(item.hobbies);
  name = userHtml.querySelector(".name");
  email = userHtml.querySelector(".email");
  gender = userHtml.querySelector(".gender");
  const hobbies = userHtml.querySelector(".hobbies");
  const countryTd = userHtml.querySelector(".country");
  const stateTd = userHtml.querySelector(".state");
  const cityTd = userHtml.querySelector(".city");

  name.innerText = updatedUser.name;
  email.innerText = updatedUser.email;
  gender.innerText = updatedUser.gender;
  hobbies.innerText = updatedUser.hobbies;
  countryTd.innerText = country ? country.name : "";
  stateTd.innerText = state ? state.name : "";
  cityTd.innerText = city ? city.name : "";


  // console.log("Updated User:", item);
  formReset();
  document.getElementById("saveEditBtn").style.display = "none";
  document.getElementById("saveBtn").style.display = "inline";
  document.getElementById("cButton").style.display = "none";
}

function editUser(id) {
  const item = users.find((u) => parseInt(u.id) === parseInt(id));

  document.getElementById("saveEditBtn").style.display = "inline";
  document.getElementById("saveBtn").style.display = "none";

  document.getElementById("cButton").style.display = "inline";
  document.getElementById("cButton").onclick = function () {
    document.getElementById("email").readOnly = false;
    document.getElementById("cButton").style.display = "none";
    document.getElementById("saveEditBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "inline";

    formReset();
  };

  document.getElementById("name").value = item.name;
  document.getElementById("id").value = item.id;
  document.getElementById("email").value = item.email;
  document.getElementById("email").readOnly = true;

  document.querySelector(
    `input[name="gender"][value="${item.gender}"]
  `
  ).checked = true;

  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
  // console.log(item.hobbies);
  item.hobbies.split(", ").forEach((hobby) => {
    switch (hobby) {
      case "Reading":
        document.getElementById("hobbies1").checked = true;
        !document.getElementById("hobbies2").checked;
        !document.getElementById("hobbies3").checked;
        break;
      case "Travelling":
        document.getElementById("hobbies2").checked = true;
        !document.getElementById("hobbies1").checked;
        !document.getElementById("hobbies3").checked;
        break;
      case "Sports":
        document.getElementById("hobbies3").checked = true;
        !document.getElementById("hobbies1").checked;
        !document.getElementById("hobbies2").checked;
        break;
    }
  });

  document.getElementById("country").value = item.country.countryId;
  renderStates();
  document.getElementById("state").value = item.state.stateId;
  renderCities();
  document.getElementById("city").value = item.city.cityId;
}

function searchText() {
  let table = document.querySelector("tbody");
  table.innerHTML = "";

  const userSearch = document.getElementById("searchText").value.toLowerCase();
  const results = users.filter(
    (item) =>
      item.name.toLowerCase().includes(userSearch) ||
      item.email.toLowerCase().includes(userSearch)
  );
  results.sort((a, b) => a.name.localeCompare(b.name));
  showDataIntoTable(results);
}

function orderedusers() {
  switch (document.getElementById("orderSelect").value) {
    case "default":
      let table = document.querySelector("tbody");

      table.innerHTML = "";
      let sortedData = users.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      // console.log(sortedData);
      showDataIntoTable(sortedData);
      break;

    case "Ascending":
      table1 = document.querySelector("tbody");

      table1.innerHTML = "";

      let sortAscending = users.sort((a, b) => a.name.localeCompare(b.name));
      // console.log(sortAscending);

      showDataIntoTable(sortAscending);
      break;

    case "Descending":
      table2 = document.querySelector("tbody");

      table2.innerHTML = "";

      sortDescending = users.sort((a, b) => a.name.localeCompare(b.name));
      sortDescending = users.reverse((a, b) => a.name.localeCompare(b.name));
      // console.log(sortDescending);

      showDataIntoTable(sortDescending);
      break;

    default:
  }
}
