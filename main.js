document.addEventListener('DOMContentLoaded', () => {

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isThrotlled = false;


    document.addEventListener('mousewheel', (e) => {

        if (isThrotlled) return;
        isThrotlled = true;

        //asynch function
        setTimeout(() => {
            isThrotlled = false;
        }, 1000)

        const direction = e.wheelDelta < 0 ? 1 : -1;

        scroll(direction);

    })

    const scroll = direction => {

        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }

        currentSectionIndex += direction;

        console.log(currentSectionIndex);

        scrollCurrentSection();
    }


    function scrollCurrentSection() {
        sections[currentSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

})