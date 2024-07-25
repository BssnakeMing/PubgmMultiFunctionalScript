import { Control } from '压枪识别'
import { 配置参数 } from '配置参数'
import { 基础参数 } from '压枪参数';





export class 键位1 {
    start() {
        try {

            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                Start();
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
    if (盒子中 == true) {
        mapi.click(pos2.X,pos2.Y);
        mapi.aimreset(false);
    } else if (附近中 == true) {
        mapi.click(pos1.X,pos1.Y);
        mapi.aimreset(false);
    }
}


function G键拾取() {
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('G');
    var pos2 = mapi.getkeypos('ctrl+k');
    if (盒子中 == true) {
        mapi.click(pos2.X,pos2.Y);
        mapi.aimreset(false);
    } else if (附近中 == true) {
        mapi.click(pos1.X,pos1.Y);
        mapi.aimreset(false);
    }
}


function H键拾取() {
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('H');
    var pos2 = mapi.getkeypos('ctrl+l');
    if (盒子中 == true) {
        mapi.click(pos2.X,pos2.Y);
        mapi.aimreset(false);
    } else if (附近中 == true) {
        mapi.click(pos1.X,pos1.Y);
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
                                let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
                                if (驾驶.X != 0 && 乘坐.Y != 0) {
                                    mapi.click(配置参数.按键_F.驾驶坐标_坐标[0],配置参数.按键_F.驾驶坐标_坐标[1]);
                                    mapi.delay(150)
                                    mapi.aimreset(false);
                                    mapi.directionreset();
                                    mapi.delay(50)
                                    mapi.key('W');
                                    mapi.key('Shift');
                                } else {
                                    if (驾驶.X != 0 && 乘坐.Y == 0) {
                                        mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                        mapi.delay(150)
                                        mapi.aimreset(false);
                                        mapi.directionreset();
                                    } else {
                                        if (驾驶.X == 0 && 乘坐.Y != 0) {
                                            mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                            mapi.delay(150)
                                            mapi.aimreset(false);
                                            mapi.directionreset();
                                        } else {
                                            let 盒子 = mapi.findimage(配置参数.找图设置.盒子[0], 配置参数.找图设置.盒子[1], 配置参数.找图设置.盒子[2], 配置参数.找图设置.盒子[3], 配置参数.找图设置.盒子[4], 配置参数.找图设置.盒子[5]);                            
                                            if (盒子中 == true || 附近中 == true) {
                                                F键拾取();
                                            } else {
                                                if (盒子.X != 0 && 盒子.Y != 0){
                                                    mapi.key('T')
                                                } else {
                                                    let 次元箱 = mapi.findimage(配置参数.找图设置.次元箱[0], 配置参数.找图设置.次元箱[1], 配置参数.找图设置.次元箱[2], 配置参数.找图设置.次元箱[3], 配置参数.找图设置.次元箱[4], 配置参数.找图设置.次元箱[5]);
                                                    if (次元箱.X != 0 && 次元箱.Y != 0) {
                                                        mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                                        mapi.delay(50);
                                                        mapi.shotmode(false);
                                                    } else {
                                                        mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                                                        mapi.delay(150)
                                                        mapi.aimreset(false);
                                                        mapi.key('Shift');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (模式 == '次元模式') {
                mapi.click(配置参数.超体模式.关闭次元箱_坐标[0], 配置参数.超体模式.关闭次元箱_坐标[1]);
                mapi.shotmode(true);
                mapi.delay(150);
                mapi.aimreset(false);
            } else if (模式 == '侦查模式') {
                mapi.click(配置参数.超体模式.退出侦查_坐标[0], 配置参数.超体模式.退出侦查_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
                mapi.directionreset();
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
                    mapi.delay(50)
                    mapi.key('Shift');
                    mapi.key('W');
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
            } else if (模式 == '瞬移模式') {
                mapi.click(配置参数.超体模式.瞬移_坐标[0],配置参数.超体模式.瞬移_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
                mapi.directionreset();
                mapi.key('W');
            } else if (模式 == '轰炸模式') {
                mapi.click(配置参数.超体模式.轰炸_坐标[0],配置参数.超体模式.轰炸_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
                mapi.directionreset();
                mapi.key('W');
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                if (盒子中 == true || 附近中 == true) {
                    G键拾取();
                    
                }
            } else if (模式 == '瞬移模式') {
                mapi.click(配置参数.超体模式.取消瞬移_坐标[0],配置参数.超体模式.取消瞬移_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
                mapi.directionreset();
                mapi.key('W');

            } else if (模式 == '轰炸模式') {
                mapi.click(配置参数.超体模式.取消轰炸_坐标[0],配置参数.超体模式.取消轰炸_坐标[1]);
                mapi.delay(150)
                mapi.aimreset(false);
                mapi.directionreset();
                mapi.key('W');
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
                let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
                if (盒子中 == true || 附近中 == true) {
                    H键拾取();
                } else if (驾驶.X != 0 && 乘坐.Y != 0) {
                    mapi.click(配置参数.基础操作.乘坐坐标_坐标[0],配置参数.基础操作.乘坐坐标_坐标[1]);
                    mapi.delay(150)
                mapi.aimreset(false);
                } else if (驾驶.X == 0 && 乘坐.Y != 0) {
                    mapi.click(配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1]);
                    mapi.delay(150)
                mapi.aimreset(false);
                }
            }





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
            || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式') {
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



function 点击医疗栏() {
    var 医疗栏1 = mapi.findimage(配置参数.找图设置.医疗栏展开[0], 配置参数.找图设置.医疗栏展开[1], 配置参数.找图设置.医疗栏展开[2], 配置参数.找图设置.医疗栏展开[3], 配置参数.找图设置.医疗栏展开[4], 配置参数.找图设置.医疗栏展开[5]);
    var 医疗栏2 = mapi.findimage(配置参数.找图设置.医疗栏收回[0], 配置参数.找图设置.医疗栏收回[1], 配置参数.找图设置.医疗栏收回[2], 配置参数.找图设置.医疗栏收回[3], 配置参数.找图设置.医疗栏收回[4], 配置参数.找图设置.医疗栏收回[5]);
    if (医疗栏1.X != 0 && 医疗栏1.Y != 0) {
        mapi.click(医疗栏1.X, 医疗栏1.Y);
        return '展开医疗栏';
    } else if (医疗栏2.X != 0 && 医疗栏2.Y != 0) {
        
        return '已展开医疗栏';
    }
}


function 使用药物() {
    if (点击医疗栏() == '展开医疗栏') {
        mapi.delay(150);
        let 医疗箱 = mapi.findimage(配置参数.找图设置.医疗箱[0], 配置参数.找图设置.医疗箱[1], 配置参数.找图设置.医疗箱[2], 配置参数.找图设置.医疗箱[3], 配置参数.找图设置.医疗箱[4], 配置参数.找图设置.医疗箱[5]);
        mapi.delay(75);
        if (医疗箱.X != 0) {
            mapi.click(医疗箱.X, 医疗箱.Y);
            mapi.delay(250);
            mapi.key('4')
            
        } else {
            let 急救包 = mapi.findimage(配置参数.找图设置.急救包[0], 配置参数.找图设置.急救包[1], 配置参数.找图设置.急救包[2], 配置参数.找图设置.急救包[3], 配置参数.找图设置.急救包[4], 配置参数.找图设置.急救包[5]);
            if (急救包.X != 0) {
                mapi.click(急救包.X, 急救包.Y);
                mapi.delay(250);
                mapi.key('4')
                
            } else {
                let 绷带 = mapi.findimage(配置参数.找图设置.绷带[0], 配置参数.找图设置.绷带[1], 配置参数.找图设置.绷带[2], 配置参数.找图设置.绷带[3], 配置参数.找图设置.绷带[4], 配置参数.找图设置.绷带[5]);
                if (绷带.X != 0) {
                    mapi.click(绷带.X, 绷带.Y);
                    mapi.delay(250);
                    mapi.key('4')
                    
                }
            }
        } 
    }
}


function 使用能量() {
    if (点击医疗栏() == '展开医疗栏') {
        mapi.delay(150);
        let 能量饮料 = mapi.findimage(配置参数.找图设置.能量饮料[0], 配置参数.找图设置.能量饮料[1], 配置参数.找图设置.能量饮料[2], 配置参数.找图设置.能量饮料[3], 配置参数.找图设置.能量饮料[4], 配置参数.找图设置.能量饮料[5]);
        mapi.delay(75);
        if (能量饮料.X != 0) {
            mapi.click(能量饮料.X, 能量饮料.Y);
            mapi.delay(250);
            mapi.key('4')
            
        } else {
            let 止痛药 = mapi.findimage(配置参数.找图设置.止痛药[0], 配置参数.找图设置.止痛药[1], 配置参数.找图设置.止痛药[2], 配置参数.找图设置.止痛药[3], 配置参数.找图设置.止痛药[4], 配置参数.找图设置.止痛药[5]);
            if (止痛药.X != 0) {
                mapi.click(止痛药.X, 止痛药.Y);
                mapi.delay(250);
                mapi.key('4')
                
            } else {
                let 肾上腺素 = mapi.findimage(配置参数.找图设置.肾上腺素[0], 配置参数.找图设置.肾上腺素[1], 配置参数.找图设置.肾上腺素[2], 配置参数.找图设置.肾上腺素[3], 配置参数.找图设置.肾上腺素[4], 配置参数.找图设置.肾上腺素[5]);
                if (肾上腺素.X != 0) {
                    mapi.click(肾上腺素.X, 肾上腺素.Y);
                    mapi.delay(250);
                    mapi.key('4')
                    
                }
            }
        } 
    }
}









export class 键位7 { 
    start() {
        try {


            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                使用药物();
                
            }





        }
        catch(err){
            logerror(err)
        }
    }
}

export class 键位6 {
    start() {
        try {


            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                使用能量();
            }

        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位SHIFT_G {
    start() {
        try {


            

            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                var 侦查 = mapi.findimage(配置参数.找图设置.侦查[0], 配置参数.找图设置.侦查[1], 配置参数.找图设置.侦查[2], 配置参数.找图设置.侦查[3], 配置参数.找图设置.侦查[4], 配置参数.找图设置.侦查[5]);
                if (侦查.X != 0) {
                    mapi.holdpress();
                    mapi.aimreset(false);
                } else {
                    mapi.holdpress();
                    mapi.aimreset(false);
                }
            }  


        
        }
        catch(err){
            logerror(err)
        }
    }
}


export class 键位SHIFT_H {
    start() {
        try {


            

            var 模式 = mapi.getglobalmap('模式')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' || 模式 == '下落模式' 
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                var 轰炸 = mapi.findimage(配置参数.找图设置.轰炸[0], 配置参数.找图设置.轰炸[1], 配置参数.找图设置.轰炸[2], 配置参数.找图设置.轰炸[3], 配置参数.找图设置.轰炸[4], 配置参数.找图设置.轰炸[5]);
                var 瞬移 = mapi.findimage(配置参数.找图设置.瞬移[0], 配置参数.找图设置.瞬移[1], 配置参数.找图设置.瞬移[2], 配置参数.找图设置.瞬移[3], 配置参数.找图设置.瞬移[4], 配置参数.找图设置.瞬移[5]);
                if (轰炸.X != 0 || 瞬移.X != 0) {
                    mapi.holdpress();
                    mapi.aimreset(false);
                } else {
                    mapi.holdpress();
                    mapi.aimreset(false);
                }
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
            var 当前枪械 = mapi.getglobalmap('当前枪械')
            if (模式 == '基础模式' || 模式 == '地图模式' || 模式 == '跳伞模式' || 模式 == '脱离模式' 
            || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式') {
                mapi.holdpress();
                mapi.aimreset(false);
                if (基础参数.基础设置.是否开启压枪 == true) {
                    mapi.startgunpress();
                }
            } else if (模式 == '驾驶模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.aimreset(false);
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
            || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '侦查模式' || 模式 == '飞机模式') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '驾驶模式' || 模式 == '全局驾驶') {
                mapi.holdpress();
                mapi.aimreset(false);
            } else if (模式 == '背包模式') {
                var 鼠标位置 = mapi.getmousepos();
                var 滑动位置 = [鼠标位置.X + 600, 鼠标位置.Y];
                mapi.slide(鼠标位置.X, 鼠标位置.Y, 滑动位置[0], 滑动位置[1], 1, 2);
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
            
            

            mapi.holdpress();
            mapi.aimreset(false);

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
            || 模式 == '背包模式' || 模式 == '次元模式' || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式') {
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
            || 模式 == '背包模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式') {
                mapi.click();
                mapi.aimreset(false);
            } else if (模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
                mapi.click();
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
    if (调距.X != 0 && 调距.Y != 0) {
        let pos = mapi.getkeypos('滚上');
        mapi.click(pos.X,pos.Y - 100);
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
        mapi.click(pos.X,pos.Y - 100);
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
    mapi.tip(地图按钮)
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
            var pos1 = mapi.getkeypos('F');
            var pos2 = mapi.getkeypos('H');
            var pos3 = mapi.getkeypos('ctrl+G');
            var pos4 = mapi.getkeypos('ctrl+J');
            if (附近中 == true) {
                mapi.slide(pos1.X, pos1.Y, pos2.X, pos2.Y, 10, 15, true);
            } else if (盒子中 == true) {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
            || 模式 == '背包模式' || 模式 == '驾驶模式' || 模式 == '乘坐模式' || 模式 == '游泳模式'|| 模式 == '次元模式'
            || 模式 == '瞬移模式'|| 模式 == '轰炸模式'|| 模式 == '侦查模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
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
