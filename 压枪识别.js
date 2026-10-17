import { 基础参数, gunConfig } from '压枪参数';

export const Control = {
	start(){
		let 背包已开 = mapi.findimage('背包已开', 0.75, 4, 1, 4, 1);
		// 关闭背包
		if (背包已开.X != 0 || 背包已开.Y != 0) {
			this.startImageSeek();
			mapi.delay(50)
			mapi.click();
			mapi.shotmode(true);
		} 
		// 打开背包
		else 
		{
			mapi.shotmode(false);
			mapi.click();
		}
	},
	startImageSeek(){
		let 枪口1 = this.检查枪口(1);
		let 枪口2 = this.检查枪口(2);
		
		let 握把1 = this.检查握把(1);
		let 握把2 = this.检查握把(2);
		
		let 枪托1 = this.检查枪托(1);
		let 枪托2 = this.检查枪托(2);

		let 倍镜1 = this.检测倍镜(1);
		let 倍镜2 = this.检测倍镜(2);
		
		let 枪械1 = this.检测枪械(1);
		let 枪械2 = this.检测枪械(2);

		mapi.setglobalmap('枪口1', 枪口1);
		mapi.setglobalmap('枪口2', 枪口2);

		mapi.setglobalmap('握把1', 握把1);
		mapi.setglobalmap('握把2', 握把2);
		
		mapi.setglobalmap('枪托1', 枪托1);
		mapi.setglobalmap('枪托2', 枪托2);

		mapi.setglobalmap('倍镜1', 倍镜1);
		mapi.setglobalmap('倍镜2', 倍镜2);

		mapi.setglobalmap('枪械1', 枪械1);
		mapi.setglobalmap('枪械2', 枪械2);

		mapi.tip('一号: ' + 枪械1 + '-' + 枪口1 + 握把1 + 枪托1 + '-' + 倍镜1 + '   ' + '二号: ' + 枪械2 + '-' + 枪口2 + 握把2 + 枪托2 + '-' + 倍镜2)

	},
	检查枪口(loc){
		let imagePos1 = 4
		let imagePos2 = 4
		let imagePos3 = 3
		let imagePos4 = loc == 1 ? 2 : 4

		let 步枪消焰 = mapi.findimage('步枪消焰', 基础参数.置信度.步枪消焰器, imagePos1 ,imagePos2, imagePos3, imagePos4);
		if(步枪消焰.X != 0 || 步枪消焰.Y != 0){
			return '步枪消焰';
		}
		let 步枪补偿 = mapi.findimage('步枪补偿', 基础参数.置信度.步枪补偿器, imagePos1 ,imagePos2, imagePos3, imagePos4);
		if(步枪补偿.X != 0 || 步枪补偿.Y != 0){
			return '步枪补偿';
		}
		let 冲锋消焰 = mapi.findimage('冲锋消焰', 基础参数.置信度.冲锋消焰器, imagePos1 ,imagePos2, imagePos3, imagePos4);
		if(冲锋消焰.X != 0 || 冲锋消焰.Y != 0){
			return '冲锋消焰';
		}
		let 冲锋补偿 = mapi.findimage('冲锋补偿', 基础参数.置信度.冲锋补偿器, imagePos1 ,imagePos2, imagePos3, imagePos4);
		if(冲锋补偿.X != 0 || 冲锋补偿.Y != 0){
			return '冲锋补偿';
		}
		let 狙击消焰 = mapi.findimage('狙击消焰', 基础参数.置信度.狙击消焰器, imagePos1 ,imagePos2, imagePos3, imagePos4);
		if(狙击消焰.X != 0 || 狙击消焰.Y != 0){
			return '狙击消焰';
		}
		let 狙击补偿 = mapi.findimage('狙击补偿', 基础参数.置信度.狙击补偿器, imagePos1 ,imagePos2, imagePos3, imagePos4);
		if(狙击补偿.X != 0 || 狙击补偿.Y != 0){
			return '狙击补偿';
		}
		return '';
	},
	检查握把(loc){
		let imagePos1 = 4
		let imagePos2 = 4
		let imagePos3 = 3
		let imagePos4 = loc == 1 ? 2 : 4

		let 拇指握把 = mapi.findimage('拇指握把', 基础参数.置信度.拇指握把, imagePos1, imagePos2,imagePos3, imagePos4);
		if(拇指握把.X != 0 || 拇指握把.Y != 0){ 
			return '拇指握把'; 
		} 
		let 半截握把 = mapi.findimage('半截握把', 基础参数.置信度.半截握把, imagePos1, imagePos2,imagePos3, imagePos4);
		if(半截握把.X != 0 || 半截握把.Y != 0){ 
			return '半截握把'; 
		} 
		let 轻型握把 = mapi.findimage('轻型握把', 基础参数.置信度.轻型握把, imagePos1, imagePos2,imagePos3, imagePos4);
		if(轻型握把.X != 0 || 轻型握把.Y != 0){ 
			return '轻型握把'; 
		} 
		let 垂直握把 = mapi.findimage('垂直握把', 基础参数.置信度.垂直握把, imagePos1, imagePos2,imagePos3, imagePos4);
		if(垂直握把.X != 0 || 垂直握把.Y != 0){
			return '垂直握把';
		}
		return '';
	},
	检查枪托(loc){
		let imagePos1 = 4
		let imagePos2 = 4
		let imagePos3 = 4
		let imagePos4 = loc == 1 ? 2 : 4

		let 战术枪托 = mapi.findimage('战术枪托', 基础参数.置信度.战术枪托, imagePos1, imagePos2, imagePos3, imagePos4);
		if(战术枪托.X != 0 || 战术枪托.Y != 0){
			return '战术枪托';
		}
		let 狙击枪托 = mapi.findimage('狙击枪托', 基础参数.置信度.狙击枪托, imagePos1, imagePos2, imagePos3, imagePos4);
		if(狙击枪托.X != 0 || 狙击枪托.Y != 0){
			return '狙击枪托';
		}
		return '';
	},
	检测倍镜(loc){

		let imagePos1 = 4
		let imagePos2 = loc == 1 ? 4 : 3
		let imagePos3 = 4
		let imagePos4 = loc == 1 ? 1 : 2
		
		let 四倍 = mapi.findimage('四倍', 基础参数.置信度.四倍, imagePos1, imagePos2, imagePos3, imagePos4);
		if(四倍.X != 0 || 四倍.Y != 0) {
			return '4倍镜';
		}
		let 三倍 = mapi.findimage('三倍', 基础参数.置信度.三倍, imagePos1, imagePos2, imagePos3, imagePos4);
		if(三倍.X != 0 || 三倍.Y != 0) {
			return '3倍镜';
		}
		let 二倍 = mapi.findimage('二倍', 基础参数.置信度.二倍, imagePos1, imagePos2, imagePos3, imagePos4);
		if(二倍.X != 0 || 二倍.Y != 0) {
			return '2倍镜';
		}

		// 识别当前的倍镜
		let 六倍 = mapi.findimage('六倍', 基础参数.置信度.六倍, imagePos1, imagePos2, imagePos3, imagePos4);
		let LPVO = mapi.findimage('LPVO', 基础参数.置信度.六倍, imagePos1, imagePos2, imagePos3, imagePos4);
		let 八倍 = mapi.findimage('八倍', 基础参数.置信度.六倍, imagePos1, imagePos2, imagePos3, imagePos4);
		let 战术镜 = mapi.findimage('战术镜', 基础参数.置信度.六倍, imagePos1, imagePos2, imagePos3, imagePos4);

		if(六倍.X != 0  || LPVO.X != 0  || 八倍.X != 0  || 战术镜.X != 0) {
			// 获取6倍状态
			let reuslt = Number(mapi.getglobalmap('6倍状态'));
			if (reuslt == 0 || reuslt == 6){
				return '6倍镜';
			}
			else if (reuslt == 3)
			{
				return '3倍镜';
			}
			return '6倍镜';
		}
		return '基础镜';
	},
	检测枪械(loc){

		let a2 = loc == 1 ? 3 : 4
		let a4 = loc == 1 ? 1 : 3

		for (let key in gunConfig) {
			if(null != gunConfig[key]){
				let cfg = gunConfig[key];
				if(cfg.hasOwnProperty('匹配度')){
					let sim = Number(cfg['匹配度']);
					let result = mapi.findimage(('B_' + key), sim, 3, a2, 3, a4);
					if (result.X != 0 || result.Y != 0) {
						return key.toString();
					}
				}
			}
		}
		return '';	
	}
}

