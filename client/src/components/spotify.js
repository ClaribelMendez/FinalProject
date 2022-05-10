const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "cb79505b7a4e48258da5fc9f2d1672c2";

const scopes = [
  "user-top-read",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
