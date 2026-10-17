import { Control } from '压枪识别'
import { 配置参数 } from '配置参数'
import { 基础参数 } from '压枪参数';





export class 键位1 {
    start() {
        try {

            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式' || 模式 == '全局驾驶') {
                mapi.click();
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位2 {
    start() {
        try {
            
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click();
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位3 {
    start() {
        try {

            
            
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click();
                mapi.aimreset(false);
            }


        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位4 {
    start() {
        try {


            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click();
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

function Start() {
    mapi.click(配置参数.切换枪械.一号切换射击模式_坐标[0],配置参数.切换枪械.一号切换射击模式_坐标[1]);
    mapi.click(配置参数.切换枪械.二号切换射击模式_坐标[0],配置参数.切换枪械.二号切换射击模式_坐标[1]);
    mapi.delay(50);
}



export class 键位B {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click(1514, 2139);
                mapi.click(1852, 2139)
                mapi.aimreset(false);
            }

        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位Q {
    start() {
        try {
            

            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.aimreset(false);
            }




        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位E {
    start() {
        try {



            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.aimreset(false);
            }





        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位V {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click();
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位T {
    start() {
        try {

            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
            var pos1 = mapi.getkeypos('T');
            var pos2 = mapi.getkeypos('N');
            var 盒子 = mapi.findimage(配置参数.找图设置.盒子[0], 配置参数.找图设置.盒子[1], 配置参数.找图设置.盒子[2], 配置参数.找图设置.盒子[3], 配置参数.找图设置.盒子[4], 配置参数.找图设置.盒子[5]);
            var 附近 = mapi.findimage(配置参数.找图设置.附近[0], 配置参数.找图设置.附近[1], 配置参数.找图设置.附近[2], 配置参数.找图设置.附近[3], 配置参数.找图设置.附近[4], 配置参数.找图设置.附近[5]);


            if (模式 == '基础模式' || 模式 == '游泳模式') {
                if (盒子中 == true && 附近.X != 0 && 附近.Y != 0) {
                    
                    mapi.click(pos2.X,pos2.Y);
                    mapi.aimreset(false);
                    mapi.setglobalmap('是否打开盒子', false);
                } else if (盒子中 == true && 附近.X == 0) {
                   
                    mapi.click(pos1.X,pos1.Y); 
                    mapi.aimreset(false);
                    mapi.setglobalmap('是否打开盒子', false);
                } else if (附近中 == true && 盒子.X != 0 && 盒子.Y != 0) {
                    
                    if (配置参数.控制调整.打开盒子是否弹出鼠标 == true) {
                        mapi.click(pos1.X,pos1.Y);
                        mapi.delay(50);
                        mapi.shotmode(false);
                        mapi.setglobalmap('是否弹出鼠标', true);
                        mapi.setglobalmap('是否打开盒子', true);
                    } else {
                        mapi.click(pos1.X,pos1.Y); 
                        mapi.aimreset(false);
                        mapi.setglobalmap('是否打开盒子', true);
                    }
                } else if (附近中 == true && 盒子.X == 0 && 盒子.Y == 0) {
                   
                    mapi.click(pos2.X,pos2.Y);
                    mapi.aimreset(false);
                } else if (盒子中 == false && 附近中 == false && 盒子.X != 0) {

                    if (配置参数.控制调整.打开盒子是否弹出鼠标 == true) {
                        
                        mapi.click(pos1.X,pos1.Y);
                        mapi.delay(150)
                        mapi.aimreset(false);
                        mapi.delay(50);
                        mapi.shotmode(false);
                        mapi.setglobalmap('是否弹出鼠标', true);
                        mapi.setglobalmap('是否打开盒子', true);
                    } else {
                        
                        mapi.click(pos1.X,pos1.Y);
                        mapi.delay(150)
                        mapi.aimreset(false);
                        mapi.setglobalmap('是否打开盒子', true);
                    }
                } else if (盒子中 == false && 附近中 == false && 附近.X != 0 && 附近.Y != 0) {
                    mapi.click(pos2.X,pos2.Y);
                    mapi.delay(150)
                    mapi.aimreset(false);
                    mapi.setglobalmap('是否打开盒子', false);
                }
            }


        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位N {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
            var pos1 = mapi.getkeypos('T');
            var pos2 = mapi.getkeypos('N');
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                if (盒子中 == true) {
                    mapi.click(pos1.X,pos1.Y);
                    mapi.aimreset(false);
                    mapi.setglobalmap('是否打开盒子', false);
                } else if (附近中 == true) {
                    mapi.click(pos2.X,pos2.Y);
                    mapi.aimreset(false);
                }
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


function F键拾取() {
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('F');
    var pos2 = mapi.getkeypos('ctrl+j');

    if (附近中 == true) {
        
        mapi.click(pos1.X,pos1.Y);
        mapi.aimreset(false);
    }
    else {
        mapi.click(pos2.X,pos2.Y);
        mapi.aimreset(false);
    }  
}


function G键拾取() {
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('G');
    var pos2 = mapi.getkeypos('ctrl+k');
    if (附近中 == true) {
        mapi.click(pos1.X,pos1.Y);
        mapi.aimreset(false);
    }
    else{
        mapi.click(pos2.X,pos2.Y);
        mapi.aimreset(false);
    } 
}


function H键拾取() {
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('H');
    var pos2 = mapi.getkeypos('ctrl+l');
    if (附近中 == true) {
        mapi.click(pos1.X,pos1.Y);
        mapi.aimreset(false);
    }else{
        mapi.click(pos2.X,pos2.Y);
        mapi.aimreset(false);
    }  
}




export class 键位F {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
 
            if (模式 == '基础模式') {
                
                let 取消投掷 = mapi.findimage(配置参数.找图设置.取消投掷[0], 配置参数.找图设置.取消投掷[1], 配置参数.找图设置.取消投掷[2], 配置参数.找图设置.取消投掷[3], 配置参数.找图设置.取消投掷[4], 配置参数.找图设置.取消投掷[5]);

                if (取消投掷.X != 0) {
                    mapi.click(配置参数.按键_F.取消投掷坐标_坐标[0],配置参数.按键_F.取消投掷坐标_坐标[1]);
                    mapi.aimreset(false);
                } else {
                    let 取消 = mapi.findimage(配置参数.找图设置.取消[0], 配置参数.找图设置.取消[1], 配置参数.找图设置.取消[2], 配置参数.找图设置.取消[3], 配置参数.找图设置.取消[4], 配置参数.找图设置.取消[5]);
                    if (取消.X != 0) {
                        mapi.click(配置参数.按键_F.取消坐标_坐标[0],配置参数.按键_F.取消坐标_坐标[1]);
                        mapi.aimreset(false);
                    } else {
                        let 救人 = mapi.findimage(配置参数.找图设置.救人[0], 配置参数.找图设置.救人[1], 配置参数.找图设置.救人[2], 配置参数.找图设置.救人[3], 配置参数.找图设置.救人[4], 配置参数.找图设置.救人[5]);
                        if (救人.X != 0) {
                            mapi.click(配置参数.按键_F.救人坐标_坐标[0],配置参数.按键_F.救人坐标_坐标[1]);
                            mapi.aimreset(false);
                        } else {
                            let 开门 = mapi.findimage(配置参数.找图设置.开门[0], 配置参数.找图设置.开门[1], 配置参数.找图设置.开门[2], 配置参数.找图设置.开门[3], 配置参数.找图设置.开门[4], 配置参数.找图设置.开门[5]);
                            let 关门 = mapi.findimage(配置参数.找图设置.关门[0], 配置参数.找图设置.关门[1], 配置参数.找图设置.关门[2], 配置参数.找图设置.关门[3], 配置参数.找图设置.关门[4], 配置参数.找图设置.关门[5]);            
                            if (开门.X != 0 || 关门.Y != 0) {
                                mapi.click(配置参数.按键_F.门坐标_坐标[0],配置参数.按键_F.门坐标_坐标[1]);
                                mapi.aimreset(false);
                            } else {
                                let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
                                let 驾驶1 = mapi.findimage(配置参数.找图设置.驾驶1[0], 配置参数.找图设置.驾驶1[1], 配置参数.找图设置.驾驶1[2], 配置参数.找图设置.驾驶1[3], 配置参数.找图设置.驾驶1[4], 配置参数.找图设置.驾驶1[5]);
                                let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
                                //mapi.tip(乘坐)
                                if ((驾驶.X != 0 || 驾驶1.X != 0)  && 乘坐.Y != 0) {
                                    mapi.click(配置参数.按键_F.驾驶坐标_坐标[0],配置参数.按键_F.驾驶坐标_坐标[1]);
                                    mapi.delay(50)
                                    mapi.aimreset(false);
                                    mapi.directionreset();
                                    mapi.delay(50)
                                    mapi.key('W');
                                    mapi.key('Shift');
                                } else {
                                    if ((驾驶.X != 0 || 驾驶1.X != 0) && 乘坐.Y == 0) {
                                        mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                        mapi.delay(50)
                                        mapi.aimreset(false);
                                        mapi.directionreset();
                                    } else {
                                        if (驾驶.X == 0 && 驾驶1.X == 0 && 乘坐.Y != 0) {
                                            mapi.click(配置参数.按键_F.驾驶坐标_坐标[0],配置参数.按键_F.驾驶坐标_坐标[1]);
                                            //mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                            mapi.delay(50)
                                            mapi.aimreset(false);
                                            mapi.directionreset();
                                        } else {
                                        
                                            if (盒子中 == true || 附近中 == true) {
                                                F键拾取();
                                            } 
                                            else {
                                                let 盒子 = mapi.findimage(配置参数.找图设置.盒子[0], 配置参数.找图设置.盒子[1], 配置参数.找图设置.盒子[2], 配置参数.找图设置.盒子[3], 配置参数.找图设置.盒子[4], 配置参数.找图设置.盒子[5]); 
                                                if (盒子.X != 0 && 盒子.Y != 0){
                                                    mapi.key('T')
                                                } else
                                                {
                                                    mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                let 取消投掷 = mapi.findimage(配置参数.找图设置.取消投掷[0], 配置参数.找图设置.取消投掷[1], 配置参数.找图设置.取消投掷[2], 配置参数.找图设置.取消投掷[3], 配置参数.找图设置.取消投掷[4], 配置参数.找图设置.取消投掷[5]);
                let 取消 = mapi.findimage(配置参数.找图设置.取消[0], 配置参数.找图设置.取消[1], 配置参数.找图设置.取消[2], 配置参数.找图设置.取消[3], 配置参数.找图设置.取消[4], 配置参数.找图设置.取消[5]);
                
                if (取消投掷.X != 0) {
                    mapi.click(配置参数.按键_F.取消投掷坐标_坐标[0],配置参数.按键_F.取消投掷坐标_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                } else if (取消.X != 0) {
                    mapi.click(配置参数.按键_F.取消坐标_坐标[0],配置参数.按键_F.取消坐标_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                } else {
                    mapi.click(配置参数.按键_F.下车_坐标[0],配置参数.按键_F.下车_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                    mapi.directionreset();
                }
            } else if (模式 == '游泳模式') {
                let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
                let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
                if (附近中 == true || 盒子中 == true) {
                    F键拾取();
                }else if (驾驶.X != 0 && 乘坐.Y != 0) {
                    mapi.click(配置参数.按键_F.驾驶坐标_坐标[0],配置参数.按键_F.驾驶坐标_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                    mapi.directionreset();
                    mapi.key('W');
                } else if (驾驶.X != 0 && 乘坐.Y == 0) {
                    mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                    mapi.directionreset();
                    mapi.key('W');
                } else if (驾驶.X == 0 && 乘坐.Y != 0) {
                    mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                    mapi.directionreset();
                    mapi.key('W');
                } else {
                    mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                    mapi.delay(150)
                    mapi.aimreset(false);
                }
            } else if (模式 == '跳伞模式') {
                mapi.click(配置参数.按键_F.跳伞坐标_坐标[0],配置参数.按键_F.跳伞坐标_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
            } else if (模式 == '下落模式') {
                mapi.click(配置参数.按键_F.开伞坐标_坐标[0],配置参数.按键_F.开伞坐标_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
            } else if (模式 == '脱离模式') {
                mapi.click(配置参数.按键_F.跳伞坐标_坐标[0],配置参数.按键_F.跳伞坐标_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
            }   
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位G {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
            
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                if (盒子中 == true || 附近中 == true) {
                    
                    G键拾取();
                }else{
                    let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
                    let 驾驶1 = mapi.findimage(配置参数.找图设置.驾驶1[0], 配置参数.找图设置.驾驶1[1], 配置参数.找图设置.驾驶1[2], 配置参数.找图设置.驾驶1[3], 配置参数.找图设置.驾驶1[4], 配置参数.找图设置.驾驶1[5]);
                    let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);

                    if ((驾驶.X != 0 || 驾驶1.X !=0) && 乘坐.Y != 0) {
                        
                        mapi.click(配置参数.基础操作.乘坐坐标_坐标[0],配置参数.基础操作.乘坐坐标_坐标[1]);
                        mapi.delay(150)
                        mapi.aimreset(false);
                    } else if ((驾驶.X == 0 && 驾驶1.X ==0) && 乘坐.Y != 0) {
                        
                        mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                        mapi.delay(150)
                        mapi.aimreset(false);
                    }
                }
            } 
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位H {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
           
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                // let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
                // let 驾驶1 = mapi.findimage(配置参数.找图设置.驾驶1[0], 配置参数.找图设置.驾驶1[1], 配置参数.找图设置.驾驶1[2], 配置参数.找图设置.驾驶1[3], 配置参数.找图设置.驾驶1[4], 配置参数.找图设置.驾驶1[5]);
                // let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
                
                if (盒子中 == true || 附近中 == true) {
                    H键拾取();
                }
            }
            //     } else if ((驾驶.X != 0 || 驾驶1.X !=0) && 乘坐.Y != 0) {
                    
            //         mapi.click(配置参数.基础操作.乘坐坐标_坐标[0],配置参数.基础操作.乘坐坐标_坐标[1]);
            //         mapi.delay(150)
            //         mapi.aimreset(false);
            //     } else if ((驾驶.X == 0 && 驾驶1.X ==0) && 乘坐.Y != 0) {
                    
            //         mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
            //         mapi.delay(150)
            //         mapi.aimreset(false);
            //     }
            // }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位TAB {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
  
            if (模式 == '基础模式' || 模式 == '游泳模式' || 模式 == '驾驶模式' || 模式 == '次元模式' || 模式 == '乘坐模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                mapi.click();
                mapi.shotmode(false);
            } else if (模式 == '背包模式') {
                mapi.shotmode(true);
                Control.startImageSeek(); 
                mapi.delay(50)
                mapi.click();
            } else if (模式 == '地图模式') {
                mapi.click();
                mapi.shotmode(false);
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位SHIFT {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '游泳模式') {
                mapi.directionrunfast(2);
                
            } else if (模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.delay(150)
                mapi.aimreset(false);

            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位左键 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' 
            || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '飞机模式') {
                mapi.holdpress();
                if (基础参数.基础设置.是否开启压枪 == true) {
                    mapi.startgunpress();
                }
            } else if (模式 == '驾驶模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                
            }
         }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位右键 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')

            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式' || 模式 == '飞机模式') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '驾驶模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '背包模式') {
                var 鼠标位置 = mapi.getmousepos();
                var 滑动位置 = [鼠标位置.X + 600, 鼠标位置.Y];
                mapi.slide(鼠标位置.X, 鼠标位置.Y, 滑动位置[0], 滑动位置[1], 10, 6);
            }

        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位中键 {
    start() {
        try {
            var isClick = mapi.getglobalmap('连点开关');
            mapi.tip(!isClick)
            if (null != isClick) 
            {
                mapi.setglobalmap('连点开关',!isClick);               
            } else {
                mapi.setglobalmap('连点开关',true);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位空格 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var pos = mapi.getkeypos('↑');
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '游泳模式') {
                mapi.holdpress(pos.X,pos.Y);
                mapi.aimreset(false);
            } else if (模式 == '驾驶模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '乘坐模式') {
                mapi.click();
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位C {
    start() {
        try {

            var 模式 = mapi.getglobalmap('模式')
        
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '游泳模式') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.delay(150)
                mapi.aimreset(false);
            }



        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位CTRL {
    start() {
        try {


            var pos = mapi.getkeypos('↓');
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                mapi.holdpress(pos.X,pos.Y);
                mapi.aimreset(false);
            }


        }
        catch(err){
            logerror(err)
        }
    }
}


function 地图() {

    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '地图模式') {
        mapi.click();
        mapi.delay(50);
        mapi.shotmode(true);
        mapi.delay(150);
        mapi.aimreset(false);
    } else {
        mapi.holdpress();
        mapi.delay(50);
        mapi.shotmode(false);
    }
}


export class 键位M {
    start() {
        try {
            地图();
        }
        catch(err){
            logerror(err)
        }
    }
}


function 放大倍镜() {
    var 调距 = mapi.findimage(配置参数.找图设置.调距[0], 配置参数.找图设置.调距[1], 配置参数.找图设置.调距[2], 配置参数.找图设置.调距[3], 配置参数.找图设置.调距[4], 配置参数.找图设置.调距[5]);
    var 调距按钮 = mapi.findimage(配置参数.找图设置.调距关闭按钮[0], 配置参数.找图设置.调距关闭按钮[1], 配置参数.找图设置.调距关闭按钮[2], 配置参数.找图设置.调距关闭按钮[3], 配置参数.找图设置.调距关闭按钮[4], 配置参数.找图设置.调距关闭按钮[5]);
   mapi.tip(调距)
    if (调距.X != 0 && 调距.Y != 0) {
        let pos = mapi.getkeypos('滚上');
        mapi.click(936, 760);
        mapi.delay(100);
        var 调距按钮 = mapi.findimage(配置参数.找图设置.调距关闭按钮[0], 配置参数.找图设置.调距关闭按钮[1], 配置参数.找图设置.调距关闭按钮[2], 配置参数.找图设置.调距关闭按钮[3], 配置参数.找图设置.调距关闭按钮[4], 配置参数.找图设置.调距关闭按钮[5]);
        if (调距按钮.X != 0 && 调距按钮.Y != 0) {
            mapi.delay(50);
            mapi.click();
            mapi.setglobalmap('6倍状态', 6);
        }
    } else if (调距按钮.X != 0 && 调距按钮.Y != 0) {
        mapi.click();
        mapi.setglobalmap('6倍状态', 6);
    }
}




function 缩小倍镜() {
    var 调距 = mapi.findimage(配置参数.找图设置.调距[0], 配置参数.找图设置.调距[1], 配置参数.找图设置.调距[2], 配置参数.找图设置.调距[3], 配置参数.找图设置.调距[4], 配置参数.找图设置.调距[5]);
    var 调距按钮 = mapi.findimage(配置参数.找图设置.调距关闭按钮[0], 配置参数.找图设置.调距关闭按钮[1], 配置参数.找图设置.调距关闭按钮[2], 配置参数.找图设置.调距关闭按钮[3], 配置参数.找图设置.调距关闭按钮[4], 配置参数.找图设置.调距关闭按钮[5]);
    if (调距.X != 0 && 调距.Y != 0) {
        let pos = mapi.getkeypos('滚上');
        mapi.click(936, 760);
        mapi.delay(100);
        var 调距按钮 = mapi.findimage(配置参数.找图设置.调距关闭按钮[0], 配置参数.找图设置.调距关闭按钮[1], 配置参数.找图设置.调距关闭按钮[2], 配置参数.找图设置.调距关闭按钮[3], 配置参数.找图设置.调距关闭按钮[4], 配置参数.找图设置.调距关闭按钮[5]);
        if (调距按钮.X != 0 && 调距按钮.Y != 0) {
            mapi.delay(50);
            mapi.click();
            mapi.setglobalmap('6倍状态', 3);
        }
    } else if (调距按钮.X != 0 && 调距按钮.Y != 0) {
        mapi.click();
        mapi.setglobalmap('6倍状态', 3);
        
    }
}


function 地图滚上() {
    var 地图按钮 = mapi.findimage(配置参数.找图设置.地图按钮[0],配置参数.找图设置.地图按钮[1], 配置参数.找图设置.地图按钮[2],配置参数.找图设置.地图按钮[3], 配置参数.找图设置.地图按钮[4],配置参数.找图设置.地图按钮[5]);
    mapi.click(地图按钮.X, 地图按钮.Y - 100)
}


function 地图滚下() {
    var 地图按钮 = mapi.findimage(配置参数.找图设置.地图按钮[0],配置参数.找图设置.地图按钮[1], 配置参数.找图设置.地图按钮[2],配置参数.找图设置.地图按钮[3], 配置参数.找图设置.地图按钮[4],配置参数.找图设置.地图按钮[5]);
    mapi.click(地图按钮.X, 地图按钮.Y + 100)
}




export class 键位滚上 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
            if (附近中 == true) {
                var pos1 = mapi.getkeypos('F');
                var pos2 = mapi.getkeypos('H');

                mapi.slide(pos1.X, pos1.Y, pos2.X, pos2.Y, 10, 15, true);
            } else if (盒子中 == true) {
                var pos3 = mapi.getkeypos('ctrl+G');
                var pos4 = mapi.getkeypos('ctrl+J');

                mapi.slide(pos4.X, pos4.Y, pos3.X, pos3.Y, 10, 15, true);
            } else if (模式 == '地图模式') {
                地图滚上();
            } else if (模式 == '基础模式' || 模式 == '乘坐模式') {
                放大倍镜();
            } else if (模式 == '背包模式') {
                let 背包模式 = mapi.findimage(配置参数.找图设置.背包模式[0], 配置参数.找图设置.背包模式[1], 配置参数.找图设置.背包模式[2], 配置参数.找图设置.背包模式[3], 配置参数.找图设置.背包模式[4], 配置参数.找图设置.背包模式[5]);
                mapi.slide(背包模式.X - 50, 背包模式.Y - 200, 背包模式.X, 背包模式.Y + 200, 15, 15, true);
            }

        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位滚下 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            var 盒子中 = mapi.getglobalmap('盒子中');
            var 附近中 = mapi.getglobalmap('附近中');
            var pos1 = mapi.getkeypos('F');
            var pos2 = mapi.getkeypos('H');
            var pos3 = mapi.getkeypos('ctrl+G');
            var pos4 = mapi.getkeypos('ctrl+J');
            if (附近中 == true) {
                mapi.slide(pos2.X, pos2.Y, pos1.X, pos1.Y, 10, 15, true);
            } else if (盒子中 == true) {
                mapi.slide(pos3.X, pos3.Y, pos4.X, pos4.Y, 10, 15, true);
            } else if (模式 == '地图模式') {
                地图滚下();
            } else if (模式 == '基础模式' || 模式 == '乘坐模式') {
                缩小倍镜();
            } else if (模式 == '背包模式') {
                let 背包模式 = mapi.findimage(配置参数.找图设置.背包模式[0], 配置参数.找图设置.背包模式[1], 配置参数.找图设置.背包模式[2], 配置参数.找图设置.背包模式[3], 配置参数.找图设置.背包模式[4], 配置参数.找图设置.背包模式[5]);
                mapi.slide(背包模式.X - 50, 背包模式.Y + 200, 背包模式.X, 背包模式.Y - 200, 15, 15, true);
            }

        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位Z {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位R {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位自动奔跑 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '全局驾驶') {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位CTRL_F {
    start() {
        try {
            var 盒子中 = mapi.getglobalmap('盒子中');
            if (盒子中 == true) {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位CTRL_G {
    start() {
        try {
            var 盒子中 = mapi.getglobalmap('盒子中');
            if (盒子中 == true) {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位CTRL_H {
    start() {
        try {

            var 盒子中 = mapi.getglobalmap('盒子中');
            if (盒子中 == true) {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位CTRL_A {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '飞机模式') {
                mapi.holdpress();
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位CTRL_D {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '飞机模式') {
                mapi.holdpress()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位CTRL_C {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '飞机模式') {
                mapi.holdpress()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位CTRL_空格 {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '飞机模式') {
                mapi.holdpress()
                mapi.delay(150)
                mapi.aimreset(false);
            }


        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位CTRL_Q {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '飞机模式') {
                mapi.holdpress();
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位CTRL_E {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '飞机模式') {
                mapi.holdpress();
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位CTRL_T {
    start() {
        try {
            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '乘坐模式') {
                mapi.click()
                mapi.delay(150)
                mapi.aimreset(false);
            }
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位S1 {
    start() {
        try {

            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '乘坐模式') {
                mapi.click(3279, 1702);
                mapi.delay(50)
            
                mapi.click(2992, 2034);
                    mapi.click(3279, 1702);
                mapi.delay(20)
            }
        }
        catch(err){
            logerror(err)
        }
    }
}