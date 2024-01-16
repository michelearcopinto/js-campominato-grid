const difficultySelect = document.getElementById('difficultySelect');
const playButton = document.getElementById('playButton');
const gridHTML = document.getElementById('gridHTML');

document.body.style.backgroundColor = 'aquamarine'


playButton.addEventListener('click', function () {

    gridHTML.innerHTML = '';


    if (difficultySelect.value == 100) {

        document.body.style.backgroundColor = 'aquamarine';

    } else if (difficultySelect.value == 81) {

        document.body.style.backgroundColor = 'orange';

    } else if (difficultySelect.value == 49) {

        document.body.style.backgroundColor = 'coral';
    }

    let box;

    for (let i = 1; i <= difficultySelect.value; i++) {

        box = document.createElement('div');
        box.classList.add('box', 'd-flex', 'justify-content-center', 'align-items-center', 'border', 'border-black', 'fw-bold', 'fs-3');

        if (difficultySelect.value == 100) {

            box.classList.add('easy');

        } else if (difficultySelect.value == 81) {

            box.classList.add('normal');

        } else if (difficultySelect.value == 49) {

            box.classList.add('hard');
        }

        box.addEventListener('click', function () {

            this.classList.toggle('active');
            console.log(this.innerText)
        })

        box.textContent = i;

        gridHTML.append(box);
    }
})