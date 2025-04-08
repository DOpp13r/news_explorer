const authorize = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        resolve({
          token: "a random token",
          user: {
            email: storedUser.email,
            password: storedUser.password,
            username: storedUser.username,
          },
        });
      } else {
        reject("Invalid email or password");
      }
    } else {
      reject("User not found");
    }
  });
};

const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      resolve({
        data: {
          username: storedUser.username,
          email: storedUser.email,
          _id: "id",
        },
      });
    } else {
      reject(new Error("No user found"));
    }
  });
};

const signup = (values) => {
  return new Promise((resolve) => {
    localStorage.setItem("user", JSON.stringify(values));
    resolve({ success: true });
  });
};

export { authorize, checkToken, signup };
