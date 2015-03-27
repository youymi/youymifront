var youymi = youymi || {};
youymi.dialog = {
	newDialog: function(option){
		if (!option) {
			option = {};
		}
		var html = [];
		//html.push();
		var domMask = document.getElementById('youymi-dialog-mask');
		if (!domMask) {
			document.body.appendChild(createNodes('<div id="youymi-dialog-mask" class="youymi-dialog-mask"></div>')[0]);
		}
		
		html.push('<div class="youymi-dialog">');
		html.push(option.content || '');
		html.push('<h3>hi</h3>');
    		html.push('</div>');

    		var diglog = createNodes(html.join(""))[0];
    		//alert("height:" + diglog.clientHeight + "width:" + diglog.clientWidth);
    		//ShowObjProperty(diglog);
    		document.body.appendChild(diglog);
    		//alert("height:" + diglog.clientHeight + "width:" + diglog.clientWidth);

    		diglog.style.left =(document.body.clientWidth - diglog.clientWidth)/2 + "px";
    		diglog.style.top =(document.body.clientHeight - diglog.clientHeight)/2 + "px";


	}
}

function ShowObjProperty(Obj) 
{ 
var PropertyList=''; 
var PropertyCount=0; 
for(i in Obj){ 
if(typeof(Obj[i]) != "function") 
PropertyList=PropertyList+i+'属性：'+Obj[i]+'\r\n'; 
else 
PropertyList=PropertyList+i+'方法\r\n'; 
} 
console.log(PropertyList); 
} 