// nav

let ele = document.querySelectorAll('.header ul li');
ele.forEach(e => {
    e.addEventListener('click', function(){
        ele.forEach(item => item.classList.remove('active'))

        this.classList.add('active')
    })
})
