/**
 * App Theme - Colors
 *
 */
'use strict';
const LGColor = {
	mainLG: ['#FC6E2A', '#FC6E2A'],
	tranLG: ['transparent', 'transparent']
};
const app = {
	rootGrayColor: '#f7f7f7',
	mainColor: '#FC6E2A'
	// subColor: '#ff9a4c'
};
const text = {
	highRiskColor: '#ff5d60',
	mediumRiskColor: '#ffb51b',
	lowRiskColor: '#05cb98',
	blackColor: '#000000',
	boldBlackColor: '#1a1a1a',
	lightBlackColor: '#333333', // textDefault
	middleBlackColor: '#666666',
	lightGrayColor: '#808080',
	grayColor: '#999999',
	ironColor: '#cccccc',
	whiteColor: '#ffffff',
	redColor: '#ff0000',
	warmRedColor: '#ec0000',
	msgTipColor: '#ff4040',
	orangeColor: '#ff9600'
};

const background = {
	mainBg: '#4e89eb',
	whiteBg: '#ffffff', // textPrimary
	subGrayBg: '#e1e1e1',
	grayBg: '#e5e5e5',
	lightGrayBg: '#f7f4f8',
	blueBg: '#0386ff',
	ironBg: '#cccccc',
	redBg: '#ff0000',
	tranBg: 'transparent'
};

const border = {
	mainBorder: '#4e89eb',
	grayBorder: '#e5e5e5',
	blueBorder: '#0386ff',
	ironBorder: '#cccccc',
	whiteBorder: '#ffffff',
	redBorder: '#ff0000'
};
export default {
	...app,
	...text,
	...background,
	...border,
	...LGColor
};