let data = 'anime';
let page = 1;
// const apiKey = 'Ps0UKzTKZQbNZI8fCPltSBO5ct9U-svvBmxzQX7BDZ4';
const apiKey = 'ai8aJK-efo0saOGfga1MIjYxIuEhNg7DrOiftfKK3bg';

const body = document.querySelector('body');
const header = document.createElement('section');
header.className = 'header';
const elName = document.createElement('h2');
elName.innerHTML = 'My gallery';
const searchBlock = document.createElement('form');
searchBlock.className = 'searchBlock';
const input = document.createElement('input');
input.type = 'search';
input.autofocus = true;
input.autocomplete = false;
input.placeholder = 'choose image category...'
const buttonSearch = document.createElement('button');
buttonSearch.className = 'searchBtn'
buttonSearch.type = 'submit';
buttonSearch.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const buttonCleare = document.createElement('button');
buttonCleare.className = 'cleareBtn';
buttonCleare.innerHTML = `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
buttonCleare.addEventListener('click', e => {
    input.value = '';
})
input.append(buttonSearch);
searchBlock.addEventListener('submit', e => {
        e.preventDefault();
        input.value !== '' && fetchData(input.value);
});
searchBlock.append(input, buttonSearch, buttonCleare);
header.append(elName,searchBlock);
const gallery = document.createElement('div');
gallery.className = 'galleryContainer';

const footer = document.createElement('div');
footer.className = 'footer';
const author = document.createElement('a');
author.href = 'https://github.com/mrrobot911';
author.target = '_blank';
author.innerText = 'KelWin';
author.className = 'author'
const year = document.createElement('p');
year.innerText = '2023';
const rs = document.createElement('a');
rs.href = 'https://rs.school/js-stage0/';
rs.target = '_blank';
const rsImg = document.createElement('img');
rsImg.src = 'https://rs.school/images/rs_school_js.svg';
rsImg.alt = 'RS School';
rsImg.className = 'rs';
rs.append(rsImg);
footer.append(author, year, rs);

async function fetchData(data){
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${data}&client_id=${apiKey}`;
    const response = await fetch(url);
    const result = await response.json();
    showData(result.results) 
}
function showData(data){
    const arr = []
    data.map(element => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'imageContainer';
        const image = document.createElement('img');
        image.src = element.urls.regular;
        image.alt = element.alt_description;
        image.className = 'image';
        imageContainer.append(image);
        arr.push(imageContainer);
    });
    gallery.replaceChildren(...arr);
    
}
fetchData(data);
body.append(header, gallery, footer);


