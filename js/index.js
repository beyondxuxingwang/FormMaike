
; var FormMake = (function () {

    var FormMake = function (options) {
        this.init(options || {});
        this.bind();
    };
    FormMake.prototype = {
        init: function (options) {
            this.options = options;
            this.components = document.querySelectorAll('.l-ul-li'); //获取左侧所有的组件
            this.midUl = document.getElementById('mid-ul');// 获取中间表单
            this.rightTab = document.getElementById('r-tab');// 获取右侧编辑栏
        },
        bind: function () {
            var _this = this;
            for (var i = 0; i < this.components.length; i++) {
                this.components[i].onclick = function () {
                    var dataId = this.getAttribute('data-id');
                    
                    _this.appendMidLiDom(dataId);
                }
            }
        },
        appendMidLiDom: function (dataId) {
            // 等于1 是文本框
            if (dataId == '1') {
                this.midLi = document.createElement('li'); //创建li 
                this.midLi.className = "mid-li mid-wenben";
                this.midLi.setAttribute('data-id', dataId);
                this.midLi.innerHTML = wenben;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li');// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮
            } else if (dataId == '2') {
                this.midLi = document.createElement('li'); //创建li 
                this.midLi.className = "mid-li mid-choose";
                this.midLi.setAttribute('data-id', dataId);
                this.midLi.innerHTML = choose;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li');// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮
            } else if (dataId == '3') {
                this.midLi = document.createElement('li');
                this.midLi.className = "mid-li mid-downpull";
                this.midLi.setAttribute('data-id', dataId);
                this.midLi.innerHTML = downpull;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li');// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮
            } else if (dataId == '4') {
                this.midLi = document.createElement('li');
                this.midLi.className = "mid-li mid-time";
                this.midLi.setAttribute('data-id', dataId);
                this.midLi.innerHTML = datetime;
                this.midUl.appendChild(this.midLi);
                this.midLiList = document.querySelectorAll('.mid-li');// 获取中间表单li
                this.midLiDel = document.querySelectorAll('.mid-li-del');// 获取每个li上的del按钮
            }
            this.appendStyle();

            this.delLiDom(this.midLiDel);
        },
        appendStyle: function () {
            var _this = this;
            // 点击
            for (var i = 0; i < _this.midLiList.length; i++) {
                // 点击更改背景颜色 并显示右侧编辑模块
                _this.midLiList[i].setAttribute('data-num', i);
                _this.midLiList[i].onclick = function () {
                    for (let j = 0; j < _this.midLiList.length; j++) {
                        _this.midLiList[j].style.background = "#fff";
                    }
                    this.style.background = "#FFF8DC";
                    var dataId = this.getAttribute('data-id');
                    var dataNum = this.getAttribute('data-num');

                    _this.appendRightDom(dataId, dataNum);

                };
                // 鼠标进入显示删除
                _this.midLiList[i].onmouseover = function () {
                    for (let j = 0; j < _this.midLiDel.length; j++) {
                        _this.midLiDel[j].style.display = "none";
                    }
                    this.childNodes[0].style.display = "block";
                };
                // 鼠标离开
                _this.midLiList[i].onmouseout = function () {
                    for (let j = 0; j < _this.midLiDel.length; j++) {
                        _this.midLiDel[j].style.display = "none";
                    }
                }
            }
        },
        // 中间删除当前dom
        delLiDom: function (del) {
           
            var _this = this;
            for (let i = 0; i < this.midLiDel.length; i++) {
                this.midLiDel[i].onclick = function () {
                    this.parentNode.remove();
                }
            }

        },
        // 渲染出来右侧编辑的dom
        appendRightDom: function (dataId, dataNum) {
            this.rightTab.setAttribute('data-id', dataId);
            this.rightTab.setAttribute('data-num', dataNum);
            if (dataId == '1') {
                this.rightTab.innerHTML = wenbenEdit;
            } else if (dataId == '2') {
                this.rightTab.innerHTML = chooseEdit;
            } else if (dataId == '3') {
                this.rightTab.innerHTML = downpullEdit;
            } else if (dataId == '4') {
                this.rightTab.innerHTML = wenbenEdit;
            }
            this.rightEdit(dataId, dataNum);
        },
        // 右侧编辑的各种情况
        rightEdit: function (dataId, dataNum) {
            //监听righTab下面所有input change事件
            var _this = this;
            var itemId = 3;

            // 根据dataNum 获取相对应的dom元素
            this.RightInputDom = this.rightTab.querySelectorAll("input"); // 获取右侧编辑的input
            _this.MidInputDom = _this.midUl.querySelector('[data-num="' + dataNum + '"]'); //获取中间li 
            this.RlistItem = this.rightTab.querySelectorAll(".r-list-item"); // 获取选项dom
            this.RightAppendDom = this.rightTab.querySelector('.r-list-btn'); // 获取添加选项按钮



            // 右侧编辑渲染到中间
            this.rightTab.oninput = function (e) {
                var classValue = e.target.name;
                var textValue = e.target.value;

              
                

                if (textValue == '1') {
                    _this.MidInputDom.querySelector('.' + classValue).style.display = 'inline-block';
                } else if (textValue == '0') {
                    _this.MidInputDom.querySelector('.' + classValue).style.display = 'none';
                } else {
                    _this.MidInputDom.querySelector('.' + classValue).innerHTML = textValue;
                }
            };
            // 因为文本框没有多级选项 所以不为空在支持此操作 
            if (this.RightAppendDom !== null) {
                this.RightAppendDom.onclick = function () {
                    itemId++;
                    this.RListList = _this.rightTab.querySelector('.r-list-list');
                    this.itemDom = document.createElement('div');
                    this.itemDom.className = "r-list-item";
                    this.itemDom.innerHTML = itemHtml;
                    this.itemDom.childNodes[1].setAttribute('name', 'item' + itemId);
                    this.RListList.appendChild(this.itemDom);
                    // 多选框和下拉框渲染中间li中的选择项不同
                    this.midLiDom = _this.midUl.querySelector('[data-num="' + dataNum + '"]'); //获取中间li 

                    if(dataId == 2){ // 选择框
                        this.midItemDom = document.createElement('div');
                        this.midItemDom.className = "m-li-item";
                        this.midItemDom.innerHTML = choosemidItemHtml;
                        this.midItemDom.childNodes[1].className = 'item' + itemId;
                        _this.MidInputDom.appendChild(this.midItemDom);
                        console.log( _this.MidInputDom);
                        
                    }else if(dataId == 3){ // 下拉框
                        console.log(dataId);
                        
                        // this.midItemDom = document.createElement('option');
                        // this.midItemDom.className = 'item'+itemId;  
                        this.myselect = _this.MidInputDom.querySelector('select');   

                        this.myselect.options[this.myselect.options.length] = new Option("text","value");  

                        this.myoptions = _this.MidInputDom.querySelectorAll('option');
                        console.log(this.myoptions);
                        for(var i = 0 ;i<this.myoptions.length;i++){
                            var j=i+1;
                            this.myoptions[i].className = 'm-li-item item'+j;
                        }
                           
                    }
                   

                    _this.ChooseItemMouseover(dataId, dataNum);
                }
            }
            this.ChooseItemMouseover(dataId, dataNum);
        },
        // 多选框 鼠标进入出现del按钮，以及点击del按钮事件
        ChooseItemMouseover: function (dataId, dataNum) {
            var _this = this;
            this.RlistItem = this.rightTab.querySelectorAll(".r-list-item"); // 获取选项dom
            // 获取所有item上的del   mid 表单中的相对应的选项也对应删除
            this.itemDel = this.rightTab.querySelectorAll('.r-list-del');
            // 获取相对应的选项
            this.mLiItem = this.midUl.querySelector('[data-num="' + dataNum + '"]').querySelectorAll('.m-li-item');
            // 选择框中的选择选项 hover 事件
            for (let i = 0; i < this.RlistItem.length; i++) {
                this.RlistItem[i].onmouseover = function () {
                    this.querySelector('.r-list-del').style.display = 'inline-block';
                }
                this.RlistItem[i].onmouseout = function () {
                    this.querySelector('.r-list-del').style.display = 'none';
                }
            };
            // 右侧编辑框选择项的删除事件
            for (let i = 0; i < this.itemDel.length; i++) {
                
                    this.itemDel[i].onclick = function () {
                        this.parentNode.remove();
                        _this.mLiItem[i].remove();
                    }
          
            }
        },





    };
    return FormMake;
})();




