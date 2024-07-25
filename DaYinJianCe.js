import { 配置参数 } from '配置参数'

function 打印信息() {
    while(true) {
        mapi.delay(配置参数.检测频率.打印模式信息)
        //mapi.tip(mapi.getglobalmap('模式'));
    }
}

打印信息();

