let user_image = document.querySelector('.user-image');
let username = document.querySelector('.fullname');
let postcode = document.querySelector('.username');
let phone = document.querySelector('.user-number');
let adres = document.querySelector('.user-address');


fetch("https://randomuser.me/api/").then(res => {
    console.log(res[0]);
    if(res.status === 200) {
        return res.json();
    }

    return new Error('Error :(');
}).then (data => {
    console.log(data.results[0]);
    user_image.src = data.results[0].picture.large;
    // user-name;
    username.innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
    // user-postcode;
    postcode.innerHTML = data.results[0].login.username;
    // user-phone;
    phone.innerHTML = data.results[0].phone;
    // user-location;
    adres.innerHTML = data.results[0].location.country + "-" + data.results[0].location.city;
})
