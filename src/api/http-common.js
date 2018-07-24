import axios from 'axios'

let baseUrl = (process.env.NODE_ENV !== 'development') ? '' : 'http://localhost:8080'

export const HTTP = function(urlFrom, params) {
  let url

  switch (urlFrom) {
    case 'sendForm':
      url = '/static/send.php'
      break
    case 'subscribe':
      url = '/static/subscribe.php'
      break
  }

  return axios.create({
    headers: {
      'Content-type': 'multipart/form-data'
    },
    params
  }).get(`${baseUrl}${url}`)
}
