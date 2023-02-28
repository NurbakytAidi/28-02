const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1

const dannye = direction => {
    if (direction === "next") {
        count++
    } else if (direction === "prev" && count > 1) {
        count--
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
        `
            block.innerHTML = ''
            block.append(div)
        })
}

btnNext.onclick = () => {
    dannye("next")
}

btnPrev.onclick = () => {
    dannye("prev")
}

// DZ-2

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}).then((response) => response.json()
    ).then((data) => {
    data.forEach(item => console.log(item))
})






