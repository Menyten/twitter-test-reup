/* https://developer.twitter.com/en/docs/basics/authentication/overview/application-only */

const consumerApiKey = '';
const consumerApiSecretKey = '';
const bearerToken = '';
const base64Encoded = '';

const accessToken = '';
const baseUrl = 'https://api.twitter.com/1.1/search/tweets.json';

let tweets = []

document.querySelector('.search').addEventListener('click', async e => {
  e.preventDefault();

  document.querySelector('#container').innerHTML = '';

  const input = document.querySelector('.input');
  const radio = document.querySelector('input[name="result-type"]:checked').value;
  console.log(input.value);
  console.log(radio);
  const url = `${baseUrl}?q=${encodeURIComponent(input.value)}&result_type=${radio}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${accessToken}`
    }
  });
  const json = await response.json();

  console.log('reponse', json);
  tweets = [...json.statuses];
  console.log('tweets', tweets);
  console.log(twttr.widgets.createTweet);


  tweets.forEach(tweet => {
    console.log(tweet.id);
    twttr.widgets.createTweet(tweet.id_str, document.querySelector('#container'))
      .then(el => console.log('Tweet plz show!', el))
  });
});
