// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //   show alert
        ui.showAlert("Usedr not foun", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //    clear profile
    ui.clearProfile();
  }
});
