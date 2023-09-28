let data = 'anime';
let page = 1;
const apiKey = 'Ps0UKzTKZQbNZI8fCPltSBO5ct9U-svvBmxzQX7BDZ4';
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${data}&client_id=${apiKey}`;

const body = document.querySelector('body');
const header = document.createElement('section');
const elName = document.createElement('h2');
elName.innerHTML = 'My gallery';
const input = document.createElement('input');
header.append(elName,input);
const gallery = document.createElement('div');
gallery.className = 'imageContainer';

async function fetchData(){
    const response = await fetch(url);
    const result = await response.json();
    showData(result.results) 
}
function showData(data){
    data.map(element => {
        const image = document.createElement('img');
        image.src = element.urls.regular;
        image.alt = element.alt_description;
        image.className = 'image';
        gallery.append(image);
    });
}
fetchData();
body.append(header, gallery);



