const toggles = document.querySelectorAll('.toggle')
const bom = document.querySelector('#bom')
const barato = document.querySelector('#barato')
const rapido = document.querySelector('#rapido')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(bom.checked && barato.checked && rapido.checked) {
        if(bom === theClickedOne) {
            rapido.checked = false
        }

        if(barato === theClickedOne) {
            bom.checked = false
        }

        if(rapido === theClickedOne) {
            barato.checked = false
        }
        
    }
}