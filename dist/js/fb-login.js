
function statusChangeCallback(response) {
    if (response.status === 'connected') {

        testAPI();
    } else if (response.status === 'not_authorized') {

    } else {

    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '1730287713922335',
        cookie: true,

        xfbml: true,
        version: 'v2.6'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};


(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = 1730287713922335;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {

    FB.api('/me', function (response) {

        localStorage.setItem("name", response.name);

        (function () {
            if (!localStorage.justOnce) {
                localStorage.setItem("justOnce", "true");
                window.location.reload();
            }
        }());

    });
}
