// nav
let gnbs = document.querySelectorAll('.gnb li');
let hovMwrap = document.querySelector('.hover_menu_wrap');
let hovMenus = document.querySelectorAll('.hover_menu_wrap ul');

gnbs.forEach(function(gnb,i){
	gnb.addEventListener('mouseover',function(){
		for(let j=0;j<gnbs.length;j++){
			hovMenus[j].style.display = 'none';
			hovMwrap.style.display = 'none';
		}
		hovMenus[i].style.display = 'flex';
		hovMwrap.style.display = 'flex';
	})
	gnb.addEventListener('mouseout',function(){
		for(let j=0;j<gnbs.length;j++){
			hovMenus[j].style.display = 'flex';
			hovMwrap.style.display = 'flex';
		}
		hovMenus[i].style.display = 'none';
		hovMwrap.style.display = 'none';
	})
})

hovMenus.forEach(function(hovMenu,i){
	hovMenu.addEventListener('mouseover',function(){
		for(let j=0;j<hovMenus.length;j++){
			hovMenus[j].style.display = 'none';
			hovMwrap.style.display = 'none';
		}
		hovMenus[i].style.display = 'flex';
		hovMwrap.style.display = 'flex';
	})
	hovMenu.addEventListener('mouseout',function(){
		for(let j=0;j<hovMenus.length;j++){
			hovMenus[j].style.display = 'flex';
			hovMwrap.style.display = 'flex';
		}
		hovMenus[i].style.display = 'none';
		hovMwrap.style.display = 'none';
	})
	})

// 햄버튼 클릭
function ham_click(){
	document.getElementById('ham1').classList.toggle('ham1top');
	document.getElementById('ham2').classList.toggle('op');
	document.getElementById('ham3').classList.toggle('ham3down');
	document.getElementById('hamDown').classList.toggle('open');
}

//3deps 메뉴
let subs = document.querySelectorAll('.subs')
let subMenu = document.querySelectorAll('.sub')
let subUls = document.querySelectorAll('.sub ul')

subs.forEach(function(sub,i){
	sub.addEventListener('mouseover',function(){
		for(let j=0;j<subs.length;j++){
			subMenu[j].style.display='none'
		}
		subMenu[i].style.display='block'
	})
	sub.addEventListener('mouseout',function(){
		for(let j=0;j<subs.length;j++){
			subMenu[j].style.display='none'
		}
		subMenu[i].style.display='none'
	})
})


//hover, span 효과
let hamdownLis = document.querySelectorAll('.ham_down li');
let hovLis = document.querySelectorAll('.hover_menu_wrap li');
let hamSpans = document.querySelectorAll('.ham_down span');
let hovSpans = document.querySelectorAll('.hover_menu_wrap span');


hamdownLis.forEach(function(hamdownLi,i){
	hamdownLi.addEventListener('mouseover',function(){
		for(let j=0;j<hamdownLis.length;j++){
			hamdownLis[j].style.color='#6c6b6b';
		}
		hamdownLis[i].style.color='#ed1c24';
	})
})
hovLis.forEach(function(hovLi,i){
	hovLi.addEventListener('mouseover',function(){
		for(let j=0;j<hovLis.length;j++){
			hovLis[j].style.color='#6c6b6b';
		}
		hovLis[i].style.color='#ed1c24';
	})
})


//탭기능
let top_boxs = document.querySelectorAll('.top_box2_list>li');
let top_arits = document.querySelectorAll('.sec7 .top_arti');


top_boxs[0].classList.add('tap')
// top_arits[0].classList.add('view')
top_arits[0].style.display='block';


top_boxs.forEach(function(box,i){
	box.addEventListener('click', function(){
		for(let j=0;j<top_boxs.length;j++){
			top_boxs[j].classList.remove('tap');
			top_arits[j].style.display='none';
		}
		box.classList.add('tap');
		top_arits[i].style.display='block';
		
	})
})