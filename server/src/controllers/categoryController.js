const categoryServices = require("../services/categoryServices");

const getAllCategories = (req, res) => {
    categoryServices.getAllCategories((error, result) => {
        if(error){
            console.error(error);
            res.status(500).json({error: "An error occured"})
        } else {
            res.status(200).json(result)
        }
    }) 
}

module.exports = {
    getAllCategories   
}