
const { window , frame} = require("./src/index.js");


window({
    title: "melqui",
    width: 500,
    icon: 'icons8-bmo-48.png'

}, [
    frame({ icon: 'icons8-bmo-48.png'})
])