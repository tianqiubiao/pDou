/**
 * Created by 苏伊尔哈 on 2016/5/9.
 */
charset = 'uft8';
//登录界面
function login() {
    var str = '';
    str += '<div class="sign_in">';
    str += '<div class="sign_top">登录</div>';
    str += '<div class="sign_close"></div>';
    str += '<div class="sign_foot">';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB sign_footD sign_phone"><input type="tel" placeholder="手机号" class="sign_tel1" id="userId"></div>';
    str += '<div class="sign_footC" id="worUesr" >您输入的手机号有误</div>';
    str += '</div>';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB sign_footD sign_footE sign_pass"><input type="password" placeholder="密码" class="sign_tel2" id="password"></div>';
    str += '<div class="sign_footC  sign_tel2_2">您输入的密码有误</div>';
    str += '</div>';
    str += '<div class="sign_footE">';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB"><input type="text" placeholder="不区分大小写" class="sign_tel3"></div>';
    str += '<div class="sign_fooC  sign_tel3_3"></div>';
    str += '</div>';
    str += '<div class="sign_footF"></div>';
    str += '</div>';
    str += '<div class="sign_down" id="loginBtn">登录</div>';
    str += '<div class="sign_in_down">';
    str += '<div class="redNum id_zh">注册领活动本金</div>';
    str += '<div class="queNum">忘记密码</div>';
    str += '</div>';
    str += '</div>';
    str += '</div>';

    $('.sign_on').html(str);
    $('.sign_close').click(function () {
                               $('.sign_on').css('display', '');
                           }
    )
    //登录验证
    //sign_tel1 手机号  sign_tel1_1警告框
    //sign_tel2 密码     sign_tel2_2
    //sign_tel3 验证码   sign_tel3_3
    //手机号验证
    var reg = /^1\d{10}$/;
    var phoneReg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
    $('#userId').blur(function () {
                          if (!reg.test($('#userId').val())) {
                              $('#worUesr').css('display', 'block');

                          }else {
                              $('#worUesr').css('display', 'none');
                          }
                      }
    )

    $('.sign_in').keydown(function (event) {
                              if (event.keyCode === 13) {

                                  if (phoneReg.test($('#userId').val())) {
                                      var user = $('#userId').val();
                                      var passWord = $('#password').val();
                                      var obj = {"user": user, "password": passWord}
                                      $("#loginBtn").trigger("click");
                                  }

                              }
                          }
    );
    $("#loginBtn").click(function () {
                             if (phoneReg.test($('#userId').val())) {
                                 var user = $('#userId').val();
                                 var passWord = $('#password').val();
                                 var obj = {"user": user, "password": passWord}
                                 console.log(obj)
                             }
                         }
    );

    //注册
    $('.id_zh').click(function () {
                          window.open('register.html')
                      }
    )


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
    str += '<div><input type="text" class="trueName_1" id="trueName_1" ></div>';
    str += '</div>';
    str += '<div class="trueNameA">';
    str += '<div>身份证号：</div>';
    str += '<div><input type="text" class="trueName_2" id="trueName"></div>';
    str += '</div>';
    str += '<div class="sign_down" id="trueNameDown">立即认证</div>';
    str += '</div>';
    str += '</div>';
    $('.trueName').html(str);
    $('.sign_close').click(function () {
                               $('.sign_on').css('display', '');
                           }
    )
//实名验证
    //trueName_1 name
    //trueName_2 身份证号

    /*
     * -----------------------------------------------------------------------------------------省份-市区县-----年------------月-------日-----
     * /^((1[1|2|3|4|5])|(2[1|2|3])|(3[1|2|3|4|5|6|7])|(4[1|2|3|4|5|6])|(5[0|1|2|3|4])|(6[1|2|3|4|]))(\d{4})(19)([5-9]\d)(0|1[\d])(0|1|2[\d])(?:\d{2})(\d)(?:\d|X)$/
     * var reg=/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-4]))([0-4]|9)(\d{3})(19)([5-9]\d)(0|1[\d])(0|1|2[\d])(?:\d{2})(\d)(?:\d|X)$/;
     * var reg=/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-4]))(\d{4})(19)([5-9]\d)(0|1[\d])(0|1|2[\d])(?:\d{2})(\d)(?:\d|X)$/;
     * 中文正则
     * var re = /[^\u4e00-\u9fa5]/;
     * */
    $('.trueName').css('display', 'block');
    var re = /[^\u4e00-\u9fa5]/;
    var reg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-4]))([0-4]|9)(\d{3})(19)([5-9]\d)(0|1[\d])([0|1|2][\d])(?:\d{2})(\d)(?:\d|X)$/;
    $('#trueName').blur(function () {
                            var st = $('#trueName').val();
                            if (st.length === 18) {
                                if (!re.test(st)) {
                                    $(this).parent().css('border-color', 'red');
                                } else {
                                    $(this).parent().css('border-color', '#ccc');
                                }
                            } else {
                                $(this).parent().css('border-color', 'red');
                            }
                        }
    )
    $('#trueName_1').blur(function (e) {
                              //name(e)
                              var str = $('#trueName_1').val();
                              if (!re.test(str)) {
                                  if (str.length >= 2) {
                                      $(this).parent().css('border-color', '#ccc');
                                  } else {
                                      $(this).parent().css('border-color', 'red');
                                  }
                              } else {
                                  $(this).parent().css('border-color', 'red');
                              }


                          }
    )
    $('#trueNameDown').click(function (e) {


    })


}
trueName()
//绑定交易列表  ：没有数据
function my_accountList1() {
    var str = ''
    str += '<ul>';
    str += '<li>时间</li>';
    str += '<li>交易类型</li>';
    str += '<li>金额</li>';
    str += '<li>账户余额</li>';
    str += '<li>备注</li>';
    str += '</ul>';
    $('#my_accountList1').html(str);
}



































