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