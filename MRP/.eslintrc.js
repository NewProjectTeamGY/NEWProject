/* 0 off； 1 warn； 2 error */
module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"parser": "babel-eslint",
	"extends": ["eslint:recommended", "plugin:react/recommended", "standard"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"ecmaVersion": 7,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": ["react", "react-native"],
	"rules": {
		"indent": [2, "tab", { "SwitchCase": 1 }],
		"linebreak-style": [2, "unix"],
		// "quotes": 2,
		"jsx-quotes": [2, "prefer-double"],
		"semi": 0, 
/* --------react部分-------- */
		//prop-types 检测props 关
		"react/prop-types": 0,
		"react/no-children-prop": 0,
		"react/no-deprecated": 0,
/* --------ES6语法部分-------- */
	/*-------------------↓↓↓↓↓↓↓↓ eslint:recommended 默认部分 ↓↓↓↓↓↓↓↓-------------------*/
		/*
			派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()
			"constructor-super": 2,
			不允许修改类声明的变量
			"no-class-assign": 2,
			不允许改变用const声明的变量
			"no-const-assign": 2,
			禁止类成员中出现重复的名称
			"no-dupe-class-members": 2

		*/
	/*-------------------↑↑↑↑↑↑↑↑ eslint:recommended 默认部分 ↑↑↑↑↑↑↑↑-------------------*/



	/*-------------------↓↓↓↓↓↓↓↓ ES6手配部分 ↓↓↓↓↓↓↓↓-------------------*/
	
		//允许使用tab缩进
		"one-var": 0,
		//允许使用tab缩进
		"no-tabs": 0,
		//禁止未使用过的变量
		"no-unused-vars": [1, { "vars": "all", "args": "all", "ignoreRestSiblings": false }],
		//允许console
		"no-console": 0,
		//箭头函数 当只有一个参数时允许省略参数
		"arrow-parens": [2, "as-needed"],
		//要求箭头函数的箭头之前或之后有空格
		"arrow-spacing": [2, { "before": true, "after": true }],
		//[没有混乱的箭头]   箭头函数（=>）是在语法一些比较运算符（类似>，<，<=，和>=）。此规则警告不要在可能与比较运算符混淆的地方使用箭头函数语法。即使箭头函数的参数被parens包裹，这个规则仍然会警告它，除非allowParens被设置为true。
		"no-confusing-arrow": [2, {"allowParens": false}],
		//推荐使用箭头函数作为回调
		"prefer-arrow-callback": 2,
		//禁止重复导入
		"no-duplicate-imports": 2,	//"no-duplicate-imports": [2, { "includeExports": true }]
		//不允许在对象上使用不必要的计算属性密钥
		"no-useless-computed-key": 2,
		//强制在对象字面量的键和值之间使用一致的空格
		"key-spacing": [2, { "beforeColon": false, "afterColon": true, "mode": "strict" }],
		//要求使用 let 或 const 而不是 var
		"no-var": 2,
		//强制在逗号周围使用空格
		"comma-spacing": [2, { "before": false, "after": true }],
		//强制在花括号中使用一致的空格
		"object-curly-spacing": [2, "always"],
		//要求中缀操作符周围有空格
		"space-infix-ops": 2,
		//强制分号后有空格
		"semi-spacing": 2,
		//统一大括号风格要求  --- else 关键字要与花括号保持在同一行
		"brace-style": [2, "1tbs", { "allowSingleLine": true }],
	/*-------------------↑↑↑↑↑↑↑↑ ES6手配部分 ↑↑↑↑↑↑↑↑-------------------*/


	/*-------------------↓↓↓↓↓↓↓↓ React部分 ↓↓↓↓↓↓↓↓-------------------*/
		// 允许state值 被=号赋值
		"react/no-direct-mutation-state": 0,

	/*-------------------↑↑↑↑↑↑↑↑ React部分 ↑↑↑↑↑↑↑↑-------------------*/

		//该规则要求在非空文件末尾至少存在一行空行（或缺少换行）。"always" (默认) 强制使用换行 (LF) "never" 强制文件末尾不要有换行符
		"eol-last": [1, "never"],

		"no-irregular-whitespace": [2, { "skipStrings": true, "skipComments": true}]

		//要求使用 === 和 !== (eqeqeq)
		//"eqeqeq": [1, "always"],
	}
};