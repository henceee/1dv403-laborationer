 function Ajax(url,callback){

	var done = 4;
	
	var xhr = this.getXHR();
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState === done){
			
			if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
				
			callback(xhr.responseText);
			}
			else{
				
				console.log("Det blev fel, Beskrivning"+ xhr.status);
			}
			
		}
	
};

xhr.open("get",url , true );

xhr.send(null);

}

Ajax.prototype.getXHR = function(){
	
	var xhr = null;
	
	try{
		xhr = new XMLHttpRequest();	
	}
	catch(error){
		
		try{
			
			xhr = new ActiveXobject("Microsoft.XMLHTTP");
		}
		catch(error){
			
			throw new Error("Hittar ingen XHR objekt");
		}
	}
	return xhr;
};