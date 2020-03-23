class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //   Display profile in ui
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
          <div class="row">
              <div class="col-md-3">
                  <img class="img-fluid mb-2" src="${user.avatar_url}">
                  <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile </a>
                </div>
  
                  <div class="col-md-9">
                  <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
  
                  <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
  
                  <span class="badge badge-success">Followers: ${user.followers}</span>
  
                  <span class="badge badge-info">Following: ${user.public_following}</span>
  
                  <br><br>
  
                  <ul class="list-group">
                      <li class="list-group-item">Company: ${user.company}</li>
  
                      <li class="list-group-item">Website/Blog: ${user.blog}</li>
  
                      <li class="list-group-item">Location: ${user.location}</li>
  
                      <li class="list-group-item">Member Since: ${user.created_at}</li>
  
  
                  </ul>
  
  
              </div>
  
  
          </div>
  
  
      </div>

      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      
      `;
  }

  //   show alert message
  showAlert(message, className) {
    //   clear any remaining  alerts
    this.clearAlert();

    //   Creat div
    const div = document.createElement("div");

    // add class name
    div.className = className;

    // add text
    div.appendChild(document.createTextNode(message));

    // get parent
    const container = document.querySelector(".searchcontainer");

    // Get search box
    const search = document.querySelector(".search");

    // Insert alert
    container.insertBefore(div, search);
  }

  //   clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //   clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
