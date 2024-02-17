const packagesServices = require("../../services/adminServices/packagesServices");

const getAllPackages = (req, res) => {
    packagesServices.getAllPackages((error, result) => {
        if(error){
            console.error(error);
            res.status(500).json({error: "An error occured"})
        } else {
            res.status(200).json(result)
        }
    }) 
}

module.exports = {
    getAllPackages   
}