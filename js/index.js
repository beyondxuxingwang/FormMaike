

; var FormMake = (function () {

    var FormMake = function (options) {
        this.init(options || {});
        this.bind();

    };

    FormMake.prototype = {
        init: function (options) {
            this.options = options;
            this.components = document.querySelectorAll('.l-ul-li'); //获取左侧所有的组件
            this.midUl =  document.getElementById('mid-ul');// 获取中间表单
            this.rightTab = document.getElementById('r-tab');// 获取右侧编辑栏

        },
        bind: function () {
            var _this = this;
            for (var i = 0; i < this.components.length; i++) {
                this.components[i].onclick = function () {
                   var dataId =  this.getAttribute('data-id');
                   console.log(dataId);
                    _this.appendMidLiDom(dataId);
                }
            }
           
        },
        appendMidLiDom: function (dataId) {
            // 等于1 是文本框
            if (dataId == '1') {
                this.midLi = document.createElement('li'); //创建li 
                this.midLi.className = "mid-li mid-wenben";
                this.midLi.setAttribute('data-id',dataId);
                this.midLi.innerHTML = wenben;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li') ;// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮
            }else if(dataId == '2'){
                this.midLi = document.createElement('li'); //创建li 
                this.midLi.className = "mid-li mid-choose";
                this.midLi.setAttribute('data-id',dataId);
                this.midLi.innerHTML = choose; 
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li') ;// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮

               
            }else if(dataId == '3'){
                this.midLi = document.createElement('li');
                this.midLi.className = "mid-li mid-downpull";
                this.midLi.setAttribute('data-id',dataId);
                this.midLi.innerHTML = downpull;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li') ;// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮

               
            }else if(dataId == '4'){
                this.midLi = document.createElement('li');
                this.midLi.className = "mid-li mid-time";
                this.midLi.setAttribute('data-id',dataId);
                this.midLi.innerHTML = datetime;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li') ;// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮
            }
            this.appendStyle();
            this.delLiDom();
        } ,
        appendStyle:function () { 
            var _this= this;
            // 点击
            for (var i = 0 ; i<_this.midLiList.length; i++){
                // 点击更改背景颜色 并显示右侧编辑模块
                _this.midLiList[i].onclick = function () {  
                    for (let j = 0; j <_this.midLiList.length; j++) {
                       _this.midLiList[j].style.background = "#fff";
                    }
                    this.style.background = "#FFF8DC";
                    var dataId = this.getAttribute('data-id');
                    _this.appendRightDom(dataId);
                };
                // 鼠标进入显示删除
                _this.midLiList[i].onmouseover= function () {    
                    for (let j = 0; j <_this.midLiDel.length; j++) {
                       _this.midLiDel[j].style.display = "none";
                    }
                   this.childNodes[0].style.display = "block";
                };
                // 鼠标离开
                _this.midLiList[i].onmouseout =function () {  
                    for (let j = 0; j <_this.midLiDel.length; j++) {
                        _this.midLiDel[j].style.display = "none";
                     }
                    // this.childNodes[0].style.display = "none";
                }              
           }
         },
         delLiDom:function () {  
            var _this= this;
            
            for (let i = 0; i < this.midLiDel.length; i++) {
                this.midLiDel[i].onclick = function () {  
                    this.parentNode.remove(); 
                }
            }
         },
         appendRightDom:function (dataId) {  
            
            console.log(dataId);
            console.log(this.rightTab);
            
            if(dataId == '1'){
                this.rightTab.innerHTML = wenbenEdit;
            }else if(dataId == '2'){
                this.rightTab.innerHTML = chooseEdit;
            }else if(dataId == '3'){
                this.rightTab.innerHTML = downpullEdit;
            }

         }

    };
    return FormMake; 
})(); 




