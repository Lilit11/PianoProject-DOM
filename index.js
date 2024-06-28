const doSound = new Audio("./audio/do.wav")
const reSound = new Audio("./audio/re.wav")
const miSound = new Audio("./audio/mi.wav")
const faSound = new Audio("./audio/fa.wav")
const solSound = new Audio("./audio/sol.wav")
const lyaSound = new Audio("./audio/lya.wav")
const siSound = new Audio("./audio/si.wav")
const wrong = new Audio("./audio/wrong.mp3")
    

const doSign = document.querySelector("#doSign")
const reSign = document.querySelector("#reSign")
const miSign = document.querySelector("#miSign")
const faSign = document.querySelector("#faSign")
const solSign = document.querySelector("#solSign")
const lyaSign = document.querySelector("#lyaSign")
const siSign = document.querySelector("#siSign")

const doNote = document.querySelector("#doNote")
const reNote = document.querySelector("#reNote")
const miNote = document.querySelector("#miNote")
const faNote = document.querySelector("#faNote")
const solNote = document.querySelector("#solNote")
const lyaNote = document.querySelector("#lyaNote")
const siNote = document.querySelector("#siNote")
const playBtn = document.querySelector("#putAnote")

let notes = [
    { note: doNote, key: "c", sound: doSound, sign: doSign },
    { note: reNote, key: "d", sound: reSound, sign: reSign },
    { note: miNote, key: "e", sound: miSound, sign: miSign },
    { note: faNote, key: "f", sound: faSound, sign: faSign },
    { note: solNote, key: "g", sound: solSound, sign: solSign },
    { note: lyaNote, key: "a", sound: lyaSound, sign: lyaSign },
    { note: siNote, key: "b", sound: siSound, sign: siSign },
]

function grn(start, end) {
    return start + Math.floor(Math.random() * (end - start))
}

playBtn.onclick = () => {
    notes.forEach(elm => {
        elm.sign.style.display = "none"
        elm.note.style.background = "white"
    })
    let temp = grn(0, notes.length)
    notes[temp].sound.play()
    notes[temp].sign.style.display = "block"

    onkeydown = (event) => {
        if (event.key.toLocaleLowerCase() == notes[temp].key) {
            notes[temp].sound.play()
            notes[temp].note.style.background = "green"
        } else {
            let found = notes.find(elm => elm.key == event.key.toLocaleLowerCase())
            if (found) {
                found.sound.play()
                found.note.style.background = "red"
            } else {
               wrong.play()
            }

        }
    };
}







