export function useAuth() {
  const setUserLogIn = (credentials) => {
    localStorage.setItem("token", credentials);
  };

  const removeUserLogin = () => {
    localStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("token")) return true;
  };

  return { isLoggedIn, setUserLogIn, removeUserLogin };
}
