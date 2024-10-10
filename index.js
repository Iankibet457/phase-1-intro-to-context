// Your code here
// let info = ["ian","kibet","ceo","100",[],[],]
function createEmployeeRecord([a,b,c,d]){
    let records = {
        firstName:a,
        familyName:b,
        title:c,
        payPerHour:d,
        timeInEvents:[],
        timeOutEvents:[]

    }
    // records = info
    return records
}
function createEmployeeRecords(arrays){
    let records = []
    for (let array of arrays){
        records.push(createEmployeeRecord(array))
    }
        return records

}
// 
function createTimeInEvent(record,a){
    // let newrecord = createEmployeeRecord(record)
    let time = a.split(" ")
    record.timeInEvents =[ {
        type:"TimeIn",
        hour:parseInt(time[1]),
        date:time[0],

    }]
    return record

}
function createTimeOutEvent(record,a){
    // let newrecord = createEmployeeRecord(record)
    let time = a.split(" ")
    record.timeOutEvents =[ {
        type:"TimeOut",
        hour:parseInt(time[1]),
        date:time[0],

    }]
    return record

}
function hoursWorkedOnDate(record,a){
    if (record.timeInEvents[0].date == a && record.timeOutEvents[0].date == a){

        let time  = record.timeOutEvents[0].hour - record.timeInEvents[0].hour
        return time/100
    }
    

}
function wagesEarnedOnDate(record,a){
    let update = hoursWorkedOnDate(record,a)
    return update * record.payPerHour

}

function allWagesFor(record){
    // let dates = []
    // for 
    let update  = [wagesEarnedOnDate(record)]
    let sum = update.reduce((acc,num)=>{
        return acc + num
    },0)

    return sum

    
    // for(let date of dates){
    //     [].push(date)
    // }
    // return update
    

    

}