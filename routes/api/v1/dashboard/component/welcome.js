const Task = require("../../../../../Models/Private/Enquiry/Task")
const User = require("../../../../../Models/User")

async function welcomeMsg(req,res){

    let msg = "Welcome, " + req.user.lastName + " " +req.user.firstName
    let firstName = req.user.firstName
    let lastName = req.user.lastName
    let designation = req.user.designation
    let taskCount = await Task.countDocuments({"employee._id":req.user._id})
    let subMsg = ""
    if (taskCount == 0){
        subMsg = "Congratulation, You have 0 pending task"
    } else if (taskCount <=2){
        subMsg = `You have Just ${taskCount} pending task`
    } else {
        subMsg = `You have ${taskCount} pending task`
    }
    return {msg, taskCount, subMsg, firstName,lastName,designation:designation.charAt(0).toUpperCase() + designation.slice(1)}

}

module.exports = welcomeMsg