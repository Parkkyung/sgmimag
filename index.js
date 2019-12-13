var User = "회원";
		var admin;
		var admin2;
		var admin3;
		admin = "박경수";
		admin2 = "조동준";
		admin3 = "안태규";
		var password;
		var password2;
		var password3;
		password = "123456";
		password2 = "cho11255";
		password3 = "test";
    password4 = "User";
        name=prompt("이름을 입력해주세요.");
        if(name != admin && name != admin2 && name != admin3 && name != User) {
		alert("이름을 제대로 입력해 주세요."); 
   		document.write("사이트를 제접속 해주세요.");
		} 
else if(name == admin || name == admin2 || name == admin3 || name == User){
     var passwordcheck = prompt("비밀번호를 입력해주세요");
    if(name == admin) {
      if(passwordcheck == password) {
           alert("[관리자]"+name + "님 로그인 성공하였습니다!");
		   document.querySelector("#name").innerHTML = "<b><big>"+ name + "</b></big>님 어서오세요!";
           document.querySelector("#site").innerHTML = "<a href= index-1.html><br><big>"+"심경마이맥"+ "</big></a></br>"+"<sd>"+"사이트 바로가기"+"</sd>";
       } else {
           alert("비밀번호가 틀림");
		   document.write("사이트를 제접속 해주세요.");
       }
    } else if(name == admin2) {
       if(passwordcheck == password2) {
		   alert("[관리자]"+name + "님 로그인 성공하였습니다!");
		   document.querySelector("#name").innerHTML = "<b><big>"+ name + "</b></big>님 어서오세요!";
           document.querySelector("#site").innerHTML = "<a href= index-1.html><br><big>"+"심경마이맥"+ "</big></a></br>"+"<sd>"+"사이트 바로가기"+"</sd>";
       } else {
           alert("비밀번호가 틀림");
		   document.write("사이트를 제접속 해주세요.");
       }
    }
	else if(name == admin3) {
       if(passwordcheck == password3) {
	  	 alert("[관리자]"+name + "님 로그인 성공하였습니다!");
       document.querySelector("#name").innerHTML = "<b><big>"+ name + "</b></big>님 어서오세요!";
       document.querySelector("#site").innerHTML = "<a href= index-1.html><br><big>"+"심경마이맥"+ "</big></a></br>"+"<sd>"+"사이트 바로가기"+"</sd>";
       } else {
           alert("비밀번호가 틀림");
		   document.write("사이트를 제접속 해주세요.");
       }
}
else if(name == User) {
       if(passwordcheck == password4) {
	     alert(name + "님 로그인 성공하였습니다!");
       document.querySelector("#name").innerHTML = "<b><big>"+ name + "</b></big>님 어서오세요!";
       document.querySelector("#site").innerHTML = "<a href= index-1.html><br><big>"+"심경마이맥"+ "</big></a></br>"+"<sd>"+"사이트 바로가기"+"</sd>";
       } else {
       alert("비밀번호가 틀림");
		   document.write("사이트를 제접속 해주세요.");
       }
}
else {
       alert("알수 없는 오류 발생")
    }
}
