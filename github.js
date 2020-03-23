class Github {
  constructor() {
    this.client_id = "dea9c58ef46cf8601602";
    this.client_secret = "86f6a3b2f8813e4b4dfdf3f2baff86c42a9a88e8";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
