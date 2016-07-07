function logInApp() {
	$('.uv_799-inner-container').hide();
	$('.uv_789-inner-container').show();
}
function signUpApp() {
	$('.uv_789-inner-container').hide();
	$('.uv_799-inner-container').show();
}
function signUpAppMobile() {
	$('#signUpBtnMobile').hide();
	$('#loginContainerMobile').hide();
	$('#facebookContainerMobile').hide();
	$('#signUpContainerMobile').show();
	$('#loginBtnMobile').show();
}
function loginAppMobile() {
	$('#signUpBtnMobile').show();
	$('#loginContainerMobile').show();
	$('#facebookContainerMobile').show();
	$('#signUpContainerMobile').hide();
	$('#loginBtnMobile').hide();
}
function signUp(btn) {
	var $btn = $(btn).button('loading');

	setTimeout(function(){
		window.location = 'register.html';
	}, 1000);
}
function showForgotPasswordScreen() {
	$('.forgot-pass23').hide();
	$('.vw-account-text-894').hide();
	$('.forgot-pass56').show();
}
function goToRoute(url) {
	window.location = url;
}
var onresize = function(e) {
	//note i need to pass the event as an argument to the function
	width = e.target.outerWidth;
	height = e.target.outerHeight;
	if(height < 900) {
		$('#vwContainer').height(500);
		$('.uv_799-inner-container').css({"margin" : "0 0 0 50px"});
		$('.uv_789-inner-container').css({"margin" : "50px 0 0 50px"});
	} else {
		$('#vwContainer').height(680);
		$('.uv_799-inner-container').css({"margin" : "75px 0 0 50px"});
		$('.uv_789-inner-container').css({"margin" : "115px 0 0 50px"});
	}
}
window.addEventListener("resize", onresize);

var screenW = window.outerWidth,
	screenH = window.outerHeight;

if(screenH < 900) {
	$('#vwContainer').height(500);
	$('.uv_799-inner-container').css({"margin" : "0 0 0 50px"});
	$('.uv_789-inner-container').css({"margin" : "50px 0 0 50px"});
} else {
	$('#vwContainer').height(680);
	$('.uv_799-inner-container').css({"margin" : "75px 0 0 50px"});
	$('.uv_789-inner-container').css({"margin" : "115px 0 0 50px"});
}

