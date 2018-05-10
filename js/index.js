
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
            this.delLiDom();
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

        delLiDom: function () {
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
            }
            this.rightEdit(dataId, dataNum);
        },
        // 右侧编辑的各种情况
        rightEdit: function (dataId, dataNum) {
            //监听righTab下面所有input change事件
            var _this = this;
            // 根据dataNum 获取相对应的dom元素
            this.RightInputDom = this.rightTab.querySelectorAll("input"); // 获取右侧编辑的input
            _this.MidInputDom = _this.midUl.querySelector('[data-num="' + dataNum + '"]'); //获取中间li 
            this.RlistItem = this.rightTab.querySelectorAll(".r-list-item"); // 获取选项dom
            this.RightAppendDom = this.rightTab.querySelector('.r-list-btn'); // 获取添加选项

            console.log(this.RlistItem);

            // 
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
            // 选择框中的选择选项 hover 事件
            for (let i = 0; i < this.RlistItem.length; i++) {
                this.RlistItem[i].onmouseover = function () {
                    this.querySelector('.r-list-del').style.display = 'inline-block';
                }
                this.RlistItem[i].onmouseout = function () {  
                    this.querySelector('.r-list-del').style.display = 'none';
                }
            };
            // 点击添加选项
            this.RightAppendDom.onclick = function () {
                _this.RightAppendItemDom();
            }
        },
        RightAppendItemDom:function () {  
            var _this = this;
            console.log(111);
            var itemHtml = 
            // '<div class="r-list-item">' +
            '<input type="radio">' +
            '<input type="text" placeholder="选项13">' +
            '<span class="r-list-del fa  fa-times-circle-o fa-2x"></span>' ;
            // '</div>' 
            this.RListList = _this.rightTab.querySelector('.r-list-list');
            this.itemDom = document.createElement('div');
            this.itemDom.className = "r-list-item";
            this.itemDom.innerHTML = itemHtml;
            this.RListList.appendChild(this.itemDom);
            _this.rightEdit();
        }


    };
    return FormMake;
})();




