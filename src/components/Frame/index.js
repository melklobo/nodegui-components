let { QLabel, FlexLayout, QWidget, QPushButton, WidgetEventTypes, QMouseEvent, QPainter, QIcon, QFontDatabase, QFont, QCursor,QSvgWidget ,QPixmap,AlignmentFlag } = require("@nodegui/nodegui");
const path = require('path');
//let  { AccessAlarm, ThreeDRotation } =   require('@material-ui/icons');

module.exports = class {
    constructor() {
        this.context = null; // referência do objeto principal "window"
        this.frame = new QWidget();
        this.toolbar = new QWidget();
        this.icon = new QLabel();
        this.title = new QLabel()
        this.container_titulo = new QWidget();
        this.container = new QWidget();
        this.properties = require("./PropertiesFrame")
        this.ControlButtons = require("./ControlButtons")
        this.mousePositionInitial = { x: 0, y: 0 }

        /* frame é dividido em três partes, corpo, barra de titulo e um conteiner para os filhos */

        this.frame.setObjectName("frame")  // corpo
        this.frame.setLayout(new FlexLayout())

        this.toolbar.setObjectName("frame_toolbar")  // barra de titulos
        this.toolbar.setLayout(new FlexLayout())

        this.container.setObjectName("frame_container")  // conteiner para os filhos
        this.container.setLayout(new FlexLayout())


        this.icon.setLayout(new FlexLayout())
        this.title.setLayout(new FlexLayout())
        this.container_titulo.setLayout(new FlexLayout())
    


        this.icon.setInlineStyle(`
        /*border: 1px solid;*/
      
        margin-right:2px;
        height:27px;
        width:27px;
      
     
        `)



        this.container_titulo.setInlineStyle(`
        display: flex;
        flex-direction: row;     
        height:28px;
        flex-grow: 5;
        margin: 0 2px;
        
        border: 1px solid

        `)



        this.toolbar.setInlineStyle(`
        border: 1px solid;
        height:30px;     
        display: flex;
        flex-direction: row;      
        justify-content: 'space-between'
        
        `)
        this.container.setInlineStyle(`
        border: 1px solid;
        height: 100%;
        flex-grow: 1;
        background: "#ffffff"
        
        `)
        
  
      



        this.container_titulo.layout.addWidget(this.icon)
        this.container_titulo.layout.addWidget(this.title)

        this.toolbar.layout.addWidget(this.container_titulo)
        this.toolbar.layout.addWidget(this.ControlButtons.get())
        this.frame.layout.addWidget(this.toolbar)
        this.frame.layout.addWidget(this.container)
    }

    setContext(context) {


        this.context = context;

        this.context.frame(false)


        this.toolbar.addEventListener(WidgetEventTypes.MouseButtonPress, (nativeEvt) => {
            const mouseEvt = new QMouseEvent(nativeEvt);
            if (mouseEvt.button() == 1) {
                this.mousePositionInitial.y = mouseEvt.y()
                this.mousePositionInitial.x = mouseEvt.x()
            }
        });

        this.toolbar.addEventListener(WidgetEventTypes.MouseMove, (nativeEvt) => {
            const mouseEvt = new QMouseEvent(nativeEvt);

            let y = (this.context.win.pos().y) + (mouseEvt.y() - this.mousePositionInitial.y);
            let x = (this.context.win.pos().x) + (mouseEvt.x() - this.mousePositionInitial.x);

            this.context.win.move(parseInt(x.toFixed(0)), parseInt(y.toFixed(0)))


        });



        return this;
    }
    setProperties(props) {
        let _this = this;

        if (props != null) {

            this.verifyProps(props)
            Object.entries(this.properties).forEach((entrie) => {

                if (Object.keys(props).includes(entrie[0])) {
                    _this.properties[entrie[0]](_this, props[entrie[0]]);  // define as propriedades definida pelo usuario
                } else {
                    _this.properties[entrie[0]](_this); // define as propriedades já predefinida

                }


            })



        }
        return this
    }

    verifyProps(props) {
        Object.keys(props).forEach((prop) => {
            if (!Object.keys(this.properties).includes(prop))
                throw new Error(`Propriedade '${prop}' sem suporte para esta versão ou está incorreta.`);
        })



    }
    addChildren(childrens) {

        return this
    }
    get() {
        return this.frame;
    }
}