const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");

async function LIC627A(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));

    let myData = {
        resident:myResident?.firstName + " " + myResident?.lastName,
        client:myResident?.firstName + " " + myResident?.lastName,
        client2:"6458414asdfa",
        date:"15116 Roxford St",
        sign:"LA",
        relation:"CA",
        address:"645144",
        cityZip:"645144",
      
    };


    // Set values from basicInfo, serviceInfo, rate, and pay


    return res.json({
        message: "LIC 627A DATA Loaded",
        variant: "success",
        data: myData,
    });
}

module.exports = LIC627A;
