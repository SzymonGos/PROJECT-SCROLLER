class Swiper {
    constructor() {
        this.initialY = null;
        this.initialX = null;

        document.addEventListener('touchstart', (event) => this.startTouch(event));
        document.addEventListener('touchmove', (event) => this.moveTouch(event));

        this.event = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch(event) {
        // event.preventDefault();
        this.initialX = event.touches[0].clientX;
        this.initialY = event.touches[0].clientY;
    };

    moveTouch(event) {
        if(!this.initialX || !this.initialY) return;
       
        const currentY = event.touches[0].clientY;
        const currentX = event.touches[0].clientX;

        const diffX = this.initialX - currentX;
        const diffY = this.initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            //axis Y
            if(diffX > 0){
                document.dispatchEvent(this.event.swipeLeft)
            } else {
                document.dispatchEvent(this.event.swipeRight)
            }
        } else {
            //axis Y
            if(diffY > 0){
                document.dispatchEvent(this.event.swipeUp)
            }
            else {
                document.dispatchEvent(this.event.swipeDown)
            }

        }
        this.initialX = null;
        this.initialY = null;
    }
}


new Swiper();