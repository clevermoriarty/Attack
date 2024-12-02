function findCsrf(cookieName) {
	var nameEQ = cookieName + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i].trim();
		if (c.indexOf(nameEQ) == 0){ 
			return c.substring(nameEQ.length,c.length)
		};
	}
	return null;
}
function xhr() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
	xmlhttp=new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
	try {
	    xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e) {
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
    }
    return xmlhttp;
}
function getPlainResponse(action, params) {
    
    var objHTTP,result;objHTTP = xhr();
    objHTTP.open('POST', action, false);
    objHTTP.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    objHTTP.setRequestHeader('Content-length', params.length);
    objHTTP.setRequestHeader('X-ZCSRF-TOKEN',"crmcsrfparam="+findCsrf('crmcsr'))
    objHTTP.send(params);
    
    return objHTTP;

}

var params= {"firstName":"","lastName":"Leps","associatedDepartmentIds":["1065631000000006907"],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"lepselaydo@gufum.com"}//No I18N
var result = getPlainResponse('https://crmplus.zoho.com/supportapi/zd/clevermoriarty/api/v1/agents?portalname=clevermoriarty', JSON.stringify(params)); //No I18N 
