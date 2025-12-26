// API code taken from https://www.freecodecamp.org/news/make-api-calls-in-javascript/

// Define the API URL
const apiUrl = 'https://pagering.gideon.sh/api/v1/members';

const requestOptions = {
    method: 'GET'
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

    for(let i = 0; i < data.length; i++) {
        let buttonGroup = document.getElementById("miniButtons");
        let item = data[i];
        buttonGroup.innerHTML += '<a href="'+item.url+'"><img src="'+item.buttonUrl+'" alt="'+item.id+'" title="'+item.name+'" /></a>';
        console.log(item);
    };
  })
  .catch(error => {
    console.error('Error:', error);
  });

