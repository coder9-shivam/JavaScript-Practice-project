const imgLoad = url => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(`Image didn't load succesfully [Error Code: ${request.statusText}]`))
      }
    };
    request.onerror = () => {
      reject(Error('There was a network error'));
    };
    request.send();
  });
}

const imageGoesHere = document.getElementById('imageGoesHere');
const myImage = new Image();

imgLoad('large-image.jpg')
  .then(response => {
    const imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    imageGoesHere.appendChild(myImage);
    alert('Image Loaded: ');
  })
  .catch(error => alert(error));