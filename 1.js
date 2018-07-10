document.addEventListener('DOMContentLoaded',function(){
	//khai báo các biến
	var nut=document.querySelector('.nut'),
	menutrai=document.querySelector('.menutrai'),
	den=document.querySelector('.den'),
	khoito=document.querySelector('.noidungto');


	//khi click vào nút xanh
	nut.onclick=function(){
		den.classList.add('len');

		//cho các khối to dịch sang phải luôn
		khoito.classList.add('dichphai');
	}

	//Khi click vào nền đen
	den.onclick=function(){
		den.classList.remove('len');
		khoito.classList.remove('dichphai');
	}
},false)