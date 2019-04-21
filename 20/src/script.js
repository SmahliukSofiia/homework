import { ImageSlider } from './slider';

function makeRequest (method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        xhr.onload = () => {
            if(xhr.status == 200) {
                const result = JSON.parse(xhr.response);
                resolve(result);
            } else {
                reject(new Error('Image didn\'t load successfully; error code:' + xhr.statusText));
            }
        };

        xhr.onerror = () => {
            reject(new Error('Network Error'));
        };

        xhr.send();
    })
}

class Content {   
    constructor () {
        this.arr = [];
    }

    addPictures() {
        makeRequest('get', 'https://www.rijksmuseum.nl/api/en/collection?key=D4zcnuuQ&ps=100')
        .then(result => {
            cont.arr = cont.arr.concat(result.artObjects);
            return cont.showPictures(cont.arr)
        })
        .then(() => {
            const s = document.getElementById('slider');
            const slider = new ImageSlider(s);
            // const slider = new ImageSlider(s, {
            //     auto: true,
            // });

            slider.nextSlide$.subscribe(slide => {
                console.log('Slide changed', slide);
            })
        })
    }

    showPictures(pic) {
        const slider = document.getElementsByClassName('slider-wrapper');

        for(let i = 0; i < pic.length; i++) {
            const slide = document.createElement('div');
            slide.className = 'slider-wrapper_img';
            slider[0].appendChild(slide);

            const img = document.createElement('img');
            img.src = pic[i].webImage.url;
            img.className = 'image';
            slide.appendChild(img);
        }
    }
}

const cont = new Content();

cont.addPictures()