import { 配置参数 } from '配置参数'

function 拾取() {
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('F');
    var pos2 = mapi.getkeypos('G');
    var pos3 = mapi.getkeypos('H');
    var pos4 = mapi.getkeypos('ctrl+j');
    var pos5 = mapi.getkeypos('ctrl+k');
    var pos6 = mapi.getkeypos('ctrl+l');
    if (盒子中 == true) {
        mapi.keyrefresh('F',pos4.X,pos4.Y);
        mapi.keyrefresh('G',pos5.X,pos5.Y);
        mapi.keyrefresh('H',pos6.X,pos6.Y);
    } else if (附近中 == true) {
        mapi.keyrefresh('F',pos1.X,pos1.Y);
        mapi.keyrefresh('G',pos2.X,pos2.Y);
        mapi.keyrefresh('H',pos3.X,pos3.Y);
    }
}



function 键位1() {
    var 模式 = mapi.getglobalmap('模式')
    var pos1 = mapi.getkeypos('1');
    var pos2 = mapi.getkeypos('2');
    var pos3 = mapi.getkeypos('3');
    var pos4 = mapi.getkeypos('B');
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '次元模式' || 模式 == '背包模式') {
        mapi.keyrefresh('1',pos1.X,pos1.Y, 0 ,0);
        mapi.keyrefresh('2',pos2.X,pos2.Y, 0 ,0);
        mapi.keyrefresh('3',pos3.X,pos3.Y, 0 ,0);
        mapi.keyrefresh('B',pos4.X,pos4.Y, 0 ,0);
    } else {
        mapi.keyrefresh('1',5000, 5000, 0 ,0);
        mapi.keyrefresh('2',5000, 5000, 0 ,0);
        mapi.keyrefresh('3',5000, 5000, 0 ,0);
        mapi.keyrefresh('B',5000, 5000, 0 ,0);
    }   
}


function 键位4() {
    var 模式 = mapi.getglobalmap('模式')
    var pos = mapi.getkeypos('4');
    if (模式 == '基础模式' || 模式 == '次元模式' || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '驾船模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('4',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('4',5000, 5000, 0 ,0);
    }
}

function 键位E() {
    var 模式 = mapi.getglobalmap('模式')
    var pos1 = mapi.getkeypos('E');
    var pos2 = mapi.getkeypos('Q');
    if (模式 == '基础模式' || 模式 == '次元模式' || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('E',pos1.X,pos1.Y, 0 ,0);
        mapi.keyrefresh('Q',pos2.X,pos2.Y, 0 ,0);
    } else {
        mapi.keyrefresh('E',5000, 5000, 0 ,0);
        mapi.keyrefresh('Q',5000, 5000, 0 ,0);
    }
}

function 键位V() {
    var 模式 = mapi.getglobalmap('模式')
    var pos = mapi.getkeypos('V');
    if (模式 == '基础模式' || 模式 == '次元模式' || 模式 == '背包模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '游泳模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('V',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('V',5000, 5000, 0 ,0);
    }
}

function 键位T() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('T');
    var pos2 = mapi.getkeypos('N');
    var 盒子 = mapi.findimage(配置参数.找图设置.盒子[0], 配置参数.找图设置.盒子[1], 配置参数.找图设置.盒子[2], 配置参数.找图设置.盒子[3], 配置参数.找图设置.盒子[4], 配置参数.找图设置.盒子[5]);
    var 附近 = mapi.findimage(配置参数.找图设置.附近[0], 配置参数.找图设置.附近[1], 配置参数.找图设置.附近[2], 配置参数.找图设置.附近[3], 配置参数.找图设置.附近[4], 配置参数.找图设置.附近[5]);
    if (模式 == '基础模式' || 模式 == '游泳模式') {
        if (盒子中 == true && 附近.X != 0 && 附近.Y != 0) {
            mapi.keyrefresh('T',pos2.X,pos2.Y, 0 ,0);
        } else if (盒子中 == true && 附近.X == 0) {
            mapi.keyrefresh('T',pos1.X,pos1.Y, 0 ,0);
        } else if (附近中 == true && 盒子.X != 0 && 盒子.Y != 0) {
            mapi.keyrefresh('T',pos1.X,pos1.Y, 0 ,0);
        } else if (附近中 == true && 盒子.X == 0 && 盒子.Y == 0) {
            mapi.keyrefresh('T',pos2.X,pos2.Y, 0 ,0);
        } else if (盒子中 == false && 附近中 == false && 盒子.X != 0 && 盒子.Y != 0) {
            mapi.keyrefresh('T',pos1.X,pos1.Y, 0 ,75);
        } else if (盒子中 == false && 附近中 == false && 附近.X != 0 && 附近.Y != 0) {
            mapi.keyrefresh('T',pos2.X,pos2.Y, 0 ,0);
        } else {
            mapi.keyrefresh('T',5000, 5000, 0 ,0);
        }
    } else {
        mapi.keyrefresh('T',5000, 5000, 0 ,0);
    }
}

function 键位N() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('T');
    var pos2 = mapi.getkeypos('N');
    if (模式 == '基础模式' || 模式 == '游泳模式') {
        if (盒子中 == true) {
            mapi.keyrefresh('N',pos1.X,pos1.Y, 75 ,0);
        } else if (附近中 == true) {
            mapi.keyrefresh('N',pos2.X,pos2.Y, 75 ,0);
        } else {
            mapi.keyrefresh('N',5000, 5000, 0 ,0);
        }
    } else {
        mapi.keyrefresh('N',5000, 5000, 0 ,0);
    }
}

function 键位F() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('T');
    var pos2 = mapi.getkeypos('N');
    if (模式 == '基础模式') {
        let 开门 = mapi.findimage(配置参数.找图设置.开门[0], 配置参数.找图设置.开门[1], 配置参数.找图设置.开门[2], 配置参数.找图设置.开门[3], 配置参数.找图设置.开门[4], 配置参数.找图设置.开门[5]);
        let 关门 = mapi.findimage(配置参数.找图设置.关门[0], 配置参数.找图设置.关门[1], 配置参数.找图设置.关门[2], 配置参数.找图设置.关门[3], 配置参数.找图设置.关门[4], 配置参数.找图设置.关门[5]);
        let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
        let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
        let 次元箱 = mapi.findimage(配置参数.找图设置.次元箱[0], 配置参数.找图设置.次元箱[1], 配置参数.找图设置.次元箱[2], 配置参数.找图设置.次元箱[3], 配置参数.找图设置.次元箱[4], 配置参数.找图设置.次元箱[5]);
        let 救人 = mapi.findimage(配置参数.找图设置.救人[0], 配置参数.找图设置.救人[1], 配置参数.找图设置.救人[2], 配置参数.找图设置.救人[3], 配置参数.找图设置.救人[4], 配置参数.找图设置.救人[5]);
        let 盒子 = mapi.findimage(配置参数.找图设置.盒子[0], 配置参数.找图设置.盒子[1], 配置参数.找图设置.盒子[2], 配置参数.找图设置.盒子[3], 配置参数.找图设置.盒子[4], 配置参数.找图设置.盒子[5]);
        let 取消投掷 = mapi.findimage(配置参数.找图设置.取消投掷[0], 配置参数.找图设置.取消投掷[1], 配置参数.找图设置.取消投掷[2], 配置参数.找图设置.取消投掷[3], 配置参数.找图设置.取消投掷[4], 配置参数.找图设置.取消投掷[5]);
        let 取消 = mapi.findimage(配置参数.找图设置.取消[0], 配置参数.找图设置.取消[1], 配置参数.找图设置.取消[2], 配置参数.找图设置.取消[3], 配置参数.找图设置.取消[4], 配置参数.找图设置.取消[5]);
        if (取消投掷.X != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.取消投掷坐标_坐标[0],配置参数.按键_F.取消投掷坐标_坐标[1], 0 ,0);
        } else if (取消.X != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.取消坐标_坐标[0],配置参数.按键_F.取消坐标_坐标[1], 0 ,0);
        } else if (救人.X != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.救人坐标_坐标[0],配置参数.按键_F.救人坐标_坐标[1], 0 ,0);
        } else if (开门.X != 0 || 关门.Y != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.门坐标_坐标[0],配置参数.按键_F.门坐标_坐标[1], 0 ,0);
        } else if (驾驶.X != 0 && 乘坐.Y != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.驾驶坐标_坐标[0],配置参数.按键_F.驾驶坐标_坐标[1], 0 ,0);
        } else if (驾驶.X != 0 && 乘坐.Y == 0) {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        } else if (驾驶.X == 0 && 乘坐.Y != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        } else if (盒子中 == true || 附近中 == true) {
            拾取();
        } else if (盒子.X != 0 && 盒子.Y != 0){
            mapi.keyrefresh('F',pos1.X,pos1.Y, 0 ,0);
        } else if (次元箱.X != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        } else {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        }
    } else if (模式 == '次元模式') {
        mapi.keyrefresh('F',配置参数.超体模式.关闭次元箱_坐标[0], 配置参数.超体模式.关闭次元箱_坐标[1], 0 ,0);
    } else if (模式 == '侦查模式') {
        mapi.keyrefresh('F',配置参数.超体模式.退出侦查_坐标[0], 配置参数.超体模式.退出侦查_坐标[1], 0 ,0);
    } else if (模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
        let 取消投掷 = mapi.findimage(配置参数.找图设置.取消投掷[0], 配置参数.找图设置.取消投掷[1], 配置参数.找图设置.取消投掷[2], 配置参数.找图设置.取消投掷[3], 配置参数.找图设置.取消投掷[4], 配置参数.找图设置.取消投掷[5]);
        let 取消 = mapi.findimage(配置参数.找图设置.取消[0], 配置参数.找图设置.取消[1], 配置参数.找图设置.取消[2], 配置参数.找图设置.取消[3], 配置参数.找图设置.取消[4], 配置参数.找图设置.取消[5]);
        if (取消投掷.X != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.取消投掷坐标_坐标[0],配置参数.按键_F.取消投掷坐标_坐标[1], 0 ,0);
        } else if (取消.X != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.取消坐标_坐标[0],配置参数.按键_F.取消坐标_坐标[1], 0 ,0);
        } else {
            mapi.keyrefresh('F',配置参数.按键_F.下车_坐标[0],配置参数.按键_F.下车_坐标[1], 0 ,0);
        }
    } else if (模式 == '游泳模式') {
        let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
        let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
        if (附近中 == true || 盒子中 == true) {
            拾取();
        }else if (驾驶.X != 0 && 乘坐.Y != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.驾驶坐标_坐标[0],配置参数.按键_F.驾驶坐标_坐标[1], 0 ,0);
        } else if (驾驶.X != 0 && 乘坐.Y == 0) {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        } else if (驾驶.X == 0 && 乘坐.Y != 0) {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        } else {
            mapi.keyrefresh('F',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        }
    } else if (模式 == '跳伞模式') {
        mapi.keyrefresh('F',配置参数.按键_F.跳伞坐标_坐标[0],配置参数.按键_F.跳伞坐标_坐标[1], 0 ,0);
    } else if (模式 == '下落模式') {
        mapi.keyrefresh('F',配置参数.按键_F.开伞坐标_坐标[0],配置参数.按键_F.开伞坐标_坐标[1], 0 ,0);
    } else if (模式 == '瞬移模式') {
        mapi.keyrefresh('F',配置参数.超体模式.瞬移_坐标[0],配置参数.超体模式.瞬移_坐标[1], 0 ,0);
    } else if (模式 == '轰炸模式') {
        mapi.keyrefresh('F',配置参数.超体模式.轰炸_坐标[0],配置参数.超体模式.轰炸_坐标[1], 0 ,0);
    } else if (模式 == '跟随模式') {
        mapi.keyrefresh('F',配置参数.超体模式.跳伞坐标_坐标[0],配置参数.超体模式.跳伞坐标_坐标[1], 0 ,0);
    } else {
        mapi.keyrefresh('F',5000, 5000, 0 ,0);
    }
}

function 键位G() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    if (模式 == '基础模式' || 模式 == '游泳模式') {
        if (盒子中 == true || 附近中 == true) {
            拾取();
        } else {
            mapi.keyrefresh('G',5000, 5000, 0 ,0);
        }
    } else if (模式 == '瞬移模式') {
        mapi.keyrefresh('G',配置参数.超体模式.取消瞬移_坐标[0],配置参数.超体模式.取消瞬移_坐标[1], 0 ,0);
    } else if (模式 == '轰炸模式') {
        mapi.keyrefresh('G',配置参数.超体模式.取消轰炸_坐标[0],配置参数.超体模式.取消轰炸_坐标[1], 0 ,0);
    } else {
        mapi.keyrefresh('G',5000, 5000, 0 ,0);
    }
}

function 键位H() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    if (模式 == '基础模式' || 模式 == '游泳模式') {
        let 驾驶 = mapi.findimage(配置参数.找图设置.驾驶[0], 配置参数.找图设置.驾驶[1], 配置参数.找图设置.驾驶[2], 配置参数.找图设置.驾驶[3], 配置参数.找图设置.驾驶[4], 配置参数.找图设置.驾驶[5]);
        let 乘坐 = mapi.findimage(配置参数.找图设置.乘坐[0], 配置参数.找图设置.乘坐[1], 配置参数.找图设置.乘坐[2], 配置参数.找图设置.乘坐[3], 配置参数.找图设置.乘坐[4], 配置参数.找图设置.乘坐[5]);
        if (盒子中 == true || 附近中 == true) {
            拾取();
        } else if (驾驶.X != 0 && 乘坐.Y != 0) {
            mapi.keyrefresh('H',配置参数.基础操作.乘坐坐标_坐标[0],配置参数.基础操作.乘坐坐标_坐标[1], 0 ,0);
        } else if (驾驶.X == 0 && 乘坐.Y != 0) {
            mapi.keyrefresh('H',配置参数.按键_F.默认点击位置坐标_坐标[0],配置参数.按键_F.默认点击位置坐标_坐标[1], 0 ,0);
        } else {
            mapi.keyrefresh('H',5000, 5000, 0 ,0);
        }
    } else {
        mapi.keyrefresh('H',5000, 5000, 0 ,0);
    }
}

function 键位TAB() {
    var 模式 = mapi.getglobalmap('模式')
    var pos = mapi.getkeypos('TAB');
    if (模式 == '基础模式' || 模式 == '游泳模式' || 模式 == '驾驶模式' || 模式 == '次元模式' || 模式 == '乘坐模式' || 模式 == '飞机模式' || 模式 == '全局驾驶' || 模式 == '背包模式') {
        mapi.keyrefresh('TAB',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('TAB',5000, 5000, 0 ,0);
    }
}

function 键位SHIFT() {
    var 模式 = mapi.getglobalmap('模式')
    var pos = mapi.getkeypos('SHIFT');
    if (模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('SHIFT',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('SHIFT',5000, 5000, 0 ,0);
    }
}



function 键位SHIFT_G() {
    var pos = mapi.getkeypos('SHIFT+G');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '全局驾驶') {
        var 侦查 = mapi.findimage(配置参数.找图设置.侦查[0], 配置参数.找图设置.侦查[1], 配置参数.找图设置.侦查[2], 配置参数.找图设置.侦查[3], 配置参数.找图设置.侦查[4], 配置参数.找图设置.侦查[5]);
        if (侦查.X != 0) {
            mapi.keyrefresh('Shift+G',pos.X,pos.Y, 0 ,0);
        }
    } else {
        mapi.keyrefresh('Shift+G',5000, 5000, 0 ,0);
    }
}

function 键位SHIFT_H() {
    var pos = mapi.getkeypos('SHIFT+H');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '全局驾驶') {
        var 轰炸 = mapi.findimage(配置参数.找图设置.轰炸[0], 配置参数.找图设置.轰炸[1], 配置参数.找图设置.轰炸[2], 配置参数.找图设置.轰炸[3], 配置参数.找图设置.轰炸[4], 配置参数.找图设置.轰炸[5]);
        var 瞬移 = mapi.findimage(配置参数.找图设置.瞬移[0], 配置参数.找图设置.瞬移[1], 配置参数.找图设置.瞬移[2], 配置参数.找图设置.瞬移[3], 配置参数.找图设置.瞬移[4], 配置参数.找图设置.瞬移[5]);
        if (轰炸.X != 0 || 瞬移.X != 0) {
            mapi.keyrefresh('Shift+H',pos.X,pos.Y, 0 ,0);
        }
    } else {
        mapi.keyrefresh('Shift+H',5000, 5000, 0 ,0);
    }
}


function 键位左键() {
    var pos = mapi.getkeypos('L&M');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '侦查模式' || 模式 == '驾驶模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('L&M',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('L&M',5000, 5000, 0 ,0);
    }
}

function 键位右键() {
    var pos = mapi.getkeypos('R&M');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('R&M',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('R&M',5000, 5000, 0 ,0);
    }
}

function 键位中键() {
    var pos = mapi.getkeypos('M&M');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 != '大厅模式' && 模式 != '背包模式') {
        mapi.keyrefresh('M&M',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('M&M',5000, 5000, 0 ,0);
    }
}

function 键位空格() {
    var pos = mapi.getkeypos('Space');
    var pos1 = mapi.getkeypos('↑');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('Space',pos.X, pos.Y, 0 ,0);
    } else if (模式 == '游泳模式') {
        mapi.keyrefresh('Space',pos1.X, pos1.Y, 0 ,0);
    } else {
        mapi.keyrefresh('Space',5000, 5000, 0 ,0);
    }
}

function 键位C() {
    var pos = mapi.getkeypos('C');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式' || 模式 == '驾驶模式' || 模式 == '飞机模式' || 模式 == '全局驾驶') {
        mapi.keyrefresh('C',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('C',5000, 5000, 0 ,0);
    }
}

function 键位CTRL() {
    var pos = mapi.getkeypos('↓');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '游泳模式') {
        mapi.keyrefresh('Ctrl',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('Ctrl',5000, 5000, 0 ,0);
    }
}

function 键位M() {
    var pos = mapi.getkeypos('M');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '地图模式') {
        mapi.keyrefresh('M',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('M',pos.X,pos.Y, 0 ,0);
    }
}


function 键位滚上() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('G');
    var pos2 = mapi.getkeypos('ctrl+h');
    var pos3 = mapi.getkeypos('M');
    var pos4 = mapi.getkeypos('滚上');
    if (附近中 == true) {
        mapi.keyrefresh('滚上',pos1.X, pos1.Y, 200 ,0);
    } else if (盒子中 == true) {
        mapi.keyrefresh('滚上',pos2.X, pos2.Y, 200 ,-125);
    } else if (模式 == '地图模式') {
        mapi.keyrefresh('滚上',pos3.X, pos3.Y, 0 ,450);
    } else if (模式 == '基础模式' || 模式 == '乘坐模式') {
        var 调距 = mapi.findimage(配置参数.找图设置.调距[0], 配置参数.找图设置.调距[1], 配置参数.找图设置.调距[2], 配置参数.找图设置.调距[3], 配置参数.找图设置.调距[4], 配置参数.找图设置.调距[5]);
        var 调距按钮 = mapi.findimage(配置参数.找图设置.调距关闭按钮[0], 配置参数.找图设置.调距关闭按钮[1], 配置参数.找图设置.调距关闭按钮[2], 配置参数.找图设置.调距关闭按钮[3], 配置参数.找图设置.调距关闭按钮[4], 配置参数.找图设置.调距关闭按钮[5]);    
        if (调距.X != 0 && 调距.Y != 0) {
            mapi.keyrefresh('滚上',pos4.X, pos4.Y, -50 ,0);
        } else if (调距按钮.X != 0 && 调距按钮.Y != 0) {
            mapi.keyrefresh('滚上',pos4.X, pos4.Y, -50 ,0);
        } else {
            mapi.keyrefresh('滚上',5000, 5000, 0 ,0);
        }
    } else {
        mapi.keyrefresh('滚上',5000, 5000, 0 ,0);
    }
}

function 键位滚下() {
    var 模式 = mapi.getglobalmap('模式')
    var 盒子中 = mapi.getglobalmap('盒子中');
    var 附近中 = mapi.getglobalmap('附近中');
    var pos1 = mapi.getkeypos('G');
    var pos2 = mapi.getkeypos('ctrl+h');
    var pos3 = mapi.getkeypos('M');
    var pos4 = mapi.getkeypos('滚上');
    if (附近中 == true) {
        mapi.keyrefresh('滚下',pos1.X, pos1.Y, 200 ,75);
    } else if (盒子中 == true) {
        mapi.keyrefresh('滚下',pos2.X, pos2.Y, 200 ,-50);
    } else if (模式 == '地图模式') {
        mapi.keyrefresh('滚下',pos3.X, pos3.Y, 0 ,500);
    } else if (模式 == '基础模式' || 模式 == '乘坐模式') {
        var 调距 = mapi.findimage(配置参数.找图设置.调距[0], 配置参数.找图设置.调距[1], 配置参数.找图设置.调距[2], 配置参数.找图设置.调距[3], 配置参数.找图设置.调距[4], 配置参数.找图设置.调距[5]);
        var 调距按钮 = mapi.findimage(配置参数.找图设置.调距关闭按钮[0], 配置参数.找图设置.调距关闭按钮[1], 配置参数.找图设置.调距关闭按钮[2], 配置参数.找图设置.调距关闭按钮[3], 配置参数.找图设置.调距关闭按钮[4], 配置参数.找图设置.调距关闭按钮[5])    
        if (调距.X != 0 && 调距.Y != 0) {
            mapi.keyrefresh('滚下',pos4.X, pos4.Y, 50 ,0);
        } else if (调距按钮.X != 0 && 调距按钮.Y != 0) {
            mapi.keyrefresh('滚下',pos4.X, pos4.Y, 50 ,0);
        } else {
            mapi.keyrefresh('滚下',5000, 5000, 0 ,0);
        }
    } else {
        mapi.keyrefresh('滚下',5000, 5000, 0 ,0);
    }
}

function 键位R() {
    var pos1 = mapi.getkeypos('R');
    var pos2 = mapi.getkeypos('=');
    var pos3 = mapi.getkeypos('Z');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式') {
        mapi.keyrefresh('R',pos1.X,pos1.Y, 0 ,0)
        mapi.keyrefresh('=',pos2.X,pos2.Y, 0 ,0)
        mapi.keyrefresh('Z',pos3.X,pos3.Y, 0 ,0)
    } else {
        mapi.keyrefresh('R',5000, 5000, 0 ,0);
        mapi.keyrefresh('=',5000, 5000, 0 ,0);
        mapi.keyrefresh('Z',5000, 5000, 0 ,0);
    }
}


function 键位CTRL_F() {
    var pos1 = mapi.getkeypos('Ctrl+F');
    var pos2 = mapi.getkeypos('Ctrl+G');
    var pos3 = mapi.getkeypos('Ctrl+H');
    var 盒子中 = mapi.getglobalmap('盒子中');
    if (盒子中 == true) {
        mapi.keyrefresh('Ctrl+F',pos1.X,pos1.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+G',pos2.X,pos2.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+H',pos3.X,pos3.Y, 0 ,0)
    } else {
        mapi.keyrefresh('Ctrl+F',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+G',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+H',5000, 5000, 0 ,0);
    }
}


function 键位CTRL_A() {
    var pos1 = mapi.getkeypos('Ctrl+A');
    var pos2 = mapi.getkeypos('Ctrl+D');
    var pos3 = mapi.getkeypos('Ctrl+C');
    var pos4 = mapi.getkeypos('Ctrl+Q');
    var pos5 = mapi.getkeypos('Ctrl+E');
    var pos6 = mapi.getkeypos('Ctrl+Space');
    var pos7 = mapi.getkeypos('Ctrl+X');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '飞机模式') {
        mapi.keyrefresh('Ctrl+A',pos1.X,pos1.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+D',pos2.X,pos2.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+C',pos3.X,pos3.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+Q',pos4.X,pos4.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+E',pos5.X,pos5.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+Space',pos6.X,pos6.Y, 0 ,0)
        mapi.keyrefresh('Ctrl+X',pos7.X,pos7.Y, 0 ,0)
    } else {
        mapi.keyrefresh('Ctrl+A',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+D',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+C',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+Q',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+E',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+Space',5000, 5000, 0 ,0);
        mapi.keyrefresh('Ctrl+X',5000, 5000, 0 ,0);
    }
}


function 键位CTRL_T() {
    var pos = mapi.getkeypos('Ctrl+T');
    var 模式 = mapi.getglobalmap('模式')
    if (模式 == '基础模式' || 模式 == '乘坐模式') {
        mapi.keyrefresh('Ctrl+T',pos.X,pos.Y, 0 ,0);
    } else {
        mapi.keyrefresh('Ctrl+T',5000, 5000, 0 ,0);
    }
}




function Start() {
    键位1();
    键位4();
    键位E();
    键位V();
    键位T();
    键位N();
    键位F();
    键位G();
    键位H();
    键位TAB();
    键位SHIFT();
    键位SHIFT_G();
    键位SHIFT_H();
    键位左键();
    键位右键();
    键位中键();
    键位空格();
    键位C();
    键位CTRL();
    键位M();
    键位滚上();
    键位滚下();
    键位R();
    键位CTRL_F();
    键位CTRL_T();
    键位CTRL_A();
}


export class 检测 {
    start() {
        try {
            mapi.keyrefresh('Ctrl+Num6',5000, 5000, 0 ,0);
            mapi.keyrefresh('Ctrl+Num3',5000, 5000, 0 ,0);
            mapi.keyrefresh('Ctrl+Num4',5000, 5000, 0 ,0);
            mapi.keyrefresh('Ctrl+Num7',5000, 5000, 0 ,0);
            mapi.keyrefresh('Ctrl+Num8',5000, 5000, 0 ,0);
            mapi.keyrefresh('Ctrl+Num9',5000, 5000, 0 ,0);
            mapi.keyrefresh('↑', 5000, 5000, 0 ,0);
            mapi.keyrefresh('↓', 5000, 5000, 0 ,0);
            mapi.keyrefresh('ctrl+j',5000, 5000, 0 ,0);
            mapi.keyrefresh('ctrl+k',5000, 5000, 0 ,0);
            mapi.keyrefresh('ctrl+l',5000, 5000, 0 ,0);
            mapi.keyrefresh('6',5000, 5000, 0 ,0);
            mapi.keyrefresh('7',5000, 5000, 0 ,0);
            while(true){
                mapi.delay(配置参数.检测频率.实时画面频率);
                Start()
            }
        }
        catch(err){
            logerror(err)
        }
    }
}
