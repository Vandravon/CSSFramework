const trigger = document.querySelector('#trigger');
const alert = document.querySelector('.new-alert');

trigger.addEventListener("click", () =>  {
    alert.classList.toggle("inactive");
})