let main1 = document.querySelector(".secondbox");
let main2 = document.querySelector(".thirdbox");



let showtime = () => {

    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();
    let amPm = "AM";
    let days = time.getDay();

    if(days == 1) {
        days = "Monday"
    }
    else if(days == 2) {
        days = "Tuesday"
    }
    else if(days == 3) {
        days = "Wednesday"
    }
    else if(days == 4) {
        days = "Thursday"
    }
    else if(days == 5) {
        days = "Friday"
    }
    else if(days == 6) {
        days = "Saturday"
    }
    else if(days == 0) {
        days = "Sunday"
    }

    let date1 = time.getDay();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    date1 = date1 < 10 ? "0"+date1 : date1;
    month = month < 10 ? "0"+month : month;

    let fulldate = `${days} ${date1}-${month}-${year}`;

    console.log(fulldate);


    min = min < 10 ? "0"+min : min;
    secs = secs < 10 ? "0"+secs : secs;


    if (hours > 12) {
        hours = hours - 12;
        hours = hours < 10 ? "0" + hours : hours;
        amPm = "PM"
    }
    else if (hours == 0) {
        amPm = "AM"
    }

    let currTime = `${hours}-${min}-${secs} ${amPm}`;

    main1.innerHTML = currTime;
    main2.innerHTML = fulldate;


}
setInterval(showtime, 1000);

showtime();





