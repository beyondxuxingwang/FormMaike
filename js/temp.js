// 文本框 
var wenben =
    '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
    '<p class="mid-li-title">' +
    '<span class="m-title">文本框</span>' +
    '<span class="mustfill">*</span>' +
    '</p>' +
    '<p class="mid-li-desc">这是文本描述</p>' +
    '<input  type="text" disabled="disabled">',
    // 文本框编辑
    wenbenEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>标题</p>' +
        '<input name="m-title" type="text" placeholder="文本框">' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',

    // 选择框
    choose =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title"><span class="m-title">选择框</span><span class="mustfill">*</span></p>' +
        '<p class="mid-li-desc">这是选择描述</p>' +
        '<div>' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item1">选项1</span>' +
        '</div>' +
        '<div>' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item2">选项2</span>' +
        '</div>' +
        '<div>' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item3">选项3</span>' +
        '</div>',
    // 中间选择框添加选项
    midItemHtml =
        '<input type="radio" disabled="disabled">' +
        '<span>选项3</span>',
    chooseEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">单选</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p>' +
        '<span class="r-type-key">组件类型</span>' +
        '<span class="r-type-value">单选</span>' +
        '</p>' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>标题</p>' +
        '<input name="m-title" type="text" placeholder="文本框">' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>选项内容</p>' +
        '<div class="r-list-list">' +
        '<div class="r-list-item">' +
        '<input type="radio" disabled="disabled">' +
        '<input name="item1" type="text" placeholder="选项1">' +
        '<span class="r-list-del fa  fa-times-circle-o fa-2x"></span>' +
        '</div>' +
        '<div class="r-list-item">' +
        '<input type="radio" disabled="disabled">' +
        '<input name="item2" type="text" placeholder="选项2">' +
        '<span class="r-list-del fa  fa-times-circle-o fa-2x"></span>' +
        '</div>' +
        '<div class="r-list-item">' +
        '<input type="radio" disabled="disabled">' +
        '<input name="item3" type="text" placeholder="选项3">' +
        '<span class="r-list-del fa  fa-times-circle-o fa-2x"></span>' +
        '</div>' +
        '</div>' +
        '<div class="r-list-btn">' +
        '<button>添加选项</button>' +
        '</div>' +

        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    //右侧选择项
    itemHtml =
        '<input type="radio" disabled="disabled">' +
        '<input type="text" placeholder="选项">' +
        '<span class="r-list-del fa  fa-times-circle-o fa-2x"></span>',



    //下拉框
    downpull =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title"><span>下拉框</span><span class="mustfill">*</span></p>' +
        '<p class="mid-li-desc">这是下拉描述</p>' +
        '<select  disabled="disabled"></select>',
    downpullEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">单选</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p>' +
        '<span class="r-type-key">组件类型</span>' +
        '<span class="r-type-value">单选</span>' +
        '</p>' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>标题</p>' +
        '<input type="text" placeholder="文本框">' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input type="text" placeholder="这是描述">' +
        '</div>' +
        '<div class="r-list r-must">' +
        '<input type="checkbox">' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>选项内容</p>' +
        '<div>' +
        '<div class="r-list-item">' +
        '<input type="radio">' +
        '<input type="text" placeholder="选项1">' +
        '</div>' +
        '<div class="r-list-item">' +
        '<input type="radio">' +
        '<input type="text" placeholder="选项1">' +
        '</div>' +
        '<div class="r-list-item">' +
        '<input type="radio">' +
        '<input type="text" placeholder="选项1">' +
        '</div>' +
        '</div>' +
        '<div class="r-list-btn">' +
        '<button>添加选项</button>' +
        '</div>' +

        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    //时间日期框
    datetime =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title"><span>日期</span><span class="mustfill">*</span></p>' +
        '<p class="mid-li-desc">这是下拉描述</p>' +
        '<input type="date" disabled="disabled"> '           