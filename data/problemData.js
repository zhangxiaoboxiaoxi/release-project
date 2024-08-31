export default {
  /* 问题汇集 */
  problem: [
    {
      name: "面试题",
      type: "other",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"other",
      modelName:"other",
      solveText: `
        1.https://zhuanlan.zhihu.com/p/60832562
        2.https://baijiahao.baidu.com/s?id=1708209657419920457&wfr=spider&for=pc
        3.JS
        https://baijiahao.baidu.com/s?id=1706449062196213790&wfr=spider&for=pc
      `
    },
    {
      name: "ES6新特性",
      type: "jsToolFn",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"jsToolFn",
      modelName:"jsToolFn",
      solveText: `
        1.变量声明
              
        let变量、const常量
        声明变量之前不可以调取使用，有块级作用域，不支持变量提升
        
        2.箭头函数: 函数定义不在只用function,而是利用()=>来定义
        3.模板字符串:  增强版的字符串，使用反引号标识，可以当作普通字符串使用，也可以定义多行字符串
        4.数组处理:  for of循环遍历、set、map
        5.引入方式的处理:  import、export导入导出，JS原生支持模块化module模板
        6.扩展运算符...: 把数组或类数组对象展开成一系列用逗号隔开的散列值
        7.class语法糖
        8.async、await异步同步方法
        9.promise
        
        promise是承诺的意思，其背后的核心思想是，承诺表示异步操作的结果，主要是用来解决回调地域的问题
        promise就是一个容器，里面存放的是将来才会结束的事件（异步请求）。
        有三种状态：pending初始状态进行中
              fulfilled 成功
              rejected  失败
        状态不受外界影响，只有promise中将来会结束的那个事件才会影响，也就是异步操作的结果才可以决定当前是那一种状态
        pending -》 fulfilled
        pending -》	rejected

        创建promise对象，需要传入2个回调函数：resolve解决、reject拒绝，如果2个回调函数都不调用，其默认是pending的状态

        var promise = new promise(function(resolve,reject){
          resolve(); //pending -》 fulfilled  成功
        })
        var promise = new promise(function(resolve,reject){
          reject(); //pending -》 rejected	失败
        })
        promise提供了then方法和catch方法，分别用来处理已成功和失败的状态
      `
    },
    {
      name: "js、jquery面试小知识",
      type: "jsToolFn",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"jsToolFn",
      modelName:"jsToolFn",
      solveText: `
        1.倒三角绘制
        <pre >
        document.write("表格标签")
        for(var i=9;i>=1;i--){
          document.write("行标签")
          for(var s=9;s>=i;s--){
            document.write("td标签 's'+'*'+'i'+'='+s*i td标签结尾")
          }
          document.write("行标签结尾")
        }
        
        2.判断素数，素数只能被1和它本身整除的数
        
        var num = 14;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {//表示有数可以整除
                document.write(num + "是一个非素数至少能被" + i + "整除");
                break;
            }
        }
        if (i == num) {
            document.write(num + "是素数");
        }
        
        3.浅拷贝和深拷贝
        
        浅拷贝和深拷贝都是针对对象属性为对象的，基本数据类型进行赋值操作的时候，是将其直接赋值给新的变量，也就是该变量是原变量的副本,这个时候你修改两者中的任何一个都不会受
        对方影响，而对于对象或者引用数据来说在浅拷贝时，只是将对象赋值了一份，也就是内存地址，即两个不同变量指向了同一个内存地址，那么改变任意一个变量值都是在改变这个内存地址中
        存储的值，所以两个变量值都会变化；
        
        <p style="padding-left:20px;">浅拷贝,粗俗的理解就是有一个b对象，a复制了b对象，a对象发生了改变，原先的b对象也改变了。其就是a复制的是b的地址，第一层的属性，而不是数据，所以它们还是立足于一个公共点，指向相同。
        <p style="padding-left:20px;">深拷贝,就是有一个b对象，a复制了b，且a发生了变化，但是b不受影响。其就是a复制了b所有的属性和方法，开辟了另一个对象空间存放，各自有各自的指向。
        <p style="padding-left:20px;">深拷贝方法：
        
        1.JSON.stringify() 先将其确保是json格式，在其使用JOSN.parse() 将json字符串转化为js对象，且属性名字没有双引号；
        2.递归
        
        4.Javascript数据类型：基本数据(值)类型、引用类型
        <p style="padding-left:20px;">值类型：String、Number、Boolean、Null、Undefined、Symbol(Es6新增)
        <p style="padding-left:20px;">引用类型：Object、function、Array
        5.js判断数据类型的方法：typeof、instanceof、Array.isArray(判断是否为数组)、Object.prototype.toString.call
        <p style="padding-left:20px;">typeof检查到引用数据类型的时候，返回的都是object，而instanceof则不会
        6.null表示变量值为空，清空变量；undefined表示声明了变量，但是没有赋值；NaN情况很多，和任何数据都不相等，任何数据和NaN运算都是NaN
        7.给一个元素绑定2个点击事件：addEventListener
        8.事件委托/事件代理：当需要给每一个子元素设置事件的时候，把其事件委托给父元素。如每一个li都要设置点击事件，为其节省内存，给父元素ul监听
        9.事件冒泡：一个为a的div标签里面包含了一个bdiv，给其都设置点击事件，会先执行b在执行a
        
        当子元素（事件源）事件触发，事件会沿着包含关系，依次往上级传递，每一级都可以感知到事件，直到触发根元素（根源)
        终止事件冒泡
            event.stopPropagation()
            判断event.target 和 event.currentTarget是否相等
        
        10.闭包：函数使用了不属于自己的局部变量，作用：为了避免全局污染。缺陷：使用过多会导致内存泄漏
        11.构造函数
        
        this指向,是其new的那个对象，如下，this指向b
        function aaa(label,value){
          this.label=label;
          this.value=value;
          this.chinda = fbunction(){
            console.log("构造函数")
          }
        }
        var b = new aaa("label模块","value数据");
        console.log(b)
        b.chinda();
        // aaa {label: 'label模块', value: 'value数据', chinda: ƒ}
        // 1111
        
        12.回调函数
        
        function aaa(){
          console.log("回调函数")
        }
        function bbb(){
          aaa();
        }
        bbb();
        
        12.箭头函数
        
        aaa = () =>{
          console.log("箭头函数")
        }
        
        13.事件函数this指向
        
        this指向触发事件函数的标签；settimeout this指向window
        
        14.0.1+0.2不等于0.3是为什么
        
        JS使用的是双精度版本，即是IEEE 754双精度版本(64位)，这个版本存在精度问题，就会导致上面的情况，在计算机中无论是定点数还是浮点数都是以多位二进制的方式进行存储的
        0.1相当于0.100…001，但是为什么在控制台打印0.1的时候输出的是0.1呢，因为在输入内容进行转换的时候，二进制转化为十进制，然后十进制在转化为字符串了，所以打印出来的值
        是一个近似值
        
        15.原型链
        
        原型：
          所有的对象都是通过new 函数()创建的。这种函数叫做构造函数；
          函数可以生产出对象，但是函数也是一个对象，它是用过new function()创建的；
          对象赋值给变量后，变量保存的是地址，地址指向的是对象所在的内存；
          原型本质就是对象，所有的函数都有原型属性protype，protyep是一个对象，它里面包含了一个属性constructor,它指向函数对象本身；
            所有的对象都是由proto隐式原型的，它的指向是创建该对象的构造函数原型protype，查找对象成员，如果原型里面没有，则会再proto中查找；
          所有函数的隐式原型指向的都是函数function的原型；
          所有函数原型的隐式原型指向的是object的原型
        原型链：
          原型protype本身就是一个对象，因此它也是有隐式原型的，指向规则不变；这样一来，从一个对象出发依次寻找隐式原型的指向，形成的链条，叫做原型链
        https://blog.csdn.net/qq_36996271/article/details/82527256
        https://baijiahao.baidu.com/s?id=1706449061678327484&wfr=spider&for=pc
        
        16.防抖和节流 https://zhuanlan.zhihu.com/p/386616278
        17.面向对象
      `
    },
    {
      name: "数组方法",
      type: "jsToolFn",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"jsToolFn",
      modelName:"jsToolFn",
      solveText: `
        1.join 数组转字符串
        var arr=[1,2,3,4] console.log(arr.join(":")) //1:2:3:4
        2.push 向数组末尾添加一个或者多个元素
        var arr=[1,2,3,4] console.log(arr.push("111","222")) //[1,2,3,4,111,222]
        3.pop 删除数组最后一个元素
        var arr=[1,2,3,4] console.log(arr.pop()) //[1,2,3]
        4.shift 删除数组中得第一个元素
        var arr=[1,2,3,4] console.log(arr.shift()) //[2,3,4]
        5.unshift 向数组开头添加一个或者多个元素
        var arr=[1,2,3,4] console.log(arr.unshift("111")) //[111,1,2,3,4]
        6.sort 数组排序
        var arr=[3,2,1,4] console.log(arr.sort()) //[1,2,3,4]
        <pre style="">
        var arr = [1,100,20,5]
        console.log(arr.sort()) //[1,100,5,20]
        function aaa(a,b){return a-b}
        console.log(arr.sort(aaa)); //[1,5,20,100]
        
        6.reverse 反转数组
        var arr=[3,2,1,4] console.log(arr.reverse()) //[4,1,2,3]
        7.concat 数组合并
        var arr1=[1,2,3,4] var arr2=[5,6,7] console.log(arr.concat(arr2)) //[1,2,3,4,5,6,7]
        8.slice 数组截取 如果是负数，那么它规定从数组尾部开始算起的位置,-1是最后一个元素
        var arr=[1,2,3,4,5,6] console.log(arr.slice(1,-2)) //[2,3,4]
        9.spilce 删除数组元素
        var arr1=[1,2,3,4,5,6]  console.log(arr.spilce(2,1)) //[1,2,4,5,6,7]
        10.indexOf 和 lastIndexOf 查询数组元素索引
        var arr1=[1,2,3,4,5,6]  console.log(arr.indexOf(3)) //2 console.log(arr.lastIndexOf(5)) //4  从数组末尾开始查找
        11.filter 数组过滤
        var arr = [1,4,6,8,10];  var result1 = arr.filter(function(currentValue){return currentValue>5;}) console.log(result1) //[6,8,10]
        12.includes() 判断数组是否包含某个值
        let arr = ["a","b","c","d"] let result1 = arr.includes("b");  console.log(result1) //true
      `
    },
    {
      name: "css类型",
      type: "css",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"css",
      modelName:"css",
      solveText: `
        1.清除浮动的方法
        (1).伪类选择器
        .clearfix:after{
          context:"clear",
          display:block,
          clear:both,
          height:0;
          overflow:hidden;
          visibility:hidden;
        }
        (2).BFC特性清除
        warp包含A、B，A浮动，B不浮动
        .warp{width:100px;overflow:hidden;}
        .A{float:left;}
        .B{overflow:hidden;}
        (3).直接在要浮动的2个标签下再写一个div标签，增加类名clear  样式为clear:both;
        2.不知道宽高，怎么垂直居中
        (1).flex
        .A{
          display:flex;
          justify-content:center;
          align-item:center;
        }
        (2)flex+margin
        .父元素{
          display:flex;
        }
        .子元素:{
          margin:0 auto;
        }
        (3).绝对定位
        (4).使用transform
        .元素{
          transform: translate(-50%, -50%);
        }
        (5).table-cell
        .父元素{
          display:table-cell;
          text-align:center;
          vertical-align:middle;
        }
        3.响应式布局的方式
        (1).flex布局
        (2).百分比布局
        (3).rem布局、vw+vh布局
        (4).百分比布局
        (5).媒体查询
        (6).可以通过获取设备，针对应的展示不同的页面
        4.盒子模型
        box-sizing:content-box;   width:100px;不包括padding、border
        box-sizing:border-box;	width:300px;包括padding、border
        5.em和rem的区别
        em 依赖本元素设置的font-size属性值，如果设置值是10px那么10rem=100px，如果本元素没有，会循着依赖关系寻找父元素的font-size属性值
        rem 依赖html根元素的font-size属性值设定；
        6.css样式优先级
          !important > 内联样式 > ID选择器 > class选择器 > 标签选择器 > 默认样式
      `
    },
    {
      name: "CSS3新特性",
      type: "css",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"css",
      modelName:"css",
      solveText: `
        1.增加了类选择器：属性选择器、结构伪类选择器、状态伪类选择器、兄弟元素选择器
        2.弹性盒子布局、多列布局、flex布局
        3.背景边框样式、文字特效样式、transition过度、transform转换、animation动画
        4.详情描述：
        4-1.选择器：https://www.cnblogs.com/cuic/p/5997977.html
        <!--属性选择器：a[attr*='href']设置a标签包含属性href的样式、a[attr^="href"]设置a标签中开头通包含属性href的样式、a[attr$="href"]设置a标签中结尾通包含属性href的样式。实列：div[class^="test"]
        结构伪类选择器：:root 此选择器将 绑定页面的根元素、:not 选择器排除元素、:target 当超链接进入某个页面时，才使用这个样式；
        
        :nth-child(even) 偶数个、:nth-of-type(ood) 奇数行、:nth-of-type(even) 偶数行、:nth-child(4n+1)  从第一行开始算起每隔4个使用样式(4可以替换)
        :nth-child(1):nth-last-child(1)  即使第一个又是第最后一个、:only-child 给唯一的元素样式
      `
    },
    {
      name: "Html5新特性",
      type: "html",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"html",
      modelName:"html",
      solveText: `
        1.Html5是html的最新修订版本，立足于W3C标准，是为了在移动设备上支持多媒体，文档类型以及字符集使用的是UTF-8编码；
        2.Html5新特性，增加了新的语义化元素、新的属性、表单控件、媒体标签、本地储存(localStroage、sessionStroage)、本地SQL数据、canvas、完全支持css3；
        3.增加的新元素header、footer、banner、nav、article、aside、command、time等；
        3.增加的表单元素audio、video、source定义多媒体资源、embed嵌入的内容、track媒介规定外部文本轨道；
        4.增加的表单属性color、data、email、number、url等；
        5.移除了一些废弃的元素big、center、frame、font等；
      `
    },
    {
      name: "http请求的全过程",
      type: "other",
      time: "2024-01-30",
      project: "platformXb2.0",
      level: 0.5,
      model:"other",
      modelName:"other",
      solveText: `
        1.输入网址，浏览器进行DNS解析，根据域名解析服务器IP地址[(1).浏览器缓存解析(2).本地系统缓存解析(3).路由器缓存解析(4).ISP DNS服务器解析]
        2.浏览器和WEB服务器进行TCP连接(三次握手)
        3.浏览器向web服务器发送http请求
        4.web服务器得到响应，浏览器得到html相关代码和静态资源
        5.关闭tcp连接，解析css以及js生成dom树，渲染页面
        链接详情：https://blog.csdn.net/qq_42033567/article/details/107414221
      `
    },
    {
      name: "svg - 如何使内联 SVG 始终填满屏幕",
      type: "css",
      time: "2024-01-29",
      project: "platformXb2.0",
      level: 0.5,
      model:"css",
      modelName:"css",
      solveText: `
        设置配置属性：preserveAspectRatio="xMidYMid slice"
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1400 300"  xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150" preserveAspectRatio="xMidYMid slice">
      `
    },
    {
      name: "前端js读取excel、xlsx文件日期被转为数字，日期格式转换",
      type: "vue",
      time: "2024-01-29",
      project: "巡检系统",
      level: 0.5,
      model:"Vue",
      modelName:"Vue",
      solveText: `
        函数：
        function formatDate(numb, format) {
          const old = numb - 1;
          const t = Math.round((old - Math.floor(old)) * 24 * 60 * 60);
          const time = new Date(1900, 0, old, 0, 0, t)
          const year = time.getFullYear() ;
          const month = time.getMonth() + 1 ;
          const date = time.getDate() ;
          return year + format + (month < 10 ? '0' + month : month) + format + (date < 10 ? '0' + date : date)
      }
      `
    },
    {
      name: "JS 工具函数助力高效开发 : JS实现30s倒计时",
      type: "js",
      time: "2024-01-29",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            var timestart = 30;
            var timestep = -1;
            var timeID;
            function timecount() {
                document.getElementById("timeout").innerHTML = timestart;
                timestart += timestep;
                if(timestart < 0){
                  timestart = 30;
                  //倒计时为0时执行xxxx方法   
                }
                timeID=setTimeout("timecount()",1000);
            }
            `
    },
    {
      name: "JS 工具函数助力高效开发：遍历树节点",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const foreachTree = (data, callback, childrenName = 'children') => {
              for (let i = 0; i < data.length; i++) {
                callback(data[i])
                if (data[i][childrenName] && data[i][childrenName].length > 0) {
                  foreachTree(data[i][childrenName], callback, childrenName)
                }
              }
            }
            使用： 假设我们要从树状结构数据中查找 id 为 9 的节点
            const treeData = [{id: 1,label: '一级 1',children: [{id: 4,label: '二级 1-1',children: [{id: 9,label: '三级 1-1-1'}, {id: 10,label: '三级 1-1-2'}]}]}, {id: 2,label: '一级 2',children: [{id: 5,label: '二级 2-1'}, {id: 6,label: '二级 2-2'}]}, {id: 3,label: '一级 3',children: [{id: 7,label: '二级 3-1'}, {id: 8,label: '二级 3-2'}]}],
            let result
            foreachTree(data, (item) => {
              if (item.id === 9) {
                result = item
              }
            })
            console.log('result', result)  // {id: 9,label: "三级 1-1-1"}   
            `
    },
    {
      name: "JS 工具函数助力高效开发：模糊搜索",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：  list 原数组   keyWord 查询的关键词   attribute 数组需要检索属性
            export const fuzzyQuery = (list, keyWord, attribute = 'name') => {
              const reg = new RegExp(keyWord)
              const arr = []
              for (let i = 0; i < list.length; i++) {
                if (reg.test(list[i][attribute])) {
                  arr.push(list[i])
                }
              }
              return arr
            }
            使用：
            const list = [{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' },{ id: 4, name: '汤师爷' },{ id: 5, name: '胡万' },{ id: 6, name: '花姐' },{ id: 7, name: '小梅' }]
            fuzzyQuery(list, '树', 'name') // [{id: 1, name: '树哥'}]
            `
    },
    {
      name: "JS 工具函数助力高效开发：下载文件",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数： api 接口  params 请求参数   fileName 文件名
            const downloadFile = (api, params, fileName, type = 'get') => {
              axios({
                method: type,
                url: api,
                responseType: 'blob', 
                params: params
              }).then((res) => {
                let str = res.headers['content-disposition']
                if (!res || !str) {
                  return
                }
                let suffix = ''
                // 截取文件名和文件类型
                if (str.lastIndexOf('.')) {
                  fileName ? '' : fileName = decodeURI(str.substring(str.indexOf('=') + 1, str.lastIndexOf('.')))
                  suffix = str.substring(str.lastIndexOf('.'), str.length)
                }
                //  如果支持微软的文件下载方式(ie10+浏览器)
                if (window.navigator.msSaveBlob) {
                  try {
                    const blobObject = new Blob([res.data]);
                    window.navigator.msSaveBlob(blobObject, fileName + suffix);
                  } catch (e) {
                    console.log(e);
                  }
                } else {
                  //  其他浏览器
                  let url = window.URL.createObjectURL(res.data)
                  let link = document.createElement('a')
                  link.style.display = 'none'
                  link.href = url
                  link.setAttribute('download', fileName + suffix)
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                  window.URL.revokeObjectURL(link.href);
                }
              }).catch((err) => {
                console.log(err.message);
              })
            }
            使用：
            downloadFile('/api/download', {id}, '文件名')
            `
    },
    {
      name: "JS 工具函数助力高效开发：存储操作",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            class MyCache {
              constructor(isLocal = true) {
                this.storage = isLocal ? localStorage : sessionStorage
              }
            
              setItem(key, value) {
                if (typeof (value) === 'object') value = JSON.stringify(value)
                this.storage.setItem(key, value)
              }
            
              getItem(key) {
                try {
                  return JSON.parse(this.storage.getItem(key))
                } catch (err) {
                  return this.storage.getItem(key)
                }
              }
            
              removeItem(key) {
                this.storage.removeItem(key)
              }
            
              clear() {
                this.storage.clear()
              }
            
              key(index) {
                return this.storage.key(index)
              }
            
              length() {
                return this.storage.length
              }
            }
            
            const localCache = new MyCache()
            const sessionCache = new MyCache(false)
            
            export { localCache, sessionCache }
            使用：
            localCache.getItem('user')
            sessionCache.setItem('name','树哥')
            sessionCache.getItem('token')
            localCache.clear()
            `
    },
    {
      name: "JS 工具函数助力高效开发：金额格式化",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数： {number} number：要格式化的数字   {number} decimals：保留几位小数   {string} dec_point：小数点符号  {string} thousands_sep：千分位符号
            export const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
              number = (number + '').replace(/[^0-9+-Ee.]/g, '')
              const n = !isFinite(+number) ? 0 : +number
              const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
              const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep
              const dec = typeof dec_point === 'undefined' ? '.' : dec_point
              let s = ''
              const toFixedFix = function(n, prec) {
                const k = Math.pow(10, prec)
                return '' + Math.ceil(n * k) / k
              }
              s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
              const re = /(-?\d+)(\d{3})/
              while (re.test(s[0])) {
                s[0] = s[0].replace(re, '$1' + sep + '$2')
              }
            
              if ((s[1] || '').length < prec) {
                s[1] = s[1] || ''
                s[1] += new Array(prec - s[1].length + 1).join('0')
              }
              return s.join(dec)
            }
            使用：
            moneyFormat(10000000) // 10,000,000.00  moneyFormat(10000000, 3, '.', '-') // 10-000-000.000
            `
    },
    {
      name: "JS 工具函数助力高效开发：滚动到元素位置",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      level: 1,
      solveText: `
            函数：
            export const smoothScroll = element =>{
                document.querySelector(element).scrollIntoView({
                    behavior: 'smooth'
                });
            };
            使用：
            smoothScroll('#target'); // 平滑滚动到 ID 为 target 的元素
            `
    },
    {
      name: "JS 工具函数助力高效开发：滚动到页面顶部",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const scrollToTop = () => {
              const height = document.documentElement.scrollTop || document.body.scrollTop;
              if (height > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, height - height / 8);
              }
            }
            `
    },
    {
      name: "JS 工具函数助力高效开发：数组去重",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数： arr 要去重的数组  key 根据去重的字段名
            export const uniqueArrayObject = (arr = [], key = 'id') => {
              if (arr.length === 0) return
              let list = []
              const map = {}
              arr.forEach((item) => {
                if (!map[item[key]]) {
                  map[item[key]] = item
                }
              })
              list = Object.values(map)
            
              return list
            }
            使用：
            const responseList = [{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' },{ id: 1, name: '黄老爷' },{ id: 2, name: '张麻子' },{ id: 3, name: '树哥' },{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' },]
            uniqueArrayObject(responseList, 'id')
            `
    },
    {
      name: "JS 工具函数助力高效开发：判断手机是Andoird还是IOS",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const getOSType=() => {
              let u = navigator.userAgent, app = navigator.appVersion;
              let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
              let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
              if (isIOS) {
                return 1;
              }
              if (isAndroid) {
                return 2;
              }
              return 3;
            }
            使用：
            1: ios  2: android  3: 其它
            `
    },
    {
      name: "JS 工具函数助力高效开发：解析URL参数",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const getSearchParams = () => {
              const searchPar = new URLSearchParams(window.location.search)
              const paramsObj = {}
              for (const [key, value] of searchPar.entries()) {
                paramsObj[key] = value
              }
              return paramsObj
            }
            使用：
            // 假设目前位于 https://****com/index?id=154513&age=18;
            getSearchParams(); // {id: "154513", age: "18"}
            `
    },
    {
      name: "JS 工具函数助力高效开发：大小写转换",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：str 待转换的字符串  type 1-全大写 2-全小写 3-首字母大写
            export const turnCase = (str, type) => {
              switch (type) {
                case 1:
                  return str.toUpperCase()
                case 2:
                  return str.toLowerCase()
                case 3:
                  //return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
                  return str[0].toUpperCase() + str.substring(1).toLowerCase()
                default:
                  return str
              }
            }
            使用：
            turnCase('vue', 1) // VUE   turnCase('REACT', 2) // react   turnCase('vue', 3) // Vue
            `
    },
    {
      name: "JS 工具函数助力高效开发：手机号脱敏",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const hideMobile = (mobile) => {
              return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
            }
            `
    },
    {
      name: "JS 工具函数助力高效开发：节流",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const throttle = (() => {
              let last = 0
              return (callback, wait = 800) => {
                let now = +new Date()
                if (now - last > wait) {
                  callback()
                  last = now
                }
              }
            })()
            `
    },
    {
      name: "JS 工具函数助力高效开发：防抖",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const debounce = (() => {
              let timer = null
              return (callback, wait = 800) => {
                timer&&clearTimeout(timer)
                timer = setTimeout(callback, wait)
              }
            })()
            使用：vue 中使用
            methods: {
              loadList() {
                debounce(() => {
                  console.log('加载数据')
                }, 500)
              }
            }
            `
    },
    {
      name: "JS 工具函数助力高效开发：校验数据类型",
      type: "js",
      time: "2024-01-24",
      project: "个人总结",
      level: 1,
      model:"JS 工具函数助力高效开发",
      modelName:"jsToolFn",
      solveText: `
            函数：
            export const typeOf = function(obj) {return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()}
            使用：
            typeOf('树哥')  // string   typeOf([])  // array  typeOf(new Date())  // date
            `
    },
    {
      name: "旧问题，webpack初始化项目后，配置打包环境build路径设置为",
      type: "webpack、vue",
      time: "2022-07-05",
      project: "数智化运维平台",
      level: 1,
      model:"webpack",
      modelName:"webpack",
      solveText: `
            (1).原因：静态资源环境没有配置妥当，打包后出现404和不显示问题；
            (2).解决办法：config文件夹-index.js文件：build对象
            assetsRoot: path.resolve(__dirname, '../dist'),
            assetsSubDirectory: 'static',
            assetsPublicPath: './',
            打包后出现样式，图片丢失问题，还需在utils.js文件中设置
            return ExtractTextPlugin.extract({
                use: loaders,
                publicPath: '../../',
                fallback: 'vue-style-loader'
            })
            `
    },
    {
      name:
        "node-sass npm install报错：https://github.com/sass/node-sass/releases/download/v4.14.1/win32-x64-72_binding.node",
      type: "webpack、vue",
      time: "2022-06-30",
      project: "数智化运维平台",
      level: 0.5,
      model:"npm install",
      modelName:"npmInstall",
      solveText: `
            (1).原因：node-sass 被墙掉了，导致下载不了；
            (2).解决办法：npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
            (3).参照：https://blog.csdn.net/weixin_42614080/article/details/107052787
            `
    },
    {
      name: "velementui Dropdown下拉菜单信息的位置",
      type: "webpack、vue",
      time: "2022-06-28",
      project: "数智化运维平台",
      level: 0.5,
      model:"Vue",
      modelName:"Vue",
      solveText: `
            (1).思路：把fixed修改维absolute根据父元素相对定位，设置append-to-body、class类名；
            (2).实现：<el-dropdown-menu slot="dropdown" placement="bottom-end" :append-to-body="false" class="popper-dropdown"></el-dropdown-menu>；
            (3).样式设定:min-width: 150px;position: absolute !important;top: 25px !important;left: -140px !important;
            `
    },
    {
      name: "vue项目中px自动转化vh",
      type: "webpack、vue",
      time: "2022-06-23",
      project: "数智化运维平台",
      level: 0.5,
      model:"Vue",
      modelName:"Vue",
      solveText: `
            (1).使用：安装npm i postcss-px-to-viewport --save-dev；
              再在.postcssrc.js中设置配置即可(vue项目安装配置有些问题)
            `
    },
    {
      name: "使用node16.15.1版本，对应的node-sass版本出错",
      type: "webpack、vue",
      time: "2022-06-23",
      project: "数智化运维平台",
      level: 0.5,
      model:"node",
      modelName:"node",
      solveText: `
            (1).原因：npm install项目，导致程序报错，运行不起来；
            (2).解决办法：node版本问题，降低版本，且对应的node有对应的node-sass版本介绍！
            `
    },
    {
      name:
        "根据获取到的经纬度坐标实时显示飞机位置，却与别的系统的显示位置不一样",
      type: "react、Cesium",
      time: "2022-05-31",
      project: "广州无人机项目",
      level: 2,
      model:"cesium",
      modelName:"cesium",
      solveText: `
            (1).原因：经纬度坐标系不一样，可能一个使用的是火星坐标系，一个使用的是84坐标系；
            (2).解决办法：获取到的经纬度转化对应即可；https://blog.csdn.net/qq_34149805/article/details/78393540
            `
    },
    {
      name:
        "项目需求：根据后端返回的数据，使用cesium动态绘制实体实时移动，实时轨迹绘制。",
      type: "react、vue",
      time: "2022-05-12",
      project: "广州无人机项目",
      level: 2,
      model:"cesium",
      modelName:"cesium",
      solveText: `
            (1).描述：保证实体实时移动，且轨迹绘制，需使用计时器一直请求更新数据，且针对绘制轨迹还得存储之前的经纬度数据；
            (2).解决思路：1)使用cesium的czml方式添加实体、定时器实时获取，使用czml的更新方法，保证实体移动；
                        2)使用cesium绘制线条的方法，通过CallbackProperty方法更新展示动态绘制的效果；
                        3)后端返回的数据，数量会发生变化，且返回的数据顺序也会发生变化，因此遍历操作时需要针对性把对应获取到的数据给对应的实体;
                        4)在项目右上角点击资源列表 drawer抽屉中点击 "cesium针对数据顺序、数量发生变化，动态绘制对应实体移动以及轨迹"
            `
    },
    {
      name:
        "框架式的项目在使用其特定函数或第三方插件时，加载图片或者一些资源的时候失败显示不出来",
      type: "react、vue",
      time: "2022-05-09",
      project: "广州无人机项目",
      level: 1,
      model:"Vue",
      modelName:"Vue",
      solveText: `
            (1).描述：在rect项目中使用cesium(EV-Goble)框架的时候，加载czml数据类型时，添加广告牌实体图片显示不出来；
            (2).解决办法：初步尝试使用import方式引入，赋值变量加载，还是出现问题；
                          直接使用引入图片相对路径、绝对路径，还是显示不出来；
                          之后打印其cesium的czml对象发现图片还是加载失败；最后尝试require方式引入，成功！
            `
    },
    {
      name:
        "gitcode下载的后台管理系统的代码，下载zip格式和git clone方式，使用npm install安装式报错",
      type: "vue+elementui",
      time: "2022-04-28",
      project: "管理系统项目",
      solveText: `
            (1).报错描述：
                npm ERR! Error while executing:
                npm ERR! C:\Program Files\Git\cmd\git.EXE ls-remote -h -t https://github.com/nhn/raphael.git
                npm ERR!
                npm ERR! fatal: unable to access 'https://github.com/nhn/raphael.git/': OpenSSL SSL_read: Connection was reset, errno 10054\n
                npm ERR! exited with error code: 128
                npm ERR! A complete log of this run can be found in:
                npm ERR!     C:\Users\admin\AppData\Roaming\ npm-cache\_logs\ 2021-03-11T07_34_53_299Z-debug.log      \n
            (2).解决办法：
                cd 项目根目录
                git config --global url."https://".insteadOf git://
            (3).暂时没有找到问题的原因，估测是git配置问题。
            `,
      level: 2,
      model:"npm install",
      modelName:"npmInstall",
    },
    {
      name:
        "cesium绘制点、线、面选择绘制，不在cesium上点击，出现点、线、面混杂绘制的问题",
      type: "cesium",
      time: "2022-04-08",
      project: "管理系统项目",
      solveText: `(1)cesium绘制函数setInputAction在其点击选择绘制形状的时候已经赋值可以绘制，在切换到其余模块的时候上次的绘制没有结束导致混杂，为此在绘制开始的时候，要判断是否在cesium上开始点击绘制了\n(2)new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas).setInputAction(function (event) { \n &nbsp;&nbsp;if(区别字段 == "绘制图形传值"){\n&nbsp;&nbsp;&nbsp;&nbsp;绘制模块代码\n&nbsp;&nbsp;}\n})`,
      level: 1,
      model:"cesium",
      modelName:"cesium",
    },
    {
      name: "cesium加载json设置边界线宽度无法修改",
      type: "cesium",
      time: "2022-04-06",
      project: "管理系统项目",
      solveText: `(1)使用cesium加载josn的方法设置strokeWidth(宽度)不起作用，修改使用添加面的方法编写，即是获取到该地区的经纬度数据，遍历填充即可`,
      level: 1,
      model:"cesium",
      modelName:"cesium",
    },
    {
      name: "nodejs学习,执行安装后第三方库文件夹没有显示",
      type: "node",
      time: "2022-04-02",
      project: "学习",
      solveText: `(1)安装执行后文件没有出现\n查看npm配置npm config list\n 获取全局安装目录 npm root -g \n(2)查看发现是由于npm全局安装导致的，修改全局配置npm config set global=false\n (3)重新npm install 包`,
      level: 0.5,
      model:"node",
      modelName:"node",
    },
    {
      name: "vue后端返回换行问题",
      type: "vue",
      time: "2022-03-31",
      project: "管理系统项目",
      solveText: `(1).后端返回的数据中包含换行符,通过正则replace(/换行符/g,"<br/>")替换\n(2).通过v-html放置到标签容器中，不要直接用{{数据}}这中写法`,
      level: 0.5,
      model:"Vue",
      modelName:"Vue",
    },
    {
      name: "vue2.5.2+webpack favicon.ico不显示问题",
      type: "vue",
      time: "2022-03-21",
      project: "PlatFormXB项目管理系统",
      solveText: `(1).favicon.ico放到 index.html放到同一目录\n(2).在webpack.dev.conf.js 里面的 plugins配置\nnew HtmlWebpackPlugin({\nfilename: 'index.html',\ntemplate: 'index.html',\ninject: true,\nfavicon: './favicon.ico'//增加这条\n}),\n在 webpack.prod.conf.js 里面 plugins 配置，不然build的时候也找不到favicon.ico\nnew HtmlWebpackPlugin({\nfilename: config.build.index,\ntemplate: 'index.html',\ninject: true,\nfavicon: './favicon.ico',//增加这条\nminify: {\nremoveComments: true,\ncollapseWhitespace: true,\nremoveAttributeQuotes: true\n},\nchunksSortMode: 'dependency'\n}),\n(3).link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"\n(4).重新启动项目`,
      level: 0.5,
      model:"Vue",
      modelName:"Vue",
    },
    {
      name: "使用cookie储存token，打包完后，在本地登录，路由不跳转",
      type: "vue",
      time: "2022-03-14",
      project: "H6000航测监管平台",
      solveText: ` (1).本地环境下cookie不运行，获取的token储存不到，路由守卫不允许跳转\n(2).使用window.sessionStorage,粗存调取`,
      level: 1,
      model:"Vue",
      modelName:"Vue",
    },
    {
      name: "vue设置配置文件(前端)",
      type: "vue",
      time: "2021-10-20",
      project: "管理系统项目",
      solveText: `(1)由于更换服务器地址原因(没有采纳域名式),设置配置文件，避免重复打包\n(2)在static文件夹设置XXX.js文件，中使用window.xxx变量粗存，在index.html文件中，用script的方式引入，即可，这样修改完配置文件后，刷新即可得到修改后的需求，如果使用import方式引入则达不到该想法需求；`,
      level: 1.5,
      model:"Vue",
      modelName:"Vue",
    }
  ],
};
