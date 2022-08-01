function userName() {
    var names = prompt("please enter your name!");
    return names;
}

function userGendre() {
    var gendres = prompt("please enter your gendre as male or female!");
    return gendres;
}


function userAge() {
    var ages = prompt("please enter your age!");
    return ages;
}

function checkAge() {
    if(array[2] <= 0){
        var check = alert("age must be bigger than 0");
        return check;
    }
}

function skipWelcomming() {
    var skip = confirm("Do you want to skip the welcomming message?!!");
    
    return skip;
}


function lastCheck() {
    
    if (array[2] <= 0 && array[4] == false) {
        return alert("welcome");
    } else if (array[4] == false && array[1] == "male"){
            return alert("Welcome Mr. " + array[0]);
        } else if (array[4] == false && array[1] == "female") {
                 alert("Welcome Ms. " + array[0]);
            }
            

    }







function gymQuestion() {
    var gym = confirm("do you like gym?");
    return gym;

}

function studyQuestion() {
    var study = confirm("do you like study?");
    return study;
}


function cyclingQuestion() {
    var cycling = confirm("do you like cycling?")
    return cycling;
}


function checkEmpty(array) {
    for(var i = 0; i < array.length; i ++) {
        if(array[i] == '' || array[i] == undefined || array[i] == null){
            array[i] = "invalid";
        }
    }
    return array;
}

var array= [];

array[0] = userName();
array[1] = userGendre();
array[2] = userAge();
array[3] = checkAge();
array[4] = skipWelcomming();
array[5] = lastCheck();

array[6] = gymQuestion();
array[7] = studyQuestion();
array[8] = cyclingQuestion();

checkEmpty(array);

//console.log(array);

function print(array) {
    for(var q = 0; q < array.length; q ++) {
        console.log("element number  " + q + ": ");
        console.log(array[q]);
    }
}

print(array);





