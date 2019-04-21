class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(cb) {
        this.observers.push(cb);
        return () => {
            this.observers.splice(this.observers.findIndex(obs => obs === cb), 1);
        }
    }
    next(value) {
        this.observers.forEach(cb => cb(value));
    }
}


export class ImageSlider {

    constructor(sliderBlock, options = {}) {
        this.sliderBlock = sliderBlock;
        this.wraper = this.sliderBlock.firstElementChild;
        this.arrows = this.sliderBlock.getElementsByClassName('arrow');
        this.elements = this.wraper.children;
        this.prevButton = this.arrows[0];
        this.nextButton = this.arrows[1];
        this.auto = options.auto;
        this.timer = null;
        this.nextSlide$ = new Observable();
        this.init();
    }

    init() {
        this.width = this.sliderBlock.clientWidth;
        this.index = 0;
        this.recalc(); 
        this.move();
        this.prevButton.addEventListener('click', () => {
            this.prev();
        });
        this.nextButton.addEventListener('click', () => {
            this.next();
        })

        if(this.auto) {
            this.startTimer();
        }

        this.prevButton.disabled = true;
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.next();
        }, 2000)
    }

    next() {
        if(this.index === this.elements.length - 1) {return};
        this.index++;
        this.move();
        this.checkOverflow();
        this.nextSlide$.next(this.index);
    }

    prev() {
        if(!this.index) {return};
        this.index--;
        this.move();
        this.checkOverflow();
    }

    recalc() {
        this.wraper.style.width = this.elements.length * this.width + 'px';
        Array.prototype.forEach.call(this.elements, el => el.style.width = this.width + 'px');
    }

    move() {
        this.wraper.style.transform = 'translateX(' + (-this.index * this.width) + 'px)';
    }

    checkOverflow() {
        this.prevButton.disabled = false;
        this.nextButton.disabled = false;
        if(this.index === 0 ){
            this.prevButton.disabled = true;
        }

        if(this.index === this.elements.length - 1) {
            this.nextButton.disabled = true;
        }
    }
}
