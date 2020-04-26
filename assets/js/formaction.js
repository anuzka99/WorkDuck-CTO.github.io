// Form API 
var G_API_GATEWAY_URL_STR = "https://2zie9obp6l.execute-api.us-east-1.amazonaws.com/test";

function postSubmit(settings) {
    $.ajax(settings).done(function (response) {
        document.getElementById("form-thanks").innerHTML = response.message + "<br>Thank you for reaching out to us. We will get back to you as soon as possible."
        document.getElementById("form-thanks-1").innerHTML = response.message + "<br>Thank you for reaching out to us. We will get back to you as soon as possible."
    });
};

function postFormData(se) {

    document.getElementById("form-thanks").innerHTML = "Please wait ..."
    document.getElementById("form-thanks-1").innerHTML = "Please wait ..."

    se.preventDefault();
    var formObj = se.target;
    var formData = {
        "email": formObj.elements[1].value,
        "name": formObj.elements[0].value,
        "phone": formObj.elements[2].value
    }
    var settings = {
        "url": G_API_GATEWAY_URL_STR,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(formData),
    };
    postSubmit(settings);
};

$(document).on("submit", postFormData);