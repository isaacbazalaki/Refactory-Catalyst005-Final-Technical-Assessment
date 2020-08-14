// function printError (elementId, invalidInput) {
//      document.getElementById(elementId).innerHTML = invalidInput
// }

// function validate() {
//     var username = document.clientReg.username.value;
//     var telephoneNumber = document.clientReg.telephoneNumber.value;
//     var email = document.clientReg.email.value;
//     var location = document.clientReg.location.value;
//     var nationalId = document.clientReg.nationalId.value;
//     var refereeNumber = document.clientReg.refereeNumber.value;
//     var productName = document.clientReg.productName.value;
//     var productDescription = document.clientReg.productDescription.value;
//     var unitPrice = document.clientReg.unitPrice.value;
//     var initialPay = document.clientReg.initialPay.value;
//     var dateOfPay = document.clientReg.dateOfPay.value;
//     var nextDateOfPay = document.clientReg.nextDateOfPay.value;
//     var remainingBalance = document.clientReg.remainingBalance.value;
//     var purchaseReceipt = document.clientReg.purchaseReceipt.value;

//     var usernameErr = true;
//     if (username==''){
//         printError('usernameErr','invalid');
//     }else {
//         printError('usernameError','');
//         usernameErr = false;
//     }
//     if((usernameErr) ==true) {
//         event.preventDefault();
//     }else {
//         event.currentTarget.submit();
//     }
// }
// //********************************************************************************************************* 

// function printError(elemId, hintMsg){
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// // ____________ Validating the add agents form
// function validate_agent_form(){
//     var firstname = document.add_agent.firstname.value;
//     var lastname = document.add_agent.lastname.value;
//     // var username = document.add_agent.username.value;
//     var gender = document.add_agent.gender.value;
//     var email = document.add_agent.email.value;
//     var nin = document.add_agent.nin.value;
//     var password = document.add_agent.password.value;
//     var city = document.add_agent.city.value;
//     var address = document.add_agent.address.value;

//     // ___ Defining error varriables with defaul value
//     var f_name_err = l_name_err /*= user_name_err*/ = gender_err = email_err = nin_err = pwd_err = city_err = address_err = true;

//     // // _______ validating first name
//     // if(firstname == ""){
//     printError("f_name_err", "please enter your name");
// }
// // else  if(firstname.length < 2 || firstname.length > 12){
// //     printError("f_name_err", "make sure name is btn 2 to 12 characters");
// // }
// else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(firstname) === false){
//         printError("f_name_err", "please enter a valid name")
//     }else{
//         printError("f_name_err", "");
//         f_name_err = false;
//     }
// }

// // __________ Validating last name
// if(lastname == ""){
//     printError("l_name_err", "please enter your name");
// }else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(lastname) === false || ){
//         printError("f_name_err", "please enter a valid name")
//     }else{
//         printError("l_name_err", "");
//         l_name_err = false;
//     }
// }

// __________ Validating user name --- relook at
// if(username.length == ""){
//     printError("user_name_err", "please enter your name");
// }else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(username) === false){
//         printError("user_name_err", "please enter a valid name")
//     }else{
//         printError("user_name_err", "");
//         user_name_err = false;
//     }
// }

// // _____ Validating gender
// if(gender == ""){
//     printError("gender_err", "please select your gender");
// }else{
//     printError("gender_err", "");
//     gender_err = false;
// }
// // _________ Validate email address
// if(email == ""){
//     printError("email_err", "please enter your Email Address");
// }else{
//     var regex = /^\S+@\S+\.\S+$/;
//     if(regex.test(email) === false){
//         printError("email_err", "please enter a valid Email")
//     }else{
//         printError("email_err", "");
//         email_err = false;
//     }
// }

// // _________ Validating nin
// if(nin == ""){
//     printError("nin_err", "please enter your NIN");
// }else{
//     printError("nin_err", "");
//     nin_err = false;
// }

// _________ Validating password
// if(password == ""){
//     printError("pwd_err", "please enter your password");
// }else{
//     printError("pwd_err", "");
//     pwd_err = false;
// }
// // ____ Validating city
// if(city == "Choose..."){
//     printError("city_err", "please select the city you are From");
// }else{
//     printError("city_err", "");
//     city_err = false;
// }
// // _________ validating Address
// if(address == ""){
//     printError("address_err", "please enter your Address");
// }else{
//     printError("address_err", "");
//     address_err = false;
// }


// // _______ Preventing the form from being submited if their are any errors
//     if((f_name_err || l_name_err /*|| user_name_err*/ || gender_err || email_err || nin_err || pwd_err || city_err || address_err) == true){
//         // return false
//         event.preventDefault()
//     }else{
//         // return true
//         event.currentTarget.submit()
//     }

// }

// // ____________ Validating the add products form
// function validate_products_form(){
//     var product = document.add_product.product.value;
//     var make = document.add_product.make.value;
//     var date = document.add_product.date.value;
//     var serial_no = document.add_product.serial_no.value;
//     var price = document.add_product.price.value;
//     var initial_pay = document.add_product.initial_pay.value;
//     var Pay_Interval = document.add_product.Pay_Interval.value;
//     var category = document.add_product.category.value;
//     var stock = document.add_product.stock.value;


// // ___ Defining error varriables with defaul value
// var pdt_err = make_err = date_err = serial_err = px_err = initial_pay_err = pay_interval_err = category_err = stock_err = true;

// // _______ validating product name
// if(product == ""){
//     printError("pdt_err", "please enter product name");
// }else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(product) === false){
//         printError("pdt_err", "please enter a valid product name")
//     }else{
//         printError("pdt_err", "");
//         pdt_err = false;
//     }
// }
// // __________ Validating product make
// if(make == ""){
//     printError("make_err", "please enter product make");
// }else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(make) === false){
//         printError("make_err", "please enter a valid make")
//     }else{
//         printError("make_err", "");
//         make_err = false;
//     }
// }

// // _______ Validating product serial number
// // look for more validations on serial number
// if(serial_no == ""){
//     printError("serial_err", "please enter product serial number");
// }else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(serial_no) === false){
//         printError("serial_err", "please enter a valid Serial number")
//     }else{
//         printError("serial_err", "");
//         serial_err = false;
//     }
// }

// // _________ Validate product price
// if(price == ""){
//     printError("px_err", "please enter the price");
// }else{
//     printError("px_err", "");
//     px_err = false;
// }

// // _________ Validate initial pay
// if(initial_pay == ""){
//     printError("initial_pay_err", "please enter initial pay");
// }else{
//     printError("initial_pay_err", "");
//     initial_pay_err = false;
// }

// // _________ Validate  pay intervals
// if(Pay_Interval == ""){
//     printError("pay_interval_err", "please enter pay interval");
// }else{
//     printError("pay_interval_err", "");
//     pay_interval_err = false;
// }

// // _________ Validating date of entry
// if(date == ""){
//     printError("date_err", "Date of entry is required");
// }else{
//     printError("date_err", "");
//     date_err = false;
// }

// // __________ validating stock
// if(stock == ""){
//     printError("stock_err", "please provide the available stock");
// }else{
//     printError("stock_err", "");
//     stock_err = false;
// }
// stock_err

// // ____ Validating category
// if(category == "Choose..."){
//     printError("category_err", "please select the category of the product");
// }else{
//     printError("category_err", "");
//     category_err = false;
// }

// _______ Preventing the form from being submited if their are any errors
//     if((pdt_err || make_err || date_err || serial_err || px_err || initial_pay_err || pay_interval_err || category_err || stock_err) == true){
//         // return false
//         event.preventDefault()
//     }else{
//         // return true
//         event.currentTarget.submit()
//         // alert("new purchase recorded")
//     }

// }


function printError(elementId, invalidInput) {
    document.getElementById(elementId).innerHTML = invalidInput;
}

//REGEX EXPRESSIONS
// var letters = /^[A-Za-z]+$/; - only letters
// /^\d{5}$/ 
// /^[0-9a-zA-Z]+$/ - Alphanumeric
// /^[0-9]+$/ - numbers
// /^\S+@\S+\.\S+$/; - EMAIL

function validate() {
    var username = document.clientReg.username.value;
    var telephoneNumber = document.clientReg.telephoneNumber.value
    var email = document.clientReg.email.value;
    var location = document.clientReg.location.value;
    var nationalId = document.clientReg.nationalId.value;
    var refereeNumber = document.clientReg.refereeNumber.value;
    var productName = document.clientReg.productName.value;
    var productDescription = document.clientReg.productDescription.value;
    var unitPrice = document.clientReg.unitPrice.value;
    var initialPay = document.clientReg.initialPay.value;
    var dateOfPay = document.clientReg.dateOfPay.value;
    var nextDateOfPay = document.clientReg.nextDateOfPay.value;
    var remainingBalance = document.clientReg.remainingBalance.value;
    var purchaseReceipt = document.clientReg.purchaseReceipt.value;


    //VALIDATING FULL NAME
    var usernameErr = telephoneErr = emailErr = locationErr = nationalErr = refereeErr = nameErr = descriptionErr = unitErr = initialErr = dateErr = nextErr = remainingErr = receiptErr = true;

    if (username === '') {
        printError('usernameErr', 'Please enter your name');
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError('usernameErr', 'Please enter a valid name');
        } else {
            printError('usernameErr', '');
            usernameErr = false;
        }
    }

    // Validate TELEPHONE number
    if (telephoneNumber === "") {
        printError("telephoneErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(telephoneNumber) === false) {
            printError("telephoneErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("telephoneErr", "");
            telephoneErr = false;
        }
    }

    //validate email
    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //validating location
    if (location === "") {
        printError("locationErr", "please enter your location");
    } else {
        printError("locationErr", "");
        locationErr = false;
    }

    //Validating national Id
    if (nationalId === "") {
        printError("nationalErr", "please enter your NIN");
    } else {
        var regex = /^[A-Z]{3}[0-9]{1-8}[A-Z]*$/;
        if (regex.test(nationalId) === false) {
            printError("nationalErr", "Please enter a valid NIN number");
        } else {
            printError("nationalErr", "");
            nationalErr = false;
        }
    }

        //Validating referee number
        if (refereeNumber === "") {
            printError("refereeErr", "please enter your serial number");
        } else {
            var regex = /^[A-Z]{3}[0-9]{1-8}[A-Z]*$/;
            if (regex.test(refereeNumber) === false) {
                printError("refereeErr", "Please enter a valid serial number");
            } else {
                printError("nationalErr", "");
                nationalErr = false;
            }
        }
        //validating product name
        if (productName === "") {
            printError("nameErr", "please enter product name");
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if (regex.test(productName) === false) {
                printError("nameErr", "please enter a valid product name")
            } else {
                printError("nameErr", "");
                nameErr = false;
            }
        }

        //validating product description
        if (productDescription === "") {
            printError("descriptionErr", "please enter the description");
        } else {
            printError("descriptionErr", "");
            descriptionErr = false;
        }

        //Validate product price
        if (unitPrice === "") {
            printError("unitErr", "please enter price");
        } else {
            printError("unitErr", "");
            unitErr = false;
        }

        //Validate initial pay
        if (initialPay === "") {
            printError("initialErr", "please enter initial pay");
        } else {
            printError("initialErr", "");
            initialErr = false;
        }

        //Validating date of entry
        if (dateOfPay === "") {
            printError("dateErr", "Date is required");
        } else {
            printError("dateErr", "");
            dateErr = false;
        }

        //Validating next date of entry
        if (nextDateOfPay === "") {
            printError("nextErr", "Date of entry is required");
        } else {
            printError("nextErr", "");
            nextErr = false;
        }

        //Validate remaining balance
        if (remainingBalance === "") {
            printError("remainingErr", "please enter remaining balance");
        } else {
            printError("remainingErr", "");
            remainingErr = false;
        }

        //Validating purchase receipt
        if (purchaseReceipt === "") {
            printError("receiptErr", "image required");
        } else {
            printError("receiptErr", "");
            receiptErr = false;
        }

        if ((usernameErr || telephoneErr || emailErr || locationErr || nationalErr || refereeErr || nameErr || descriptionErr || unitErr || initialErr || dateErr || nextErr || remainingErr || receiptErr) == true) {
            // return false
            event.preventDefault()
        } else {
            // return true
            event.currentTarget.submit()
        };
    }
    // - } else {
    // -   // Creating a string from input data for preview
    // -   var dataPreview = "You've entered the following details: \n" +
    // -     "Full name: " + username + "\n" +
    // -     "Telephone number: " + telephoneNumber + "\n" +
    // -     "Email: " + email + "\n" +
    // -     "Location: " + location + "\n" +
    // -     "National id: " + nationalId + "\n" +
    // -     "Referee number: " + refereeNumber + "\n" +
    // -     "Product name: " + productName + "\n" +
    // -     "Product description: " + productDescription + "\n" +
    // -     "Unit price: " + unitPrice + "\n" +
    // -     "Initial pay: " + initialPay + "\n" +
    // -     "Date of pay: " + dateOfPay + "\n" +
    // -     "Next date of pay: " + nextDateOfPay + "\n" +
    // -     "Remaining balance: " + remainingBalance + "\n" +
    // -     "Purchase receipt: " + purchaseReceipt + "\n" +

    // -       // Display input data in a dialog box before submitting the form
    // -   alert(dataPreview);
    // - }

    // Preventing the form from being submited if their are any errors