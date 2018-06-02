// function getQueryStringArgs(){
//     //取得查询字符串并去掉开头的问号
//      var qs = (location.search.length > 0 ? location.search.substring(1) : "");
//      //保存数据的对象
//     var args = [];
//      //取得每一项
//      var items = qs.length ? qs.split("&") : [];
//     var item = null;
//      var name = null;
//      var value = null;
//      //逐个将每一项添加到args对象中
//      for(var i=0;i< items.length;i++){
//          item = items[i].split("=");
//          name = decodeURIComponent(item[0]);
//        value = decodeURIComponent(item[1]);
//         if(name.length){
//              args[name] = value;
//          }
//      }
//     return args;
// }

//  //假设查询的字符串是?q=javascript&num=10
//      var args = getQueryStringArgs();
//      alert(args["items"]);//javascript
//      alert(args["value"]);//10



var detailAjax = new Vue({
	el:"#main",
	data: { 
		list:{
			subject:[""],
			grade:[""],
			type:[""],
			teacher_case:[
				{},
				{}
			],
		},
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var qs = window.location.search.split("=");
			var id = qs[1]; 
			var that = this;
			$.ajax({
				url:"http://api.zhituteam.com/api/teacher/info/id",
				type:"get",
				dataType:"json",
				data:{
					id:id,
				},
				success:function(res){
					that.list = res.data.teacher;
					console.log(res.data.teacher);
				},

			});

			// console.log(this.list);
		}
	},
})
console.log(window.location.href);