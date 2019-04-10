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
            cont.showPictures(cont.arr)
        })
    }

    showPictures(pic) {
        const slider = document.getElementsByClassName('carousel-inner');

        for(let i = 0; i < pic.length; i++) {
            const slide = document.createElement('div');
            slide.className = 'carousel-item';
            slider[0].appendChild(slide);
        
            const img = document.createElement('img');
            img.src = pic[i].webImage.url;
            img.className = 'd-block img w-100';
            slide.appendChild(img);

            const caption = document.createElement('div');
            caption.className = 'carousel-caption d-none d-md-block';
            slide.appendChild(caption);

            const title = document.createElement('h5');
            title.textContent = pic[i].principalOrFirstMaker;
            caption.appendChild(title);

            const txt = document.createElement('p');
            txt.textContent = pic[i].title;
            caption.appendChild(txt);
        }

        slider[0].firstElementChild.classList.add('active');

        const carousel = document.getElementById('myCarousel');
        carousel.classList.add('my-style');
    }
}

const cont = new Content();

cont.addPictures()