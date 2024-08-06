// timer code to run a specific job at a desired time every day
// in Coordinated Universal Time (UTC).

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;

const desiredTimeInHoursInUTC = 18; // fill out your desired hour in UTC!
const desiredTimeInMinutesInUTC = 30; // fill out your desired minutes in UTC!
const desiredTimeInSecondsInUTC = 0; // fill out your desired seconds in UTC!

const currentDate = new Date();

const controlDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), desiredTimeInHoursInUTC, desiredTimeInMinutesInUTC, desiredTimeInSecondsInUTC);
let desiredDate;

if (currentDate.getTime() <= controlDate.getTime()) {
    desiredDate = controlDate;
}
else {
    desiredDate = new Date(controlDate.getTime() + msInDay);
}

const msDelta = desiredDate.getTime() - currentDate.getTime();

setTimeout(setupInterval, msDelta);

function setupInterval() {
    actualJob();

    setInterval(actualJob, msInDay);
}

function actualJob() {
    console.log('test');
}

// End timer 
