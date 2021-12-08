function signIn(e, form) {
  e.preventDefault();
  // const { username, password } = form;
  console.log('E: ', e)
  var data = {
    username: form.username.value,
    password: form.password.value
  };
  // use fetch get to sign in
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    console.log('RES: ', res)
    if (res.success) {
      window.location.href = '/';
    } else {
      alert('Invalid username or password');
    }
  })
}
// export signIn function
export default signIn;