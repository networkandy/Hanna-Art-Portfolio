const current = document.getElementById('current');
const imgs = document.querySelectorAll('.gal-imgs img');
const opacity = 0.4;

//set first image opacity
imgs[0].style.opacity = opacity;

//add click event to each img

imgs.forEach(imgs => imgs.addEventListener('click', changeCurrentImg));

function changeCurrentImg(e){
//resert the opacity
    imgs.forEach(img =>  (img.style.opacity = 1));

    //Chagen image of the src clicked target
    current.src = e.target.src;

    //add fadeIn class
    current.classList.add('fade-in');

    //Remove fade in class after half a second
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //change the opacity of to the variable
    e.target.style.opacity = opacity;
}