console.log("node is running!")


/*
    create function createEmployeeRecord. takes an array ["firstName", "familyName", "title", hourlyRate].
        Return-
            {
                firstName:
                familyName:
                title:
                payPerHour:
                timeInEvents:
                timeOutEvents:
            }
    Function will take array elements and punch them as properties into matching keys.
         if no matching key, create empty array. []

*/
function createEmployeeRecord(employeeRecord) {
   return  employeeRecord.reduce(employee => {
        const employeeObj = {
            firstName : employeeRecord[0],
            familyName : employeeRecord[1],
            title : employeeRecord[2],
            payPerHour : employeeRecord[3],
            timeInEvents : [],
            timeOutEvents : []
       };
      return employeeObj
    })
}

//console.log(createEmployeeRecord(employeeRecord))

// make a function createEmployeeRecords, that takes an array of arrays and returns an array of objects
//  using data from createEmployeeRecord function.
function createEmployeeRecords(employeeRecords) {
   return employeeRecords.map(employees => {
        return createEmployeeRecord(employees)
   })
}
/*
    create a function createTimeInEvent, takes 'employeeObj' and dateStamp as parameters
        It will return the employeeObj w/ key timeInEvents updated with new key:value pairs.
            ex..
                 {
                firstName:
                familyName:
                title:
                payPerHour:
                timeInEvents:{
                    type: "TimeIn",
                    hour: HHMM,
                    date: YYY-MM-DD
                }
                timeOutEvents:
            }

*/
function createTimeInEvent(employeeObj, dateStamp) {
    const dateAndTime = dateStamp.split(' ') // => [YYYY-MM-DD, time]
    employeeObj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateAndTime[1], 10),
        date: dateAndTime[0]
    });
        return employeeObj
}


function createTimeOutEvent(employeeObj, dateStamp) {
    const dateAndTime = dateStamp.split(' ')
    employeeObj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateAndTime[1], 10),
        date: dateAndTime[0]
    })
        return employeeObj
}

/*
    create function hoursWorkedOnDate, it's parameters will be employeeObj and date => YYYY-MM-DD.
        The function will see how many hours the employee has worked on that given day using timeIn and timeOut event.
*/

function hoursWorkedOnDate(employeeObj, date) {
    const timeOut = employeeObj.timeOutEvents.find(event => event.date === date).hour;
    const timeIn = employeeObj.timeInEvents.find(event => event.date === date).hour;
    if(!timeIn || !timeOut) {
        return 0
    }
    const hoursWorked = (timeOut - timeIn) / 100;
    return hoursWorked;
}

/*
 make function wagesEarnedOnDate that will take employeeObj and date as arguments.
 it will return the pay owed using the return value of hoursWorkedOnDate function * payPerHour from employeeObj
*/

function wagesEarnedOnDate(employeeObj, date) {
    const pay = hoursWorkedOnDate(employeeObj, date) * employeeObj.payPerHour
    return pay
}

function allWagesFor(employeeObj) {
    const dates = employeeObj.timeInEvents.find(event => event.date === date);
    return hoursWorkedOnDate(employeeObj, dates)
    
}

function calculatePayroll(empoyeeObj) {
    employeeObj.map()
}