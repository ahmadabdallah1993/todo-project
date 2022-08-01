function userName() {

    var names = prompt("please enter your name!")
    return names;
}

function userGendre() {
    var gendres = prompt("please enter your gendre as male or female!")
    
    return gendres;
}


function userAge() {
    var ages = prompt("please enter your age!");
    
    return ages;
}

function checkAge() {
    if(arr[2] <= 0){
        var check = alert("age must be bigger than 0");
        return check;
    }
}

function skipWelcomming() {
    var skip = confirm("Do you want to skip the welcomming message?!!");
    
    return skip;
}


function lastCheck() {
    
    if (arr[2] <= 0 && arr[4] == false) {
        return alert("welcome");
    } else {
        if (arr[4] == false && arr[1] == "male"){
            return alert("Welcome Mr. " + arr[0]);
        } else {
                 alert("Welcome Ms. " + arr[0]);
            }
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


var arr = [];

arr[0] = userName();
arr[1] = userGendre();
arr[2] = userAge();
arr[3] = checkAge();
arr[4] = skipWelcomming();
arr[5] = lastCheck();

arr[6] = gymQuestion();
arr[7] = studyQuestion();
arr[8] = cyclingQuestion();

console.log(arr);







