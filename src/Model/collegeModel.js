const mongoose = require('mongoose')

const collegeModel = new mongoose.Schema(

    {
        name: { type: String, require: true, unique: true, trim: true },
        fullName: { type: String, require: true, trim: true },
        logoLink: { type: String, require: true },
        isDeleted: { type: Boolean, default: false }

    }, { timestamps: true })

module.exports = mongoose.model('CollegeData', collegeModel)

//https://functionup-stg.s3.ap-south-1.amazonaws.com/thorium/iitd.png
