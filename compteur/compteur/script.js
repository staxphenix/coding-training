const count = document.getElementById("count")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
let countnumber = Number(count.textContent)
const message = document.getElementById("message")


plus.addEventListener("click", function() {
    if (countnumber < 10) {
        countnumber = countnumber + 1
        count.textContent = countnumber
        count.style.color = "white"
        if (countnumber === 10) {
            count.textContent = "🔥 10 🔥"
            count.style.color = "red" }
    }
})

minus.addEventListener("click", function() {
    if (countnumber > 0) {
        countnumber = countnumber -1
        count.textContent = countnumber
        count.style.color = "white"   
    }
    else { message.textContent = "impossibe de descendre plus bas" 
        setTimeout(function() { message.textContent = ""   
}, 2000) }
})

reset.addEventListener("click", function() {
    countnumber = 0
    count.textContent = countnumber
    count.style.color = "white"
})
