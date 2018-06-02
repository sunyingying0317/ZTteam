# ZTteam
用vue.js制作知涂教育APP
#### 运用HTML、CSS以及DIV-CSS3制作知涂教育APP移动端页面框架
#### 运用DIV实现基本移动端框架结构
主要运用relative和absolute相对定位和绝对定位实现左边固定、右边自适应的框架结构，就是对整个中间框架写一个position：relative;一个相对定位，在对左侧需要固定的位置做一个position:absolute;一个绝对定位来实现左边固定，右边文字自适应的方法
对页面的无序列表清除浮动
#### 清除浮动代码的css样式
```
.clear::after{
	display:block;
	clear:both;
	content:"";
	height:0;
}
```
#### 运用vue.js实现页面的渲染
用 v-for 指令根据一组数组的选项列表进行渲染。v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。
#### 运用JSON获取后端数据
在这里我觉着最重要的就是获取地址来的参数，并且总结了两组方法
* 1用split()方法对参数地址字符串分割，取得第0个字符串作为取得参数的地址。代码如下：
```
var qs = window.location.search.split("=");
		var id = qs[1]; 
```
* 2用字符串分割的方法取得参数，代码如下：
```
function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
     var qs = (location.search.length > 0 ? location.search.substring(1) : "");
     //保存数据的对象
    var args = [];
     //取得每一项
     var items = qs.length ? qs.split("&") : [];
    var item = null;
     var name = null;
     var value = null;
     //逐个将每一项添加到args对象中
     for(var i=0;i< items.length;i++){
         item = items[i].split("=");
         name = decodeURIComponent(item[0]);
       value = decodeURIComponent(item[1]);
        if(name.length){
             args[name] = value;
         }
     }
    return args;
}
```
#### 运用Swiper插件实现对图片的自动轮播
学会熟练运用图片转换，按钮，自动轮播，样式的方法
通过这次知涂教育APP的制作，并且第一次运用vue.js和后端同学进行交互，做出了这个小项目，对vue.js有了初步的了解和对Swiper插件有了更深的了解，对参数字符串的划分意义更加深刻

