let gangButton = document.getElementById('GangOrBangButton');
let gangImage = document.getElementById('swagImg');

// Рандомные картинки -->

let randomImage1 = "https://i1.sndcdn.com/artworks-Ar7yuJpksh2Pixvw-ZYZp8Q-t500x500.jpg";
let randomImage2 = "https://i.pinimg.com/originals/a5/52/62/a552622daa27cc8bed6ad120a12641f2.jpg";
let randomImage3 = "https://images.genius.com/b820811640183017176682b49b0ce853.300x300x1.jpg";

gangButton.addEventListener("click", gangEvent);
let isGang = 0;

function gangEvent() {
    if (isGang === 0) {
        gangImage.src = randomImage1;
        isGang = 1;
        document.body.style.backgroundColor = '#23CE6B';
        gangButton.innerHTML = 'ITS A GANG!';
    } else if (isGang === 1) {
        gangImage.src = randomImage2;
        document.body.style.backgroundColor = '#54428E';
        gangButton.innerHTML = 'ITS A BAAAAANG!';
        isGang = 2;
    } else if (isGang === 2) {
        gangImage.src = randomImage3;
        gangButton.innerHTML = 'HOLDOOOOOOOOOOOOON!';
        isGang = 0;
        document.body.style.backgroundColor = '#E5B25D';
        let timerId = setInterval(() => {
            if (isGang == 1) {
                clearInterval(timerId);
            }
            if (document.body.style.backgroundColor == 'rgb(229, 178, 93)') {
                document.body.style.backgroundColor = '#00A6FB';
            } else if (document.body.style.backgroundColor == 'rgb(0, 166, 251)') {
                document.body.style.backgroundColor = '#E5B25D';
            }
        }, 120);
    }
}