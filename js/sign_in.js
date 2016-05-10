/**
 * Created by 苏伊尔哈 on 2016/5/9.
 */
charset='uft8';
//登录界面
function sign_in() {
    var str = '';
    str += '<div class="sign_in">';
    str += '<div class="sign_top">登录</div>';
    str += '<div class="sign_close"></div>';
    str += '<div class="sign_foot">';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB sign_footD sign_phone"><input type="tel" placeholder="手机号" class="sign_tel1"></div>';
    str += '<div class="sign_footC sign_tel1_1" ></div>';
    str += '</div>';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB sign_footD sign_footE sign_pass"><input type="password" placeholder="密码" class="sign_tel2"></div>';
    str += '<div class="sign_footC  sign_tel2_2">您输入的密码有误</div>';
    str += '</div>';
    str += '<div class="sign_footE">';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB"><input type="text" placeholder="不区分大小写" class="sign_tel3"></div>';
    str += '<div class="sign_fooC  sign_tel3_3"></div>';
    str += '</div>';
    str += '<div class="sign_footF"></div>';
    str += '</div>';
    str += '<div class="sign_down">登录</div>';
    str += '<div class="sign_in_down">';
    str += '<div class="redNum">注册领活动本金</div>';
    str += '<div class="queNum">忘记密码</div>';
    str += '</div>';
    str += '</div>';
    str += '</div>';

    $('.sign_on').html(str);
    $('.sign_close').click(function(){
        $('.sign_on').css('display','');
    })
//登录验证
    //sign_tel1 手机号  sign_tel1_1警告框
    //sign_tel2 密码     sign_tel2_2
    //sign_tel3 验证码   sign_tel3_3
    $('.sign_tell1').blur(function(){
        if( $('.sign_tell1').val()<11){
            $('.sign_tell_1').html('您输入的手机号有误')
        }
    })





}
//实名认证
function trueName() {
    var str = '';
    str += '<div class="name_in">';
    str += '<div class="sign_top">实名认证</div>';
    str += '<div class="sign_close" ></div>';
    str += '<div class="trueNameFoot">';
    str += '<div class="trueNameA">';
    str += '<div>真实姓名：</div>';
    str += '<div><input type="text" class="trueName_1"></div>';
    str += '</div>';
    str += '<div class="trueNameA">';
    str += '<div>身份证号：</div>';
    str += '<div><input type="text" class="trueName_2"></div>';
    str += '</div>';
    str += '<div class="sign_down">立即认证</div>';
    str += '</div>';
    str += '</div>';
    $('.trueName').html(str);
    $('.sign_close').click(function(){
        $('.trueName').css('display','');
    })
//实名验证
    //trueName_1 name
    //trueName_2 身份证号


}

//绑定交易列表  ：没有数据
function my_accountList1(){
    var str=''
    str+='<ul>';
    str+='<li>时间</li>';
    str+='<li>交易类型</li>';
    str+='<li>金额</li>';
    str+='<li>账户余额</li>';
    str+='<li>备注</li>';
    str+='</ul>';
    $('#my_accountList1').html(str);
}



































