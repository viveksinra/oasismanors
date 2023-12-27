const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");

async function LIC621(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));

    let basicInfo = {
        residentName:myResident?.firstName + " " + myResident?.lastName,     
        ssNo:myResident?.ssNumber,
        n1:"545",des1:"",
        date1:"05-April-2023",location1:"",n2:"545",
        des2:"",date2:"05-April-2023",location2:"",
        n3:"545",des3:"",date3:"05-April-2023",
        location3:"",n4:"545",des4:"",
        date4:"05-April-2023",location4:"",
        n5:"545",des5:"",date5:"05-April-2023",
        location5:"",n6:"545",des6:"",
        date6:"05-April-2023",location6:"",n7:"545",
        des7:"",date7:"05-April-2023",location7:"",
        n8:"545",des8:"",date8:"05-April-2023",location8:"",n9:"545",des9:"",date9:"05-April-2023",location9:"",n10:"545",des10:"",date10:"05-April-2023",location10:"",n11:"545",des11:"",date11:"05-April-2023",location11:"",n12:"545",des12:"",date12:"05-April-2023",location12:"",n13:"545",des13:"",date13:"05-April-2023",location13:"",n14:"545",des14:"",date14:"05-April-2023",location14:"",
    };

    let pay = {
        bn1:"asdf",bdes1:"s5sfdf0",bdate1:"465151sdsds",bl1:"sdfsdfsd",
        bn2:"asdf",bdes2:"s5sfdf0",bdate2:"465151sdsds",bl2:"sdfsdfsd",
        bn3:"asdf",bdes3:"s5sfdf0",bdate3:"465151sdsds",bl3:"sdfsdfsd",
        bn4:"asdf",bdes4:"s5sfdf0",bdate4:"465151sdsds",bl4:"sdfsdfsd",
        bn5:"asdf",bdes5:"s5sfdf0",bdate5:"465151sdsds",bl5:"sdfsdfsd",
        bn6:"asdf",bdes6:"s5sfdf0",bdate6:"465151sdsds",bl6:"sdfsdfsd",
        bn7:"asdf",bdes7:"s5sfdf0",bdate7:"465151sdsds",bl7:"sdfsdfsd",
        bn8:"asdf",bdes8:"s5sfdf0",bdate8:"465151sdsds",bl8:"sdfsdfsd",
        bn9:"asdf",bdes9:"s5sfdf0",bdate9:"465151sdsds",bl9:"sdfsdfsd",
        bn10:"asdf",bdes10:"s5sfdf0",bdate10:"465151sdsds",bl10:"sdfsdfsd",
        bn11:"asdf",bdes11:"s5sfdf0",bdate11:"465151sdsds",bl11:"sdfsdfsd",
        bn12:"asdf",bdes12:"s5sfdf0",bdate12:"465151sdsds",bl12:"sdfsdfsd",
        bn13:"asdf",bdes13:"s5sfdf0",bdate13:"465151sdsds",bl13:"sdfsdfsd",
        bn14:"asdf",bdes14:"s5sfdf0",bdate14:"465151sdsds",bl14:"sdfsdfsd",
        title:"sdfahdfjh",date:"sdfsdfsd",licensee:"sdfasdfasdf",
        completedDate:"sdfsdfsdf"
    };

    return res.json({
        message: "LIC621 DATA Loaded",
        variant: "success",
        data: { basicInfo, pay},
    });
}

module.exports = LIC621;
