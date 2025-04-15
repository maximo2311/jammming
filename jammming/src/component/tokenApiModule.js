const CLIENT_ID = "18f20e42f0524fd8b01cd4c908ad7a72";
const REDIRECT_URI = "http://localhost:3000/callback"; // La misma que configures en Spotify
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const loginSpotify = () => {
  window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private user-read-email`;
};

export const Login = () => {
  return (
    <div>
      <h2>Logeate con Spotify</h2>
      <button onClick={loginSpotify}>Iniciar sesión</button>
    </div>
  );
};


export const getAccessToken = () => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get("access_token");
  
    if (token) {
      localStorage.setItem("spotify_token", token);
      window.location.hash = ""; // Limpia la URL para seguridad
    }
  
    return token;
  };

  