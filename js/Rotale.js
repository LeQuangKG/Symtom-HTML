/*
	Name : Symtom HTML
	Create : Le Viet Quang (quang.le@ringierstudios.com)
	Date : 26 - 11 - 2012
	Version : 1.0
	Project : Burgerstein App
*/

function Rotate(parent){
	var par = this;
	this.isDrag = false;
	this._y ; this._dy;
	this._angel= 0;
	this._startT; this._dTime;
	this._date;
	this._wdL = null; this._wdR = null;
	this._counter=0;this._outLD = null;this._inLD = null;
	this._outRD = null;this._inRD = null;this._pr = parent;
	this._dotL = []; this._dotR = []; this._conLD=null; this._conRD=null;
	this._isL = null;
	this._y; this._dy;
	this._textView = null;
	this._arrow = null;
	this._index = 0;
	this._a =0;
	this._change = 0;
	this._text = null;
	this.appStart = function(){
		par._date = new Date();
		par._wdL = document.getElementById("ldot");
		par._wdR = document.getElementById("rdot");
		par._textView = document.getElementById("textview");
		par._text = document.getElementById("text");
		par._arrow = document.getElementById("arrow");
		
		par._outLD = document.createElement("img");
		par._outLD.src = "img/36.png";
		par._outLD.style.webkitTransform = "translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1,1)";
		par._outLD.id = "left_out";
		
		par._outRD = document.createElement("img");
		par._outRD.id = "right_out";
		par._outRD.src = "img/15.png";
		par._outRD.style.webkitTransform = "translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1,1)";
		
		
		par._conRD = document.createElement("img");
		par._conRD.src = "img/Product.png";
		par._conRD.id = "right_control";
		
		par._conLD = document.createElement("img");
		par._conLD.src = "img/Symtom.png";
		par._conLD.id = "left_control";
		
		par._pr.appendChild(par._outLD);
		par._pr.appendChild(par._outRD);
		par._pr.appendChild(par._conLD);
		par._pr.appendChild(par._conRD);
		par._conLD.addEventListener("mousedown",par.openControl,false);
		par._conRD.addEventListener("mousedown",par.openControl,false);
		par._conLD.addEventListener("touchstart",par.openControl,false);
		par._conRD.addEventListener("touchstart",par.openControl,false);
		par._outRD.addEventListener("mousedown",par.mouseDown,false);
		par._outRD.addEventListener("mousemove",par.mouseMove,false);
		par._outRD.addEventListener("mouseup",par.mouseUp,false);
		par._outLD.addEventListener("mousedown",par.mouseDown,false);
		par._outLD.addEventListener("mousemove",par.mouseMove,false);
		par._outLD.addEventListener("mouseup",par.mouseUp,false);
		par._pr.addEventListener("touchstart",par.mouseDown,false);
		par._pr.addEventListener("touchmove",par.mouseMove,false);
		par._pr.addEventListener("touchend",par.mouseUp,false);
	};
	
	this.openControl = function(e){
		var id = e.target.id;
		par._change = 1;
		par._arrow.style.display = "block";
		par._text.style.display = "none";
		if(id=="right_control"){
			if(par._isL==false) return;
			par._outLD.style.webkitTransition = "all 500ms";
			par._conLD.style.webkitTransition = "all 500ms";
			par._outRD.style.webkitTransition = "all 500ms";
			par._conRD.style.webkitTransition = "all 500ms";
			par._outLD.style.webkitTransform = "rotateZ(0deg) scale(0.01,0.01)"; 
			par._outRD.style.webkitTransform = "rotateZ(0deg) scale(1,1)";
			par._angel = 0;
			//par._change = 0;
			console.log(id);
			par._wdR.style.opacity = 1;
			par._wdL.style.opacity = 0;
			par._index = 0;
			par._isL = false;
			par._textView.style.opacity = 1;
			par._openTextView();
		}
		else if(id=="left_control"){
			if(par._isL==true) return;
			par._outLD.style.webkitTransition = "all 500ms";
			par._conLD.style.webkitTransition = "all 500ms";
			par._outRD.style.webkitTransition = "all 500ms";
			par._conRD.style.webkitTransition = "all 500ms";
			par._outLD.style.webkitTransform = "rotateZ(0deg) scale(1,1)"; 
			par._outRD.style.webkitTransform = "rotateZ(0deg) scale(0.01,0.01)"; 
			par._isL = true;
			par._wdR.style.opacity = 0;
			par._wdL.style.opacity = 1;
			par._angel = 0;
			par._index = 0;
			//par._change = 0;
			par._textView.style.opacity = 1;
			par._openTextView();
		}
		else{
			par._outLD.style.webkitTransition = "all 1500ms";
			par._conLD.style.webkitTransition = "all 1500ms";
			par._outRD.style.webkitTransition = "all 1500ms";
			par._conRD.style.webkitTransition = "all 1500ms";
		}
	};
	
	this.openControlStart = function(e){
		var id = e.target.id;
		par._change = 1;
		par._arrow.style.display = "block";
		par._text.style.display = "none";
		if(id=="right_out"){
			if(par._isL==false) return;
			par._outLD.style.webkitTransition = "all 500ms";
			par._conLD.style.webkitTransition = "all 500ms";
			par._outRD.style.webkitTransition = "all 500ms";
			par._conRD.style.webkitTransition = "all 500ms";
			par._outLD.style.webkitTransform = "rotateZ(0deg) scale(0.01,0.01)"; 
			par._outRD.style.webkitTransform = "rotateZ(0deg) scale(1,1)";
			par._angel = 0;
			//par._change = 0;
			console.log(id);
			par._wdR.style.opacity = 1;
			par._wdL.style.opacity = 0;
			par._index = 0;
			par._isL = false;
			par._textView.style.opacity = 1;
			par._openTextView();
		}
		else if(id=="left_out"){
			if(par._isL==true) return;
			par._outLD.style.webkitTransition = "all 500ms";
			par._conLD.style.webkitTransition = "all 500ms";
			par._outRD.style.webkitTransition = "all 500ms";
			par._conRD.style.webkitTransition = "all 500ms";
			par._outLD.style.webkitTransform = "rotateZ(0deg) scale(1,1)"; 
			par._outRD.style.webkitTransform = "rotateZ(0deg) scale(0.01,0.01)"; 
			par._isL = true;
			par._wdR.style.opacity = 0;
			par._wdL.style.opacity = 1;
			par._angel = 0;
			par._index = 0;
			//par._change = 0;
			par._textView.style.opacity = 1;
			par._openTextView();
		}
		else{
			par._outLD.style.webkitTransition = "all 1500ms";
			par._conLD.style.webkitTransition = "all 1500ms";
			par._outRD.style.webkitTransition = "all 1500ms";
			par._conRD.style.webkitTransition = "all 1500ms";
		}
	};
	
	this._appRotale = function(y){
		if(y<0){
			if(par._isL==true){
				par._angel -= 10;
				par._outLD.style.webkitTransform = "rotateZ("+par._angel+"deg)"; 
				par._index -= 1;
				par._change -= 1;
			}
			else{
				par._angel += 24;
				par._outRD.style.webkitTransform = "rotateZ("+par._angel+"deg)";
				par._index += 1;
				par._change += 1;
			}
		}
		else{
			if(par._isL==true){
				par._angel += 10;
				par._outLD.style.webkitTransform = "rotateZ("+par._angel+"deg)"; 
				par._index += 1;
				par._change += 1;
			}
			else{
				par._angel -= 24;
				par._outRD.style.webkitTransform = "rotateZ("+par._angel+"deg)"; 
				par._index -= 1;
				par._change += 1;
			}
		}
	};
	
	this._openTextView = function(){
		par._textView.style.opacity = 1;
		if(par._change == 0) return;
		if(par._isL==true){
			par._textView.style.left = "333px";
			par._arrow.style.left = "335px";
			if(par._a == 0) {
				par._textView.innerHTML = datal[1];
				par._a = 1;
			}
			else {
				par._textView.innerHTML = datal[0];
				par._a = 0;	
			}
			par._change = 0;
		}
		else{
			par._arrow.style.left = "675px";
			par._textView.style.left = "32px";
			if(par._a == 0) {
				par._textView.innerHTML = datar[1];
				par._a = 1;
			}
			else {
				par._textView.innerHTML = datar[0];	
				par._a = 0
			}
			par._change = 0;
		}
		
	}
	
	
	this.mouseDown = function(e){
		//console.log("mousedown");
		if(par._isL == null) {
			par.openControlStart(e);
			//return;
		}
		par._date = new Date();
		e.preventDefault();
		par._text.style.display = "none";
		/*if(par._isL == null) {
			par._openTextView();
			return;
		}*/
		if(e.clientY) par._y = e.clientY;
		else par._y = e.changedTouches[0].clientY;
		par._isDrag = true;
		par._startT = par._date.getTime();
		par._wdL.style.opacity = 0;
		par._wdR.style.opacity = 0;
		par._textView.style.opacity = 0;
	};
	
	this.mouseMove = function(e){
		e.preventDefault();
		if(par._isL == null) return;
		if(par._isDrag == false) return;
		if(e.clientY) var y = e.clientY;
		else var y = e.changedTouches[0].clientY;
		par._dy = y - par._y;
		if(Math.abs(par._dy)>= 768/360){
			par._appRotale(par._dy);
			par._y = y;
		}
	}
	
	this.mouseUp = function(){
		par._isDrag = false;
		par._date = new Date();
		var endT =  par._date.getTime();
		par._dTime = endT - par._startT;
		if(par._isL==true){
			par._wdL.style.opacity = 1;
		}
		else{
			par._wdR.style.opacity = 1;
		}
		par._openTextView();
	}
	
	this.appStart();
}