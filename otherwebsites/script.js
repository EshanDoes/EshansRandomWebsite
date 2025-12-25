// API code taken from https://www.freecodecamp.org/news/make-api-calls-in-javascript/

// Define the API URL
const apiUrl = 'https://pagering.gideon.sh/api/v1/members';

const requestOptions = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': 'https://eshandoes.vercel.app'
}
};

// Make a GET request
fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });