/**
 *
 *  This is the handleLogin
 *
 */

export const handleLogin = async (e, username, password, router) => {
  e.preventDefault();

  try {
    const response = await axios.post(process.env.LOGIN_USER_FETCH_PATH, {
      username,
      password,
    });

    const { token } = response.data;

    // Store the token in localStorage
    localStorage.setItem("Current User", token);

    router.reload();
  } catch (error) {
    setError("Invalid credentials!");
    console.error("Login error:", error);
  }
};
