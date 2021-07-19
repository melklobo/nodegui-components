const { WindowType,QIcon} = require("@nodegui/nodegui");
const path = require('path');
module.exports =  {
    icon: (win, pathIcon) => {               
        win.setWindowIcon(new QIcon(path.join(process.cwd(), pathIcon)))
    },
    title: (win, title = "NodeGui Components") => {
        win.setWindowTitle(title)
    },
    
    width: (win, width = 500) => {
        win.resize(width, win.size().height())
    },
    height: (win, height = 500) => {
        win.resize(win.size().width(), height)
    },
    frame: (win, bool = true) => { 
        win.setWindowFlag(WindowType.FramelessWindowHint, !bool);
    },
    sizeFixed: (win, bool = false)=>{
        if(bool)
            win.setFixedSize(win.size().width(),win.size().height())
    },
}