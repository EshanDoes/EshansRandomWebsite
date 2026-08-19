// API code taken from https://www.freecodecamp.org/news/make-api-calls-in-javascript/

// Define the API URL
const pageringApiUrl = 'https://pagering.gideon.sh/api/v1/members';
const hackClubApiUrl = 'https://webring.hackclub.com/members.json';

const requestOptions = {
    method: 'GET'
};

// Make a GET request
fetch(pageringApiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    console.log(data);

    for(let i = 0; i < data.length; i++) {
        let pageringButtonGroup = document.getElementById("pageringButtons");
        let item = data[i];
        pageringButtonGroup.innerHTML += '<img src="'+item.buttonUrl+'" alt="'+item.name+'\'s site" title="'+item.name+'" onclick="openWebsite(\'' + item.url + '\', \'' + item.name + ' (' + item.url + ')\')" />';
        console.log(item);
    };
  })
  .catch(error => {
    console.error('Error:', error);
  });

fetch(hackClubApiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    console.log(data);

    for(let i = 0; i < data.length; i++) {
      let hackClubButtonGroup = document.getElementById("hackClubButtons");
      let item = data[i];
      hackClubButtonGroup.innerHTML += '<a href="#" onclick="openWebsite(\''+item.url+'\')">'+item.member+'</a>';
      console.log(item)
    };
  })
  .catch(error => {
    console.error('Error:', error);
  });

