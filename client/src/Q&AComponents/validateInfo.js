export default function validateInfo(values) {

  // console.log(values);
  let errors = {}

  if (!values.name.trim()) {
    errors.name= 'Nickname required'
  }

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.body.trim()) {
    errors.body = 'A question is required';
  }

  // if (!values.password2) {
  //   errors.password2 = 'Password is required';
  // } else if (values.password2 !== values.password) {
  //   errors.password2 = 'Passwords do not match';
  // }
  return errors;

}