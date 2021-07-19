const { QMainWindow, QWidget, FlexLayout , WindowType,QIcon} = require("@nodegui/nodegui");


module.exports = class {
    constructor() {
        this.win = new QMainWindow();
        this.root = new QWidget()     
        this.properties =  require("./PropertiesWindow")


        this.root.setLayout(new FlexLayout())
        this.root.setObjectName("root")
        this.win.setCentralWidget(this.root);
        
    }



    show() {

        this.win.show();
        global.win = this.win;
        return this


    }



    setProperties(props) {
        let _this = this;
        /* if (props !== null)
             Object.keys(props).forEach((prop) => {
                 if(_this.properties[prop] == undefined)
                     throw new Error(`Propriedade ${prop} sem suporte para esta versão.`);
                 else
                     _this.properties[prop](_this.win,props[prop]);
               
                     
             })*/

        if (props !== null) {
          
            this.verifyProps(props)
            Object.entries(this.properties).forEach((entrie) => {
           
                if (Object.keys(props).includes(entrie[0])) {
                    _this.properties[entrie[0]](_this.win, props[entrie[0]]);  // define as propriedades definida pelo usuario
                } else {                    
                    _this.properties[entrie[0]](_this.win); // define as propriedades já predefinida

                }
                

            })
        }



        return this
    }
    verifyProps(props){
        
        Object.keys(props).forEach((prop)=>{
            if(!Object.keys(this.properties).includes(prop))
                throw new Error(`Propriedade '${prop}' sem suporte para esta versão ou está incorreta.`);
        })
        
        
        
    }
    addChildren(childrens) {

        return this
    }
    get() {
        return this.win;
    }


}


