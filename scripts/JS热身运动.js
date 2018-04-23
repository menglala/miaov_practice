window.onload=function(){
	var oBtn1=document.getElementById('btn');
	var oBox=document.getElementById('box');
	var oRed=document.getElementById('red');
	var oSetting=document.getElementById('setting');
	var oYellow=document.getElementById('yellow');
    var oBlue=document.getElementById('blue');
    var oWidth_200=document.getElementById('width_200');
    var oWidth_300=document.getElementById('width_300');
    var oWidth_400=document.getElementById('width_400');
    var oHeight_200=document.getElementById('height_200');
    var oHeight_300=document.getElementById('height_300');
    var oHeight_400=document.getElementById('height_400');
    var oReset=document.getElementById('reset');
    var oSure=document.getElementById('sure');

	oBtn1.onclick=function(){

       oSetting.style.display='block';
	}

	//颜色设置
	function setColor(color){
       oBox.style.background=color;
	}

	oRed.onclick=function(){
		setColor('red');
	}
	oYellow.onclick=function(){
		setColor('yellow');
	}
	oBlue.onclick=function(){
		setColor('blue');
	}

	//宽度设置
	function setWidth(x){
       oBox.style.width=x+'px';
	}
	oWidth_200.onclick=function(){
		setWidth(200);
	}
    oWidth_300.onclick=function(){
		setWidth(300);
	}
	oWidth_400.onclick=function(){
		setWidth(400);
	}

	//高度设置
	function setHeight(x){
		oBox.style.height=x+'px';
	}
	oHeight_200.onclick=function(){
		setHeight(200);
	}
	oHeight_300.onclick=function(){
		setHeight(300);
	}
	oHeight_400.onclick=function(){
		setHeight(400);
	}

	//重置
	function Reset(){
		setColor('yellow');
		setWidth(100);
		setHeight(100);
	}
    oReset.onclick = Reset;
	//确定
	oSure.onclick=function(){
		oSetting.style.display='none';
	}
};