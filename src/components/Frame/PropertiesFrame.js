
let { QLabel, QIcon, FlexLayout, QPixmap, AspectRatioMode,AlignmentFlag } = require("@nodegui/nodegui");
const path = require('path');
module.exports = {
    background: (_this, color = "#0288D1") => {
        _this.frame.setInlineStyle(`
        padding: 1px;  
        display: flex;
        flex-grow: 1;     
        border: 1px solid blue;        
        background:${color};
        `)
    },
    icon: (_this, pathIcon) => {
        if (typeof pathIcon == "string") {

            const image = new QPixmap();
       
            image.load(path.join(process.cwd(), pathIcon));
            let image1 = image.scaled(25, 25,)
            _this.icon.setPixmap(image1)
            _this.icon.setAlignment(AlignmentFlag.AlignHCenter)

        }


    },
    title: (_this, title = "NodeGui Components") => {
        _this.title.setInlineStyle(`
            font-family:Arial;
            font-weight: bold;
            color:"#ffffff"
        `)
        _this.title.setText(title)
    }
}