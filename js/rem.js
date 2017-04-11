
window.onload=function(){
    		// 窗口加载完成执行
    		// 初始值
    		var fontSize=100;
    		//pc端
    		var designWidth=750;
    		function rem(){
    			//移动端宽度
    			var CW=document.documentElement.clientWidth;
    			//比例关系
    			var scale=CW/designWidth;
    			// alert(CW);
    			document.querySelector("html").style.fontSize=fontSize*scale+"px";
    		}
    		rem();
    		window.onresize=rem;

    	}