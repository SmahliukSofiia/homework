class Request {
    get(url, cb) {
        const xhr = new XMLHttpRequest();

        xhr.open('get', url, true);
        xhr.addEventListener('load', function(e) {
            const result = JSON.parse(e.target.response);
            console.log(result);
            cb(result);
        });
        xhr.send();
    }
}

const request = new Request();

class Content {   
    constructor () {
        this.p = 1;
        this.arr = [];
    }

    collectData(url, p) {
        request.get(url + '&p=' + p, function getPictures(result) {
            const pic = result.artObjects;
            cont.arr = cont.arr.concat(result);
            cont.showPictures(pic);
        })
    }

    showPictures(pic) {
        const slider = document.getElementsByClassName('carousel-inner');
        slider.className += 'picture';

        for (let i = 0; i < pic.length; i++) {

            const slide = document.createElement('div');
            slide.className = 'carousel-item active';
            slider[0].appendChild(slide);
            
            const img = document.createElement('img');
            img.src = pic[i].webImage.url;
            img.className = 'd-block w-100';
            slide.appendChild(img);
        }

        // document.body.appendChild(section);
    }

    removeContent() {
        const active = document.querySelector('carousel-inner');
        if (div) {
            div.remove();
        }
    }
}

const cont = new Content();

const myBtnN = document.createElement('button');
myBtnN.textContent = 'Next';
document.body.after(myBtnN);

myBtnN.addEventListener('click', function() {
    if(cont.p <= 9) {
        if (cont.arr.length < cont.p) {
            cont.collectData('https://www.rijksmuseum.nl/api/en/collection?key=D4zcnuuQ&ps=1', cont.p);
        } else {
            pic = cont.arr[cont.p - 1].artObjects;
            cont.showPictures(pic)
        }
        ++cont.p;
        cont.removeContent();
    }
})
 
// cont.collectData('https://www.rijksmuseum.nl/api/en/collection?key=D4zcnuuQ&ps=10', 2)