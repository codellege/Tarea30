let inA = document.getElementById('txtfieldA');
let inB = document.getElementById('txtfieldB');
let mainBtn = document.getElementById('button');
let mainList = document.getElementById('list');

let mainArray = []
let arraySize = 0
let i = 0
let text = `<li class="list-group-item active">Repeating list</li> 
<li class="list-group-item">Enter list size</li>
<li class="list-group-item">Enter numbers</li>`

appEvents()

function appEvents() {
    window.addEventListener('load', initApp)
    inA.addEventListener('keypress', showInput)
    inB.addEventListener('keypress', initArray)
    mainBtn.addEventListener('click', initSearch)

    mainList.innerHTML = text

}

function initApp() {

    inB.setAttribute('hidden', 'true')
}

function showInput(e) {

    if (e.key == 'Enter' &&
        e.target.value != '' &&
        !isNaN(e.target.value)) {

        arraySize = Number(e.target.value);
        inA.setAttribute('readonly', 'true')
        inB.removeAttribute('hidden')
        inB.focus()
    }
}

function initArray(e) {

    if (e.key == 'Enter' &&
        e.target.value != '' &&
        !isNaN(e.target.value)) {


        let key = inB.value
        if (mainArray[key] == null) {
            mainArray[key] = 1
        } else {
            mainArray[key] += 1
        }

        inB.value = ''
        i++

        if (i == arraySize) {

            inB.setAttribute('readonly', 'true')
            initSearch()
        }
    }
}

function initSearch() {

    let text = '<li class="list-group-item active">Repeating list</li>'
    mainArray.forEach(function (value, index) {

        if (value != null &&
            value != 0) {
            text += `<li class="list-group-item">
                Number: ${index}  Repeats: ${value} times
                </li>`
        }
    })

    mainList.innerHTML = text
}