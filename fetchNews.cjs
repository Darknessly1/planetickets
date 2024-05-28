const axios = require('axios');

axios.get('https://newsapi.org/v2/top-headlines', {
  params: {
    country: 'us',
    apiKey: '6d97350387ac4d8f9b6284cf259de288'
  },
  headers: {
    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'Accept': 'application/json, text/plain, */*',
    'Referer': 'http://127.0.0.1:8000/',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
