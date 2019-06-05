import axios from 'axios'

exports.handler = function(event, context, callback) {
  axios.get(`https://www.kmdvalg.dk/fv/2019/scripts/frontpage-topnews.json?_=1559750616954`)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: res.data
      })
    })
    .catch(err => {
      callback({
        statusCode: 408,
        body: err
      }, null)
    })
}
