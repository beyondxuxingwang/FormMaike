/**
 * 字符串拼接行程每个组件的不同样式
 * 
*/



// 文本框 
var wenben =
    '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
    '<p class="mid-li-title">' +
    '<span class="m-title">文本框</span>' +
    '<span class="mustfill">*</span>' +
    '</p>' +
    '<p class="mid-li-desc"></p>' +
    '<p class="mid-li-type" style="display:none">text</p>' +
    '<p class="mid-li-name" style="display:none"></p>' +
    '<p class="mid-li-disabled" style="display:none"></p>' +
    '<p class="mid-li-value" style="display:none"></p>' +
    '<p class="mid-li-placeholder" style="display:none"></p>' +

    '<input  type="text" disabled="disabled">',
    // 文本框编辑
    wenbenEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        // label 
        '<div class="r-list r-name">' +
        '<p>label 标题</p>' +
        '<input name="m-title" type="text" placeholder="例如：姓名">' +
        '</div>' +
        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // type

        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value
        '<div class="r-list r-name">' +
        '<p>value值</p>' +
        '<input name="mid-li-value" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
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
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none"></p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +





        '<div class="m-li-item">' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item1">选项1</span>' +
        '</div>' +
        '<div class="m-li-item">' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item2">选项2</span>' +
        '</div>' +
        '<div class="m-li-item">' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item3">选项3</span>' +
        '</div>',
    // 中间选择框添加选项
    choosemidItemHtml =
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
        '<p> label 标题</p>' +
        '<input name="m-title" type="text" placeholder="文本框">' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // type
        '<div class="r-list r-name">' +
        '<p>type 类型 </p>' +
        '<input name="mid-li-type" type="text"  placeholder="例如：radio或checkbox">' +
        '</div>' +
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
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
        '<p class="mid-li-title"><span class="m-title">选择框</span><span class="mustfill">*</span></p>' +
        '<p class="mid-li-desc">这是下拉描述</p>' +

        '<p class="mid-li-type" style="display:none">select</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +



        '<select class="mySelect" disabled="disabled" >' +
        '<option class="item1" value="选项1">选项1</option>' +
        '<option class="item2" value="选项2">选项1</option>' +
        '<option class="item3" value="选项3">选项1</option>' +
        '</select>',


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
        '<input name="m-title" type="text" placeholder="文本框">' +
        '</div>' +
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +

        // type
        '<div class="r-list r-name">' +
        '<p>type 类型 </p>' +
        '<input name="mid-li-type" type="text"  placeholder="例如：text,number,email,url">' +
        '</div>' +
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
        '</div>' +


        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0">' +
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
    //时间日期框
    datetime =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title"><span class="m-title">日期</span><span class="mustfill">*</span></p>' +
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none">datetime</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-value" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +


        '<input type="date" disabled="disabled"> ',
    datetimeEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        // label 
        '<div class="r-list r-name">' +
        '<p>label 标题</p>' +
        '<input name="m-title" type="text" >' +
        '</div>' +
        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // type

        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value
        '<div class="r-list r-name">' +
        '<p>value值</p>' +
        '<input name="mid-li-value" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +

        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',







    // 姓名 
    username =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title">' +
        '<span class="m-title">姓名</span>' +
        '<span class="mustfill">*</span>' +
        '</p>' +
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none">text</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-value" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +
        '<p class="mid-li-required" style="display:none"></p>' +

        '<input  type="text" disabled="disabled">',
    usernameEdit =
        // 文本框编辑

        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value
        '<div class="r-list r-name">' +
        '<p>value值</p>' +
        '<input name="mid-li-value" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // required
        '<div class="r-list r-name">' +
        '<p>required 属性 </p>' +
        '<input name="mid-li-required" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
        '</div>' +

        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    phone =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title">' +
        '<span class="m-title">手机</span>' +
        '<span class="mustfill">*</span>' +
        '</p>' +
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none">text</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-value" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +
        '<p class="mid-li-required" style="display:none"></p>' +

        '<input  type="text" disabled="disabled">',
    phoneEdit =
        // 文本框编辑

        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value
        '<div class="r-list r-name">' +
        '<p>value值</p>' +
        '<input name="mid-li-value" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // required
        '<div class="r-list r-name">' +
        '<p>required 属性 </p>' +
        '<input name="mid-li-required" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
        '</div>' +

        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    email =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title">' +
        '<span class="m-title">邮箱</span>' +
        '<span class="mustfill">*</span>' +
        '</p>' +
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none">text</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-value" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +
        '<p class="mid-li-required" style="display:none"></p>' +

        '<input  type="text" disabled="disabled">',
    emailEdit =
        // 文本框编辑

        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value
        '<div class="r-list r-name">' +
        '<p>value值</p>' +
        '<input name="mid-li-value" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // required
        '<div class="r-list r-name">' +
        '<p>required 属性 </p>' +
        '<input name="mid-li-required" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
        '</div>' +

        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    sex =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title"><span class="m-title">性别</span><span class="mustfill">*</span></p>' +
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none">radio</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +
        '<div class="m-li-item">' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item1">男</span>' +
        '</div>' +
        '<div class="m-li-item">' +
        '<input type="radio" disabled="disabled">' +
        '<span class="item2">女</span>' +
        '</div>',
    sexEdit =
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
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
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

        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    company =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title">' +
        '<span class="m-title">公司</span>' +
        '<span class="mustfill">*</span>' +
        '</p>' +
        '<p class="mid-li-desc"></p>' +
        '<p class="mid-li-type" style="display:none">text</p>' +
        '<p class="mid-li-name" style="display:none"></p>' +
        '<p class="mid-li-disabled" style="display:none"></p>' +
        '<p class="mid-li-value" style="display:none"></p>' +
        '<p class="mid-li-placeholder" style="display:none"></p>' +
        '<input  type="text" disabled="disabled">',
    companyEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">文本框</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +

        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
        // type

        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value
        '<div class="r-list r-name">' +
        '<p>value值</p>' +
        '<input name="mid-li-value" type="text" >' +
        '</div>' +
        // disabled
        '<div class="r-list r-name">' +
        '<p>disabled 属性 </p>' +
        '<input name="mid-li-disabled" type="text" >' +
        '</div>' +
        // placeholder 
        '<div class="r-list r-name">' +
        '<p>placeholder 属性 </p>' +
        '<input name="mid-li-placeholder" type="text" >' +
        '</div>' +
        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>',
    address =
        '<span class="mid-li-del fa  fa-times-circle-o fa-2x"></span>' +
        '<p class="mid-li-title">' +
        // 标题label
        '<span class="m-title">地址</span>' +
        '<span class="mustfill">*</span>' +
        '</p>' +
        '<p class="mid-li-desc"></p>' + // 描述
        '<p class="mid-li-type" style="display:none">text</p>' + //类型
        '<p class="mid-li-name" style="display:none"></p>' +    //name属性
        '<p class="mid-li-disabled" style="display:none"></p>' + // disabled 属性
        '<p class="mid-li-value" style="display:none"></p>' +    // value 值
        '<p class="mid-li-placeholder" style="display:none"></p>' + // placeholder 
        '<input  type="text" disabled="disabled" value="中国">' + 
        '<input  type="text" disabled="disabled" value="请选择"> ',
    addressEdit =
        '<div class="r-title">' +
        '<p class="r-title-p">地址</p>' +
        '</div>' +
        '<div class="r-type">' +
        '<p><span class="r-type-key">组件类型</span><span class="r-type-value">单行文本</span></p>' +
        '</div>' +
        //lable 标题
        '<div class="r-list r-name">' +
        '<p>lable</p>' +
        '<input name="mid-li-title" type="text" placeholder="地址">' +
        '</div>' +
        // desc  描述
        '<div class="r-list r-name">' +
        '<p>描述</p>' +
        '<input name="mid-li-desc" type="text" placeholder="这是描述">' +
        '</div>' +
     
        // name  
        '<div class="r-list r-name">' +
        '<p>name 属性 </p>' +
        '<input name="mid-li-name" type="text" >' +
        '</div>' +
        // value限定国家
        '<div class="r-list r-name">' +
        '<p>限定国家</p>' +
        '<input name="mid-li-value" type="text" value="中国">' +
        '</div>' +
        //最小层级
     
        // // disabled
        // '<div class="r-list r-name">' +
        // '<p>disabled 属性 </p>' +
        // '<input name="mid-li-disabled" type="text" >' +
        // '</div>' +
        // placeholder 
        // '<div class="r-list r-name">' +
        // '<p>placeholder 属性 </p>' +
        // '<input name="mid-li-placeholder" type="text" >' +
        // '</div>' +
        // 必填
        '<div class="r-list r-must">' +
        '<input name="mustfill" type="checkbox" value="0" onclick="this.value=(this.value==0)?1:0" >' +
        '<span>这是必填项</span>' +
        '</div>' +
        '<div class="r-list">' +
        '<p>外观样式</p>' +
        '</div>'


















