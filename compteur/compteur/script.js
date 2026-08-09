const count = document.getElementById("count")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
let countnumber = Number(count.textContent)
plus.addEventListener("click", function() {
    if (countnumber < 10) {
        countnumber = countnumber + 1
        count.textContent = countnumber
    }
})

minus.addEventListener("click", function() {
    if (countnumber > 0) {
        countnumber = countnumber -1
        count.textContent = countnumber
    }

})

reset.addEventListener("click", function() {
    countnumber = 0
    count.textContent = countnumber
})