const imgContainer = document.querySelector('#image-container');

export default function renderImage(slider) {
  if (imgContainer.firstChild) {
    imgContainer.removeChild(imgContainer.firstChild);
  }
  console.log(1);
  const imgElement = document.createElement('img');
  const imgUrl = slider.imageArray[0];
  imgElement.src = `<%= require(${imgUrl}) %>`;
  imgElement.classList.add('active-img');
  imgContainer.appendChild(imgElement);
}
