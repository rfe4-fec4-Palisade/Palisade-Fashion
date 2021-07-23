const dateParser = (zuluDate) => {
  let date = new Date(zuluDate)
  let options = {
    year: 'numeric',
    month: 'long',
    day:'numeric'
  }
  let format = new Intl.DateTimeFormat('en-US', options);
  let finalFormat = format.format(date)

  return finalFormat
}


export default dateParser;