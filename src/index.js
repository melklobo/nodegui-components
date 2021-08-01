/*
Esse framework só foi posível graças ao NodeGui
09/07/2021
Melquizedeque S. Lobo
*/
const Window = require("./components/Window")
const Frame = require("./components/Frame")

/* WINDOW  */
module.exports.window = (...props) => {

    let properties = null;
    let children = null;
    props.forEach((prop) => {
        typeof prop == "object" ? Array.isArray(prop) ? children = prop : properties = prop : typeof props == "string" ? children = prop : null;
    })

  
   return new Window()
        .setProperties(properties)
      .addChildren(children)
        .show()




}

/* FRAME  */

module.exports.frame = (...props) => {

    let properties = null;
    let children = null;
    props.forEach((prop) => {
        typeof prop == "object" ? Array.isArray(prop) ? children = prop : properties = prop : typeof props == "string" ? children = prop : null;
    })

   return new Frame()
        .setProperties(properties)
        .addChildren(children)
       




}