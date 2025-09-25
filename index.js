// Write your code here!

const main = document.getElementById("main")
const removeMain = document.querySelector("main")
main.remove(removeMain)

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = 'Joshua is the champion'
document.body.append(newHeader)

