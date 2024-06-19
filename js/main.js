addEventListener('DOMContentLoaded', () => {
    animationsTweaks();
    menuToggle();
    searchFormActions();
});

function menuToggle() {
    const mobileMenuBtnToggle = document.querySelector('.menu-toggle');
    const menuContainer = document.querySelector('#sidebar');

    document.addEventListener('click', ({ target }) => {
        if (!target.closest('#sidebar')) {
            menuContainer.classList.remove('active');
        }
    })

    mobileMenuBtnToggle.addEventListener('click', ()=> {
        if (menuContainer.classList.contains('active')) {
            menuContainer.classList.remove('active');
        } else {
            menuContainer.classList.add('active');
        }
    })
}

function animationsTweaks() {
    removeLoader()
    animateTable();
    animateSidebar();

    function removeLoader() {
        document.body.classList.add('loaded');
    }

    function animateSidebar() {
        setTimeout(()=>{
            document.querySelector('.loaded .logo').style.opacity = 1;
            setTimeout(()=> {
                document.querySelector('.nav').style.transform = 'translateX(0)';
                document.querySelector('.nav').style.opacity = 1;
            },250)

            setTimeout(()=> {
                document.querySelector('.user_info').style.opacity = 1;
                document.querySelector('.user_info').style.transform = 'translateX(0)';
            },400)
        },100)
    }

    function animateTable() {
        const isInViewport = (el, partiallyVisible = false) => {
            const { top, left, bottom, right } = el.getBoundingClientRect();
            const { innerHeight, innerWidth } = window;
            return partiallyVisible
                ? ((top > 0 && top < innerHeight) ||
                (bottom > 0 && bottom < innerHeight)) &&
                ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
                : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
        };

        function getTr() {
            document.querySelectorAll('table tr').forEach((item)=> {
                if (isInViewport(item, true)) {
                    item.classList.add('visible')
                } else {
                    item.classList.remove('visible')
                }
            })
        }

        addEventListener("scroll", () => {
            getTr()
        });
        getTr();
    }
}

function searchFormActions() {
    const searchField = document.querySelector('.search_form-input');
    const searchFieldBtn = document.querySelector('.search_form-button');

    searchField.addEventListener('input', (e)=> {
        if (e.target.value.length < 3) {
            searchFieldBtn.disabled = true;
        } else {
            searchFieldBtn.disabled = false;
        }
    })
}