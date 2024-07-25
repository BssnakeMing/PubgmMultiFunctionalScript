import { gameConfig, gunConfig, 基础参数 } from '压枪参数';

// 不会编程，不要动这些！！！这个配置是当前的调枪默认配置，也就是游戏内默认的开火灵敏度数值-默认中
var isOpenMirrorFlag = false;
const defConfig = {
	"第一人":100,
	"第三人":88,
	"基础镜":50,
	"2倍镜":30,
	"3倍镜":22,
	"4倍镜":14,
	"6倍镜":12,
}
// 如果需腰射压枪控制，true=腰射也压，false=只开镜压，修改shotFlag的值，只改下面这一个就行。
if (基础参数.基础设置.是否开启腰射压枪 == true){
	var shotFlag = true;
} else {
	var shotFlag = false; //  <<<===  <<<===  <<<===
}
export class Control{
	start(){
		try {
			if (基础参数.基础设置.是否开启压枪 == false){
				mapi.customaimpar(true);
				return false;
			}
			while(true){
				// var start = new Date().getTime(); // call your function
				// 间隔50毫秒执行一次避免CPU开销，PC和手机配置好的随意
				mapi.delay(18); 
				
				isOpenMirrorFlag = this.getIsOpenMirrorSeek();
				// var end = new Date().getTime();
				// mapi.tip(end - start);
				if (!shotFlag) {
					if (isOpenMirrorFlag){
					
						switch (this.getLeftOrRightGunSeek()) {
							case '':
								mapi.customaimpar(true);
								if (基础参数.基础设置.是否开启提示 == true){
									mapi.tip('没有识别到手持左或右枪械', 3);
								}
								break;
							case '左':
								let result = this.startGunSeek(2);
								mapi.customaimpar(result);
								break;
							case '右':
								let result = this.startGunSeek(3);
								mapi.customaimpar(result);
								break;	
						}
					}
				}
				else
				{
					switch (this.getLeftOrRightGunSeek()) {
						case '':
							mapi.customaimpar(true);
							if (基础参数.基础设置.是否开启提示 == true){
								mapi.tip('没有识别到手持左或右枪械', 3);
							}
							break;
						case '左':
							let result = this.startGunSeek(2);
							mapi.customaimpar(result);
							break;
						case '右':
							let result = this.startGunSeek(3);
							mapi.customaimpar(result);
							break;	
					}
				}
			}
		}
		catch(err){
			mapi.customaimpar(true);
			if (基础参数.基础设置.是否开启提示 == true){
				logerror('>>>压枪发生错误...错误信息：' + err);
			}
		}
	}
	
	// 开始枪械识别
	startGunSeek(hor){
		
		// 获取枪械
		let name = this.getFirearms(hor);
		if (name == '') {
			if (基础参数.基础设置.是否开启提示 == true){
				mapi.tip('未获取到枪械', 3);
			}
			return true;
		}
		// 获取当前枪械的配置
		let curGunConfig = this.getGunConfig(name);
		if(null == curGunConfig){
			if (基础参数.基础设置.是否开启提示 == true){
				mapi.tip('开始->1.' + name + '：没有获取到全部配置.', 3);
			}
			return true;
		}



		let curSeekMirror = this.getMirrorSeek(hor);
		let defMirrorRatio = this.getMirrorRatio(curGunConfig, curSeekMirror);

		if (defMirrorRatio <= 0) {
			defMirrorRatio = 1;
		}

		// 获取当前姿势
		let curSeekPosture = this.getPostureSeek();
		let defPostureRatio = 1;
		if(curSeekPosture != '站'){
			defPostureRatio = this.getPostureRatio(curGunConfig, curSeekPosture);
			if (defPostureRatio <= 0) {
				defPostureRatio = 1;
			}
		}
		
		// 获取枪口
		let muzzle = this.getMuzzle(hor);
		let muzzleRatio = 1;
		if (muzzle != '') {
			muzzleRatio = this.getPartsBySaved(curGunConfig, muzzle);
			if (muzzleRatio <= 0) {
				muzzleRatio = 1;
			}
		}
		
		// 获取握把
		let grip = this.getGrip(hor);
		let gripRatio = 1;
		if (grip != '') {
			gripRatio = this.getPartsBySaved(curGunConfig, grip);
			if (gripRatio <= 0) {
				gripRatio = 1;
			}
		}
		
		// 获取枪托
		let buttstock = this.getButtstock(hor);
		let buttstockRatio = 1;
		if (buttstock != '') {
			buttstockRatio = this.getPartsBySaved(curGunConfig, buttstock);
			if (buttstockRatio <= 0) {
				buttstockRatio = 1;
			}
		}
		
		// 获取时间间隔
		let delay = this.getPixelConfig(curGunConfig, '时间间隔');
		if(null == delay){
			if (基础参数.基础设置.是否开启提示 == true){
				mapi.tip('结束->1.' + name + '：没有获取到时间间隔.', 3);
			}
			return true;
		}

		
		// 获取修正系数
		let fixedDelay = this.getUserConfig('修正系数');
		if (null == fixedDelay || fixedDelay <= 0 ) {
			fixedDelay = 1;
		}

		delay *= fixedDelay;

		// 获取像素和次数
		let rateAndTimesMap = this.getRateTimesConfig(curGunConfig, '像素和次数');
		if(null == rateAndTimesMap){
			if (基础参数.基础设置.是否开启提示 == true){
				mapi.tip('结束->2.' + name + '：没有获取到像素和次数.', 3);
			}
			return true;
		}
		
		// 获取灵敏度转换值
		let def = this.getDefualtConfig(curSeekMirror);
		let user = this.getUserConfig(curSeekMirror);
		let coverRatio = 1;
		if (def != 1 && user != 1) {
			coverRatio = (def * 1.00) /  (user * 1.00) ;
		}		

		let resultRatio = defMirrorRatio * defPostureRatio * muzzleRatio * gripRatio * buttstockRatio * coverRatio;
		let i = mapi.getglobalmap('压枪循环')
		if (i == null){
			mapi.setglobalmap('压枪循环', 0)
			i = 0
		} else if  (i >= 10){
			mapi.setglobalmap('压枪循环', 0)
			i = 0
		}
		let resultName1 = name + '-' + curSeekMirror + '-' + curSeekPosture + '-' + muzzle + '-' + grip + '-' + buttstock + i;
		let resultName = name + '-' + curSeekMirror + '-' + curSeekPosture + '-' + muzzle + '-' + grip + '-' + buttstock;



		mapi.refreshgunpress(resultName1, delay, rateAndTimesMap, resultRatio);
		if (基础参数.基础设置.是否开启提示 == true){
			mapi.tip('识别成功>>>' + resultName  + '-' + resultRatio.toFixed(2) + '-[ ' + delay + ' ]', 3);
		}
		mapi.setglobalmap('压枪循环', i+1)
		return false;

	}
	
	// 识别是否开镜
	getIsOpenMirrorSeek(){
		let result = mapi.findimage(基础参数.找图设置.检查开镜[0], 基础参数.找图设置.检查开镜[1], 基础参数.找图设置.检查开镜[2], 基础参数.找图设置.检查开镜[3], 基础参数.找图设置.检查开镜[4], 基础参数.找图设置.检查开镜[5]);
		if (result.X == 0 && result.Y == 0) {
			return true;
		}
		if (!shotFlag) {
			if (基础参数.基础设置.是否开启提示 == true){
				mapi.tip('没有开镜不压枪！', 3);
			}
			mapi.customaimpar(true);
		}
		return false;
	}


	// 识别当前使用的左或右枪械
	getLeftOrRightGunSeek(){
		let left = mapi.findcolor(基础参数.找色设置.一号枪械颜色值[0], 基础参数.找色设置.一号枪械颜色值[1]);
		if (left.X != 0 || left.Y != 0) {
			return '左';
		}
		let right = mapi.findcolor(基础参数.找色设置.二号枪械颜色值[0], 基础参数.找色设置.二号枪械颜色值[1]);
		if (right.X != 0 || right.Y != 0) {
			return '右';
		}
		return '';
	}
	
	// 获取枪械配置
	getGunConfig(name){
		if(gunConfig.hasOwnProperty(name)){
			return gunConfig[name];
		}
		return null;
	}
	
	// 获取像素
	getPixelConfig(config, name){
		if(config.hasOwnProperty('压枪参数')){
			let p = config['压枪参数'];
			if (p.hasOwnProperty(name)) {
				return Number(p[name]);
			}
		}
		return 3;
	}
	
	// 获取频率和次数
	getRateTimesConfig(config, name){
		if(config.hasOwnProperty('压枪参数')){
			let p = config['压枪参数'];
			if (p.hasOwnProperty(name)) {
				return JSON.stringify(p[name]);
			}
		}
		return null;
	}
	
	// 获取人物姿势
	getPostureRatio(config, post){
		if(config.hasOwnProperty('姿势')){
			let p = config['姿势'];
			if (p.hasOwnProperty(post)) {
				return Number(p[post]);
			}
		}
		return 1;
	}

	// 识别当前的人物姿势
	getPostureSeek(){
		let 蹲 = mapi.findcolor(基础参数.找色设置.蹲下颜色值[0], 基础参数.找色设置.蹲下颜色值[1]);
		if (蹲.X != 0 || 蹲.Y != 0) {
			return '蹲';
		}
		let 趴 = mapi.findcolor(基础参数.找色设置.趴下颜色值[0], 基础参数.找色设置.趴下颜色值[1]);
		if (趴.X != 0 || 趴.Y != 0) {
			return '趴';
		}
		return '站';
	}
	
	// 获取倍镜灵敏度
	getMirrorRatio(config, name){
		if(config.hasOwnProperty('倍镜')){
			let m = config['倍镜'];
			if (m.hasOwnProperty(name)) {
				return Number(m[name]);
			}
		} 
		return 1;
	}
	
	// 识别当前的倍镜
	getMirrorSeek(hor){
		// 腰射压枪
		if (shotFlag && !isOpenMirrorFlag) {
			return '腰射';
		}
		let 六倍 = mapi.findimage(基础参数.找图设置.六倍[0], 基础参数.找图设置.六倍[1], 基础参数.找图设置.六倍[2], 基础参数.找图设置.六倍[3], 基础参数.找图设置.六倍[4], 基础参数.找图设置.六倍[5]);
		if(六倍.X != 0 || 六倍.Y != 0) {
			// 获取6倍状态
			let reuslt = Number(mapi.getglobalmap('6倍状态'));
			if (reuslt == 6){
				return '6倍镜';
			}
			else if (reuslt == 3)
			{
				return '3倍镜';
			}
		}
		if (hor == 2) {
			let 倍镜1 = mapi.getglobalmap('倍镜1');
			if(null != 倍镜1){
				return 倍镜1.toString();
			}
		}else if(hor == 3) {
			let 倍镜2 = mapi.getglobalmap('倍镜2');
			if(null != 倍镜2){
				return 倍镜2.toString();
			}
		}
	}
	
	// 获取配件转换值
	getPartsBySaved(config, name){
		if(config.hasOwnProperty('配件')){
			let p = config['配件'];
			if (p.hasOwnProperty(name)) {
				return Number(p[name]);
			}
		}
		return 1;
	}
	
	

	// 获取枪械
	getFirearms(hor){
		if (hor == 2) {
			let 枪械1 = mapi.getglobalmap('枪械1');
			if(null != 枪械1){
				return 枪械1.toString();
			}
		}else if(hor == 3) {
			let 枪械2 = mapi.getglobalmap('枪械2');
			if(null != 枪械2){
				return 枪械2.toString();
			}
		}
		return '';
	}

	// 获取枪口配件
	getMuzzle(hor){
		if (hor == 2) {
			let 枪口1 = mapi.getglobalmap('枪口1');
			if(null != 枪口1){
				return 枪口1.toString();
			}
		}else if(hor == 3) {
			let 枪口2 = mapi.getglobalmap('枪口2');
			if(null != 枪口2){
				return 枪口2.toString();
			}
		}
		return '';
	}
	
	// 获取握把配件
	getGrip(hor){
		if (hor == 2) {
			let 握把1 = mapi.getglobalmap('握把1');
			if(null != 握把1){
				return 握把1.toString();
			}
		}else if(hor == 3) {
			let 握把2 = mapi.getglobalmap('握把2');
			if(null != 握把2){
				return 握把2.toString();
			}
		}
		return '';
	}
	
	// 获取枪托配件
	getButtstock(hor){
		if (hor == 2) {
			let 枪托1 = mapi.getglobalmap('枪托1');
			if(null != 枪托1){
				return 枪托1.toString();
			}
		}else if(hor == 3) {
			let 枪托2 = mapi.getglobalmap('枪托2');
			if(null != 枪托2){
				return 枪托2.toString();
			}
		}
		return '';
	}
	
	// 获取默认游戏开火灵敏度参数
	getDefualtConfig(name){
		if(defConfig.hasOwnProperty(name)){
			return Number(defConfig[name]);
		}
		return 1;
	}
	
	// 获取用户游戏开火灵敏度参数
	getUserConfig(name){
		if(gameConfig.hasOwnProperty(name)){
			return Number(gameConfig[name]);
		}
		return 1;
	}
}
