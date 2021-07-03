
function validate() {
    var regId = /^[a-zA-Z0-9]+$/;
    var regTitle = /^[a-zA-Z]+$/;
    
    if ($("#productId").val() == "") {
        alert("Please enter Product ID");
        return false;
    }
    if (!regId.test($("#productId").val())) {
        alert("Please enter a valid ID as per regx");
        return false;
    }
   
    if ($("#productTitle").val() == "") {
        alert("Please enter Product Title");
        return false;
    }
    if (!regTitle.test($("#productTitle").val())) {
        alert("Please enter valid");
        return false;
    }
    if ($("#productPrice").val() == "") {
        alert("Please enter Product Price");
        return false;
    }
    if ($("#productQuantity").val() == "") {
        alert("Please enter Product Quantity");
        return false;
    }
    if (!$("#check1").prop('checked')) {
        alert("Please accept terms and conditions");
        return false;
    }

   
}
