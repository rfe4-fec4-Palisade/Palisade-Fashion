export default function validateInfo(values) {

  let errors = {}

  if (!values.nickname.trim()) {
    errors.name= 'Nickname required'
  }

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.recommend) {
    errors.recommend = 'This is a required field';
  }

  return errors;
 }
