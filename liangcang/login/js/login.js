var oUsername=document.getElementById('username');
var oPassword=document.getElementById('password');
var oLogin=document.getElementById('login');
oLogin.onclick=function(){
	var strUsername=oUsername.value;
	var strPassword=oPassword.value;
	var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
 	 if(xhr.readyState==4){
 		if(xhr.status>=200&&xhr.status<300||xhr.status==304){
 			console.log( xhr.responseText );
				
				var str = xhr.responseText;
				
				
				var obj = JSON.parse(str);
				
				if (obj.code == 0) {
					alert("登陆成功")
				} else {
					alert(obj.message)
				}
 		}
 	 }
    }
  
 	xhr.open("POST", "http://h6.duchengjiu.top/shop/api_user.php", true);
 	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 	xhr.send("username="+strUsername+"&password="+strPassword+"&status=login")
}
