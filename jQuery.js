window.jQuery = function (selectorOrElements) {
	var array = []
	
	
	//对jQuery 函数参数进行判断。querySelectorAll()匹配指定的CSS选择器的所有节点。
	if(typeof selectorOrElements === 'string'){
		var elements = document.querySelectorAll(selectorOrElements)
		for (let i = 0; i < elements.length; i++) {
			array.push(elements[i])
		}
	}else if(selectorOrElements instanceof Array){
		for (let i = 0; i < selectorOrElements.length; i++) {
			array.push(selectorOrElements[i])
		}
		array.previousSelection = selectorOrElements.previousSelection
		
	}
	
	//在array 绑定点击事件 on（）{}
	array.on = function (eventType, fn) {
		for(var i=0; i<array.length; i++){
			array[i].addEventListener(eventType, fn);
		}
		return array
	};
	
	//array 添加方法 add()
	array.addClass = function (classNanme) {
		for(var i=0; i<array.length; i++){
			array[i].classList.add(classNanme)
		}
		return array
	};
	
	//array 删除方法 remove()
	array.removeClass = function (classNanme) {
		for(var i=0; i<array.length; i++){
			array[i].classList.remove(classNanme)
		}
		return array
	};
	
	//array 切换方法 toggle()
	array.toggleClass = function (classNanme) {
		for(var i=0; i<array.length; i++){
			array[i].classList.toggle(classNanme)
		}
		return array
	};
	
	//array 获取文本内容方法 text()：无值text() 运行if(){执行该代码}；有值text("value") 运行 else(){执行该代码}
	array.text = function (value) {
		
		if(value === undefined){
			var result = []
			for(var i=0; i<array.length; i++){
				result.push(array[i].textContent)
			}
			return result
		}else{
			for(var i=0; i<array.length; i++){
				
				array[i].textContent = value;
			}
			return array
		}
	};
	
	//array 获取HTML 代码 html()：无值html() 运行if(){执行该代码}；有值html("value") 运行 else(){执行该代码}
	array.html = function (htmlString) {
		if(htmlString === undefined){
			var result = []
			for(var i=0; i<array.length; i++){
				result.push(array[i].innerHTML)
			}
			return result
		}else{
			for(var i=0; i<array.length; i++){
				array[i].innerHTML = htmlString;
			}
			return array
		}
	};
	
	//array 获得当前元素集合中每个元素的后代 find()
	array.find = function(selector){
		var array2 = []
		for(var i=0; i<array.length; i++){
			var elements = array[i].querySelectorAll(selector);
			for(var j=0; j<elements.length; j++){
				array2.push(elements[j])
			}
		}
		
		//记录previousSelection（先前选择）
		array2.previousSelection = array
		var array3 = jQuery(array2)
		return array3
	}
	
	//返回previousSelection
	array.end = function () {
		return array.previousSelection
	}
	
	return array
}
window.$ = window.jQuery