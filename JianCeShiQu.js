import { 配置参数 } from '配置参数'

function 盒子中() {
    var 是否弹出鼠标 = mapi.getglobalmap('是否弹出鼠标');
    var 循环次数 = mapi.getglobalmap('循环次数');
    var 六格展示 = mapi.findimage(配置参数.找图设置.六格展示[0], 配置参数.找图设置.六格展示[1], 配置参数.找图设置.六格展示[2], 配置参数.找图设置.六格展示[3], 配置参数.找图设置.六格展示[4], 配置参数.找图设置.六格展示[5]);
    var 是否打开盒子 = mapi.getglobalmap('是否打开盒子');
    if (是否打开盒子 == true) {
        mapi.setglobalmap('盒子中', true);
        mapi.delay(200)
    }
    if(六格展示.X != 0, 六格展示.Y != 0) {
        mapi.setglobalmap('盒子中', true);
        mapi.setglobalmap('是否打开盒子', true);
    } else {
        mapi.setglobalmap('盒子中', false);
        mapi.setglobalmap('是否打开盒子', false);
        if (是否弹出鼠标 == true) {
            if (循环次数 == 15) {
                mapi.shotmode(true);
                mapi.setglobalmap('是否弹出鼠标', false);
                mapi.setglobalmap('循环次数', 0);
            } else {
                mapi.setglobalmap('循环次数', 循环次数 + 1);
            }
        }
    }
}

function 附近中() {
    var 附近菜单 = mapi.findimage(配置参数.找图设置.附近菜单[0], 配置参数.找图设置.附近菜单[1], 配置参数.找图设置.附近菜单[2], 配置参数.找图设置.附近菜单[3], 配置参数.找图设置.附近菜单[4], 配置参数.找图设置.附近菜单[5]);
    var 附近菜单2 = mapi.findimage(配置参数.找图设置.附近菜单2[0], 配置参数.找图设置.附近菜单2[1], 配置参数.找图设置.附近菜单2[2], 配置参数.找图设置.附近菜单2[3], 配置参数.找图设置.附近菜单2[4], 配置参数.找图设置.附近菜单2[5]);
    var 附近菜单3 = mapi.findimage(配置参数.找图设置.附近菜单3[0], 配置参数.找图设置.附近菜单3[1], 配置参数.找图设置.附近菜单3[2], 配置参数.找图设置.附近菜单3[3], 配置参数.找图设置.附近菜单3[4], 配置参数.找图设置.附近菜单3[5]);
    var 附近菜单4 = mapi.findimage(配置参数.找图设置.附近菜单4[0], 配置参数.找图设置.附近菜单4[1], 配置参数.找图设置.附近菜单4[2], 配置参数.找图设置.附近菜单4[3], 配置参数.找图设置.附近菜单4[4], 配置参数.找图设置.附近菜单4[5]);
    if(附近菜单.X != 0) {
        mapi.setglobalmap('附近中', true);
    } else if (附近菜单2.X != 0) {
        mapi.setglobalmap('附近中', true);
    } else if (附近菜单3.X != 0) {
        mapi.setglobalmap('附近中', true);
    } else if (附近菜单4.X != 0) {
        mapi.setglobalmap('附近中', true);
    } else {
        mapi.setglobalmap('附近中', false);
    }
}


export class 检测 {
    start() {
        try {
            while(true){
                mapi.delay(配置参数.检测频率.拾取菜单检测);
                盒子中();
                附近中();
            }
        }
        catch(err){
            logerror(err)
        }
    }
}



