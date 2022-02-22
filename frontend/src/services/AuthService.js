export function dLogin(email, password) {
  return new Promise((response, reject) => {
    if (email === "mauro@gmail.com" && password === "1234") {
      response(true);
    }
    reject(`Invalid user and/or password!`);
  });
}

export function dLogout() {

}
