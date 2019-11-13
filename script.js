const apiReq = 'https://api.giphy.com/v1/gifs/translate?api_key=wa6B2RXvdNETZJaEuR4GwdcGWoOmcoxd&s=';

const container = document.querySelector('.container');
const img = document.createElement('img');



const imgContainer = document.createElement('div')
imgContainer.classList = 'img-Container';
document.body.appendChild(imgContainer);

const input = document.createElement('input')
container.appendChild(input);


const button = document.createElement('button');
button.innerText = 'Click to smile'
button.addEventListener('click', buttonHasClicked);
container.appendChild(button);






function buttonHasClicked() {
  newInput = apiReq + '' +input.value;
  input.value = "";
  fetchGif(newInput);
}


 async function fetchGif(api) {
     const response = await fetch(api);
     const json = await response.json();
     showImg(json);
  }
  




function showImg(json) {
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
      }
    
    img.classList = "";
    img.src =(json.data.images.original.url );
    img.classList = 'show-image'
    imgContainer.appendChild(img);
}

