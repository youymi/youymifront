function getElementsByClassName(className, tagName) {
	//var now = new Date().getTime();
    var ele = [],
        all = document.getElementsByTagName(tagName || "*");
    for (var i = 0; i < all.length; i++) {
    	// 	/(\s|^)pager(\s|$)/g
        if (all[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
            ele[ele.length] = all[i];
        }
    }
    //console.log(new Date().getTime() - now);
    return ele;
}

function findElementsByClassName(parentObj,className) {
	var now = new Date().getTime();
    	var ele = [];
    	if (parentObj && parentObj.hasChildNodes()) {
    		var childden = parentObj.childNodes;
    		var node = null;
    		for (var i = 0; i < childden.length; i++) {
    			 node = childden[i];
    			 if (node.nodeType == 1) {
    			 	if (node.hasAttribute("class") &&node.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
    			 		ele.push(node);
    			 	}
    			 	//element node
    			 	if (node.hasChildNodes()) {
    			 		ele = ele.concat(findElementsByClassName(node,className));
    			 	}
    			 }
    		}

    	}  

    	return ele;
 
}


 function setSelectedItemByValue(objSelect, value) {  
        for(var i=0;i<objSelect.options.length;i++) {  
            if(objSelect.options[i].value == value) {  
                objSelect.options[i].selected = true;  
                break;  
            }  
        }  
    }  