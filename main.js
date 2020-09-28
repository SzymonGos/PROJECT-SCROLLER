
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is Ready!')

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');

   
    document.addEventListener('mousewheel', (e) => {
       console.log( e.wheelDelta);
    })

})