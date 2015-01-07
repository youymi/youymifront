var youymi = youymi || {};
youymi.pager = {
	newpage : function(pager1){
		var pager = {
			currentPage: pager1.currentPage || 1,
			pageSize: pager1.pageSize || 10,
			totalRecord: pager1.totalRecord,
			pageDisplayCount: pager1.pageDisplayCount || 5,
			domid: pager1.domid,
			onitemclick: pager1.onitemclick || function(pageIndex, data){ 
				//alert(pageIndex); 
				return true;},
			queryDataCallback: pager1.queryDataCallback || function(){return null},
			getPageCount: function(){
				if  (this.totalRecord > 0) {
					return Math.ceil(this.totalRecord/ this.pageSize);
				}
				return 0;
			},
			bindEvent: function(obj){
				var that = this;
				var itemclick = function(){
					// if (this.getAttribute("page")) {
					// 	alert(this.getAttribute("page"));
					// }
					var pageIndex = this.getAttribute("page");
					if  (pageIndex) {
						pageIndex = parseInt(pageIndex);
						var isContinue = that.onitemclick(pageIndex, that.queryDataCallback());
						if (isContinue) {
							that.currentPage =  pageIndex;
							that.init();
						}
					} else {
						alert("do not click");
					}
					
				};
				var nodes = findElementsByClassName(obj, "item");
				for (var i = 0; i < nodes.length; i++) {
					nodes[i].onclick = itemclick;
				}
			},
			init : function() {
				var html = [];
				html.push('<div  class="youymi-pager g-clearfix">');
				html.push('<ul class="">');
				var count = this.getPageCount();
				var increase = Math.ceil((this.pageDisplayCount -1)/2);
				if (this.currentPage > count) {
					this.currentPage = count;
				}

				//previous page
				if (this.currentPage == 1) {
					html.push('<li class="item prev prev-disabled"><span class="num ">&laquo; 上一页</span></li>');
				} else{
					html.push('<li class="item prev " page="'  + (this.currentPage -1)  +'"><a class="num">&laquo; 上一页</a></li>');
				}

				if ( count > this.pageDisplayCount &&  (this.currentPage  + increase - this.pageDisplayCount) >=1)  {
					html.push('<li class="item" page="1"><a class="num">1</a></li>');
				}

				if ((count - this.pageDisplayCount) >=2 &&  (this.currentPage  + increase - this.pageDisplayCount) >=2)  {
					html.push('<li class="item" page="2"><a class="num">2</a></li>');
				}

				if (this.currentPage > this.pageDisplayCount && (count - this.pageDisplayCount) >=3 &&  (this.currentPage  + increase - this.pageDisplayCount) >=3)  {
					html.push('<li class="item dot"><span>...</span></li>');
				}



				var end =1;
				 if ( (this.currentPage + increase) <=  count ) {
				 	end =  this.currentPage + increase;
				 	if (end  < this.pageDisplayCount && this.pageDisplayCount <=  count)  {
				 		end = this.pageDisplayCount;
				 	}
				 } else {
				 	end = count;
				 }

				 var begin = end - this.pageDisplayCount + 1;
				 if (begin <  1) {
				 	begin = 1;
				 }

				 for (i = begin; i <= end; i++) {
				 	if (i == this.currentPage ) {
				 		html.push(' <li class="item active"><span class="num">'+i+'</span></li>');	
				 	} else {
				 		html.push(' <li class="item" page="'  + i  +'"><a class="num">'+i+'</a></li>');	
				 	}
				 }

				 if (count > end) {
				 	html.push('<li class="item dot"><span class="">...</span></li>');
				 }

				 //nexg page
				if (this.currentPage == count) {
					html.push('<li class="item next next-disabled"><span class="num">&laquo; 下一页</span></li>');
				} else{
					html.push('<li class="item next "  page="'  + (this.currentPage +1)  +'"><a class="num">&laquo; 下一页</a></li>');
				}


				 html.push('  </ul>     <div class="total">     共' +count + '页，   </div>       <div class="form">');

				 html.push(' <span class="text">到第</span>');
		
				 var nextpage = this.currentPage;
				 if (this.currentPage < count) {
				 	nextpage = this.currentPage + 1;
				 }
				 html.push('  <input class="input J_Input" value="'+nextpage+'" min="1" max="'+ count+'" aria-label="页码输入框" type="number">');
				 html.push('<span class="text">页</span>');
				 html.push(' <span class="btn j-next-submit" role="button" tabindex="0">确定</span>');
				 html.push('');

				html.push('  </div>  </div>');

				if (this.domid) {
					el = document.getElementById(this.domid);
					if (el) {
					el.innerHTML = html.join("");
					}

					this.bindEvent(el);
				}

				return html.join("");
			}
		};
		//console.log(pager);

		pager.init();
		return  pager;
	}
};

