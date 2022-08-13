const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahartoli';
placesList.appendChild(li)


const mainContainer = document.getElementById('main-container');


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';

section.appendChild(h1)

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'Birani';
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'burhani';
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'Birani';
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section)


// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1> my dress section </h1>
    
    <ul>
        <li> T-Shirt </li>
        <li> Lungi </li>
        <li> Panjabi</li>
    </ul>

`

mainContainer.appendChild(sectionDress)

document.getElementById('main-container').style.fontSize