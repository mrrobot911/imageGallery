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
const button = document.createElement('button');
button.type = 'submit';
button.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
input.append(button);
searchBlock.addEventListener('submit', e => {
        e.preventDefault();
        input.value !== '' && fetchData(input.value);
});
searchBlock.append(input, button);
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


