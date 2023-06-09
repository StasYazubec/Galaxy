// Algorithmics
// Пожалуйста, не меняй код ниже. Он необходим для правильной настройки позиционирования элементов :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Код, который нужно исправить
let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['Тарелка', 'Кружка', 'Ракета', 'Марсоход']
for (let i = 0; i < item_name_objects.length; i = 1) {
    item_name_objects[i].innerHTML = item_names[i]
}
