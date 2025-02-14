// ### 傻瓜式压枪，你只需要修改这两项：
//   		0. gameConfig是你的设置，必须对应你游戏内的设置，为了计算和转换灵敏度。否则你就需要从0开始调压枪！！！
// 			1. 这里需要对应游戏内的【开火镜头灵敏度】，位于游戏的【设置】--【灵敏度设置】--【开火镜头灵敏度】。
// 			2. 如果游戏里更改了，这里也需要一起修改成一样的值。
//    		3. 调试技巧：如何完全和游戏内一致，可能会有一些差别，假如游戏内3倍镜的灵敏度是30，这里也是30，压枪可能会有点偏差，只需要+1或者-1，改成31，或者29，微调一下就可以了
export const gameConfig = {
	"第一人":86,
	"第三人":86,
	"基础镜":46,
	"2倍镜":27,
	"3倍镜":17,
	"4倍镜":15,
	"6倍镜":9,
	"修正系数":1, // 默认1600或1400分辨率是1，其他分辨率需要调整修正幅度，数字增加则压慢，减少则压快
}

/*
*******************************************************************************************************************************************************
***************************************分割线*******************************分割线***************************分割线************************************
*******************************************************************************************************************************************************
*/

// ### 默认已经适配，如果添加或修改，直接复制一份修改：
//   		0. 匹配度：就是当前枪械的识别精度，如果你当前的枪械被识别成别的枪械（当前设备分辨率已经适配图片），那么就将显示的识别枪械匹配度调高一些。
// 			1. 倍镜：可以先不带配件，把所有倍镜带上后调试。
// 			2. 姿势：同倍镜一样，不用带配件，调试两种姿势，最后调配件
// 			3. 配件：分别装备对应的配件，然后测试和调试参数。
// 			4. 调试技巧1: "时间间隔":40, "像素和次数":[{ "1": 27, "2": 10 },],表示，每间隔40ms移动2.7个像素，一共移动10次。（1：是像素点27=2.7像素，2：是需要执行多少次像素，10=移动10次2.7像素每间隔40毫秒）
//			5. 调试技巧2:"时间间隔":40, "像素和次数"::[{ "1": 27, "2": 10 },{ "1": 26, "2": 5 }],表示，分两段，先每间隔40ms移动2.7个像素，一共移动10次。然后再每间隔40ms移动2.6个像素，一共移动5次。

export const 基础参数 = {

	"基础设置":{
		是否开启压枪: true,
		是否开启腰射压枪: false,
		是否开启提示: false,
	},


	"置信度":{
		六倍: 0.75,
		四倍: 0.75,
		三倍: 0.75,
		二倍: 0.75,

		步枪消焰器: 0.8,
		步枪补偿器: 0.8,
		冲锋消焰器: 0.8,
		冲锋补偿器: 0.8,
		狙击消焰器: 0.8,
		狙击补偿器: 0.8,

		拇指握把: 0.8,
		半截握把: 0.8,
		轻型握把: 0.8,
		垂直握把: 0.8,


		战术枪托: 0.8,
		狙击枪托: 0.8,

		六倍: 0.85,
		四倍: 0.85,
		三倍: 0.85,
		二倍: 0.85,
	},
	"找图设置":{
		检查开镜: ['没有开镜', 0.75, 4, 4, 1, 4],
		六倍: ['6倍', 0.75, 4, 1, 4, 1],
	},

	"找色设置":{
		// 重要！！！！！这个色值一定要设置！！！不然没法用压枪！！！
		一号枪械颜色值: ['255:255:223:0', '563:580+558:580'],
		二号枪械颜色值: ['255:255:223:0', '817:584+815:583'],

		// 重要！！！！！这个色值一定要设置！！！不然没法用压枪！！！
		蹲下颜色值: ['255:255:245:135', '1360:685+1359:683+1359:679'],
		趴下颜色值: ['255:255:241:127', '1491:651+1488:651'],

		检查开镜颜色值: ['255:251:232:110', '1536:387+1483:387'],  // 一定要设置的值
	}
}


export const gunConfig = {
    "M4":{
		"匹配度":0.85,
		"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.35,
			"4倍镜":3.71,
			"6倍镜":4.35,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 20 },
				{ "1": 27, "2": 20 },
				{ "1": 28, "2": 25 },
				{ "1": 27, "2": 15 },
				{ "1": 27, "2": 20 },
			],
		},
    },
    "AKM":{
		"匹配度":0.85,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 38, "2": 20 },
			],
		},
    },
	"QBZ":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 28, "2": 10 },
			],
		},
    },
	"AUG":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.65,
			"3倍镜":2.26,
			"4倍镜":3.55,
			"6倍镜":4.15,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 28, "2": 100 },
				{ "1": 27, "2": 100 },
			],
		},
    },
	"ACVAL":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 24, "2": 10 },
			],
		},
    },
	"G36C":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.31,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"SCARL":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.61,
			"6倍镜":4.25,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 200 },
			],
		},
    },
	"M762":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 40, "2": 10 },
				{ "1": 42, "2": 10 },
				{ "1": 45, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 60, "2": 10 },
				{ "1": 60, "2": 10 },
				{ "1": 55, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },
				{ "1": 50, "2": 10 },


			],
		},
    },
	"GROZA":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.85,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数": [
			  { "1": 20, "2": 30 },
			  { "1": 40, "2": 100 },
			],
		},
    },
	"MIGUAN":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"MP5K":{
		"匹配度":0.85,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.33,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.7,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":1.29,
			"冲锋消焰":1.15,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 29, "2": 10 },
			],
		},
    },
	"YENIU":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.33,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":1.29,
			"冲锋消焰":1.15,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":60,
			"像素和次数":[
				{ "1": 31, "2": 100 },
			],
		},
    },
	"P90":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"TANGMUXUN":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"VECTOR":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"UMP45":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":0.8,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.33,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.7,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":1.29,
			"冲锋消焰":1.15,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":60,
			"像素和次数":[
				{ "1": 35, "2": 20 },
				{ "1": 40, "2": 10 },
				{ "1": 44, "2": 20 },
			],
		},
    },
	"UZI":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"MG3":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"M249":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
	"DP28":{
		"匹配度":0.75,
 	 	"倍镜":{ 
			"腰射":2,
			"基础镜":1,
			"2倍镜":1.7,
			"3倍镜":2.3,
			"4倍镜":3.71,
			"6倍镜":4.4,
 	 	},
		"姿势":{
			"蹲":0.8,
			"趴":0.6,
		},
		"配件":{
			"步枪补偿":0.92,
			"步枪消焰":0.92,
			"狙击补偿":0.9,
			"狙击消焰":0.9,
			"冲锋补偿":0.85,
			"冲锋消焰":0.85,
			"拇指握把":0.9,
			"轻型握把":1,
			"半截握把":0.9,
			"垂直握把":0.85,
			"战术枪托":0.9,
			"狙击枪托":0.85,
		},
		"压枪参数":{
			"时间间隔":40,
			"像素和次数":[
				{ "1": 27, "2": 10 },
			],
		},
    },
}