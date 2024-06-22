// 햄버튼 클릭
function ham_click(){
	document.getElementById('ham1').classList.toggle('ham1top');
	document.getElementById('ham2').classList.toggle('op');
	document.getElementById('ham3').classList.toggle('ham3down');
	document.getElementById('hamDown').classList.toggle('open');
}

//nav
let gnbs = document.querySelectorAll('.gnb>li');
let sub1s = document.querySelectorAll('.sub1');
let sub2s= document.querySelectorAll('.sub2');
let twos = document.querySelectorAll('.two');
let bg = document.querySelector('.nav_bg')

gnbs.forEach(function(gnb,i){
    gnb.addEventListener('mouseover',function(){
        for(let j=0;j<gnbs.length;j++){
            sub1s[j].style.display='none'
        }
        sub1s[i].style.display='flex'
		bg.style.display='block'
    })
    gnb.addEventListener('mouseout',function(){
        for(let j=0;j<gnbs.length;j++){
            sub1s[j].style.display='none'
        }
        sub1s[i].style.display='none'
		bg.style.display='none'
    })
})

twos.forEach(function(two,i){
    two.addEventListener('mouseover',function(){
        for(let j=0;j<twos.length;j++){
            sub2s[j].style.display='none'
        }
        sub2s[i].style.display='block'
    })
    two.addEventListener('mouseout',function(){
        for(let j=0;j<twos.length;j++){
            sub2s[j].style.display='none'
        }
        sub2s[i].style.display='none'
    })
})

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