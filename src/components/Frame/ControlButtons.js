const { QLabel, FlexLayout, QWidget, QPixmap, AlignmentFlag, WidgetEventTypes, QMouseEvent } = require("@nodegui/nodegui");
let { mdiCloseBoxOutline, mdiWindowMaximize, mdiWindowMinimize, mdiFullscreen } = require('@mdi/js')
let svg2img = require('svg2img');
 class ControlButtons {
    constructor() {
        this.context = null;
        this.group = new QWidget();
        this.ButtonFullscreen = new QLabel();
        this.ButtonMinimize = new QLabel();
        this.ButtonMaximize = new QLabel();
        this.ButtonClose = new QLabel();


        this.group.setLayout(new FlexLayout());
        this.group.setObjectName("groupButtons");

        this.ButtonFullscreen.setObjectName("ButttonFullscreen");
        this.ButtonMinimize.setObjectName("ButttonMinimize");
        this.ButtonMaximize.setObjectName("ButttonMaximize");
        this.ButtonClose.setObjectName("ButttonClose");




        this.ButtonFullscreen.addEventListener(WidgetEventTypes.MouseButtonPress, (nativeEvt) => {
            const mouseEvt = new QMouseEvent(nativeEvt);
            if (mouseEvt.button() == 1)
                win.showFullScreen()

        });

        this.ButtonMinimize.addEventListener(WidgetEventTypes.MouseButtonPress, (nativeEvt) => {
            const mouseEvt = new QMouseEvent(nativeEvt);
            if (mouseEvt.button() == 1)
                win.showMinimized()

        });
        let _this = this
        this.ButtonMaximize.addEventListener(WidgetEventTypes.MouseButtonRelease, (nativeEvt) => {
            const mouseEvt = new QMouseEvent(nativeEvt);
            if (mouseEvt.button() == 1){              
                win.showMaximized();
                win.center();
            }
                

        });

        this.ButtonClose.addEventListener(WidgetEventTypes.MouseButtonPress, (nativeEvt) => {
            const mouseEvt = new QMouseEvent(nativeEvt);
            if (mouseEvt.button() == 1)
                win.close()

        });





        this.group.setStyleSheet(`

        #groupButtons{
            
            height:30px;
            width:90px;
            display: flex;        
            flex-grow: 1;
            justify-content: 'flex-end';
            flex-direction: row;    
        }
        #ButttonFullscreen, #ButttonMinimize, #ButttonMaximize, #ButttonClose{
           
            padding: 2px;
            display:flex;
        }
        #ButttonFullscreen:hover, #ButttonMinimize:hover, #ButttonMaximize:hover, #ButttonClose:hover{
            background: rgba(255,255,255,0.3);
        }
        `)

        svg2img(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7f7f7" d="${mdiFullscreen}" /></svg>`, (error, buffer) => {

            let image = new QPixmap();
            image.loadFromData(buffer)
            this.ButtonFullscreen.setPixmap(image)
            this.ButtonFullscreen.setAlignment(AlignmentFlag.AlignHCenter)

        })

        svg2img(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7f7f7" d="${mdiWindowMinimize}" /></svg>`, (error, buffer) => {

            let image = new QPixmap();
            image.loadFromData(buffer)
            this.ButtonMinimize.setPixmap(image)
            this.ButtonMinimize.setAlignment(AlignmentFlag.AlignHCenter)

        })
        svg2img(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7f7f7" d="${mdiWindowMaximize}" /></svg>`, (error, buffer) => {

            let image = new QPixmap();
            image.loadFromData(buffer)
            this.ButtonMaximize.setPixmap(image)
            this.ButtonMaximize.setAlignment(AlignmentFlag.AlignHCenter)

        })
        svg2img(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7f7f7" d="${mdiCloseBoxOutline}" /></svg>`, (error, buffer) => {

            let image = new QPixmap();
            image.loadFromData(buffer)
            this.ButtonClose.setPixmap(image)
            this.ButtonClose.setAlignment(AlignmentFlag.AlignHCenter)

        })


        this.group.layout.addWidget(this.ButtonFullscreen)
        this.group.layout.addWidget(this.ButtonMinimize)
        this.group.layout.addWidget(this.ButtonMaximize)
        this.group.layout.addWidget(this.ButtonClose)

    }


    get(){
        return this.group;
    }
}

module.exports = new ControlButtons();