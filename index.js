const developers = [
    {
        name: "Leanne Graham",
        age: 18,
        type: 'frontend',
        src: './icons/user6.png',
        mainLanguage: 'React.js',
        imgSrc: './icons/react.png'
    },
    {
        name: "Ervin Howell",
        age: 35,
        type: 'frontend',
        src: './icons/user5.png',
        mainLanguage: 'React.js',
        imgSrc: './icons/react.png'

    },
    {
        name: "Clementine Bauch",
        age: 26,
        type: 'backend',
        src: './icons/user1.png',
        mainLanguage: 'Node.js',
        imgSrc: './icons/node.png'


    },
    {
        name: "Patricia Lebsack",
        age: 38,
        type: 'frontend',
        src: './icons/user2.png',
        mainLanguage: 'Vue.js',
        imgSrc: './icons/vue.png'

    },
    {
        name: "Chelsey Dietrich",
        age: 20,
        type: 'backend',
        src: './icons/user3.png',
        mainLanguage: 'Java',
        imgSrc: './icons/java.png'

    },
    {
        name: "Kurtis Weissnat",
        age: 26,
        type: 'frontend',
        src: './icons/user4.png',
        mainLanguage: 'Angular.js',
        imgSrc: './icons/angular.png'

    },

];

let tbody = document.querySelector('tbody');
const filterBtn = document.querySelectorAll('.filterBtn');
const filterAge = document.querySelectorAll('.filterAge');
const select = document.querySelectorAll('.filterContainer')


//DRAW A TABLE
function drawTable(developers) {
    for (let obj of developers) {
        let row = tbody.insertRow();
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let img = document.createElement('img')
        let langImg = document.createElement('img')

        //add image of developers
        img.classList.add('devImg')
        img.src = obj.src
        cell0.appendChild(img)

        cell1.textContent = obj.name;
        cell2.textContent = obj.age;
        cell3.textContent = obj.type;
        cell4.textContent = obj.mainLanguage;

        // add language Icon
        langImg.classList.add('langImg')
        langImg.src = obj.imgSrc
        cell4.append(langImg)
    }

}

filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        filterTable(btn.textContent)
    })
})


function filterTable(type) {
    tbody.innerHTML = '';
    let filteredDevs = developers.filter(item => item.type === type || item.mainLanguage === type)
    drawTable(filteredDevs);
}




//FILTER WITH AGE
function filterWithAge(id) {
    tbody.innerHTML = '';
    if (id === 1) {
        let filteredDevs = developers.filter(item => item.age >= 18 && item.age < 25)
        drawTable(filteredDevs);
    } else if (id === 2) {
        let filteredDevs = developers.filter(item => item.age > 25 && item.age < 30)
        drawTable(filteredDevs);
    } else if (id === 3) {
        let filteredDevs = developers.filter(item => item.age > 30)
        drawTable(filteredDevs);
    }
}

filterAge.forEach(btn => {
    btn.addEventListener('click', () => {
        filterWithAge(+btn.id)
    })
})

//open select box

select.forEach(sel => {
    sel.addEventListener('mouseover', ()=> {
        sel.classList.add('show')
    })
    sel.addEventListener('mouseout', ()=> {
        sel.classList.remove('show')
    })
})


drawTable(developers);








