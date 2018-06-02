function getQuery(){
	var str = (location.search.length > 0 ? location.search.substring(1) : ''),
		args = {},
		items = str.length ? str.split("&") : [],
		item = null,
		name = null,
		value = null;
		for (i=0; i < items.length; i++){
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if (name.length) {
				args[name] = value;
			}
		}
	return args;
}
var Subvue = new Vue({
	el:'#main',
	data:{
	
		isShowAllSelect:false,
		condition:null,
		list:[],
		searchGrade:null,
		grade:'年级',
		isShowGrade:false,
		searchSubject:null,
		subject:getQuery().subject ? getQuery().subject : '学科',
		isShowSubject:false,
		searchType:null,
		teacherType:'教师类型',
		isShowType:false,
		 // isActive: true  
	},
	mounted:function(){

		this.searchSubject = getQuery().id
		var data = {
					'subject':this.searchSubject,
					'offset':0,
					'limit':20
				}
		this.getList(data);
	},
	methods:{
		// a1:function(){
		// 	this.aaa=0;
		// },
		// a2:function(){
		// 	this.aaa=1;
		// },
		// a3:function(){
		// 	this.aaa=2;
		// },
		// getQuery:function(){
		// 				var str = (location.search.length > 0 ? location.search.substring(1) : ''),
		// 				args = {},
		// 				items = str.length ? str.split("&") : [],
		// 				item = null,
		// 				name = null,
		// 				value = null;
		// 				for (i=0; i < items.length; i++){
		// 					item = items[i].split("=");
		// 					name = decodeURIComponent(item[0]);
		// 					value = decodeURIComponent(item[1]);
		// 					if (name.length) {
		// 						args[name] = value;
		// 					}
		// 				}
		// 				return args;
		// 			},
		getList:function(dataObj){
			var that = this;
			$.ajax({
				'url':"http://api.zhituteam.com/api/teacher/lists",
				'type':"get",		
				'dataType':"json",
				'data':dataObj,
				success:function(res){

					
					that.list= res.data.teacher;
					if(that.condition == null){
						res.data.condition.grade.forEach(function(item){
							item.isSelected = false;
						})
						res.data.condition.subject.forEach(function(item){
							item.isSelected = false;
						})
						res.data.condition.type.forEach(function(item){
							item.isSelected = false;
						})
						that.condition = res.data.condition;
						that.condition.subject.forEach(function(k){
							if(that.searchSubject == k.id){
								that.subject = k.label;
								k.isSelected = true;
								that.isShowAllSelect = false;
								that.isShowSubject = true;
							}
						})
					}
				}
			})
		},
		clickGrade:function(){
			this.isShowAllSelect = true,
			this.isShowGrade = true;
			this.isShowType = false;
			this.isShowSubject = false;
		},
		clickSubject:function(){
			this.isShowAllSelect = true,
			this.isShowGrade = false;
			this.isShowType = false;
			this.isShowSubject = true;
		},
		clickType:function(){
			this.isShowAllSelect = true,
			this.isShowGrade = false;
			this.isShowType = true;
			this.isShowSubject = false;
		},
		clickItem:function(item){
			this.condition.grade.forEach(function(a){
				a.isSelected = false;
			})
			this.condition.subject.forEach(function(a){
				a.isSelected = false;
			})
			this.condition.type.forEach(function(a){
				a.isSelected = false;
			})
			item.isSelected = true;
			this.isShowAllSelect = false;
			if(this.isShowGrade){
				this.grade = item.label;
				this.searchGrade = item.id;
			}
			if(this.isShowSubject){
				this.subject = item.label;
				this.searchSubject = item.id;
			}
			if(this.isShowType){
				this.teacherType = item.label;
				this.searchType = item.id;
			}
			var data = {
				'grade':this.searchGrade,
				'subject':this.searchSubject,
				'type':this.searchType,
				'offset':0,
				'limit':20
			}
			this.getList(data);
			// alert(JSON.stringify(item));
		}
		// tabsSwitch:function(tabIndex){
  
  //           var tabCardCollection = document.querySelectorAll(".tab"),  
  //               len = tabCardCollection.length;  
  
  //           for(var i = 0; i < len; i++) {  
  //               tabCardCollection[i].style.display = "none";  
  //                // this.tabsName[i].isActive = false;  
  //           }  
  //           // this.tabsName[tabIndex].isActive = true;  
  //           // tabCardCollection[tabIndex].style.display = "block";  
  //       }  
	}
})