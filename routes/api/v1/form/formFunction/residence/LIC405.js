const Payment = require("../../../../../../Models/Private/Account/Payment");
const Receipt = require("../../../../../../Models/Private/Account/Receipt");
const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const mongoose = require('mongoose');
const { formatDateToShortMonth } = require("../../../../../../utils/dateFormat");
async function LIC405(res, resId) {
    try {
        const myResident = await Prospect.findOne({_id: resId});

        let residentInfo = {
            residentName:`${myResident?.firstName} ${myResident?.lastName}`,
            facilityNumber:"5465s121d5sf4SDs",
            year:"2023"
        };

        const PaymentData = await Payment.aggregate([
            {$match: {"ledger._id": mongoose.Types.ObjectId(resId)}},
            {$project: {tranDate: 1, voucher: 1, amount: 1, mode: 1,type: "Payment"}}
        ]).exec();

        const ReceiptData = await Receipt.aggregate([
            {$match: {"ledger._id": mongoose.Types.ObjectId(resId)}},
            {$project: {tranDate: 1, voucher: 1, amount: 1, mode: 1,type: "Receipt"}}
        ]).exec();

        let mergedData = [...PaymentData, ...ReceiptData];

        mergedData.sort((a, b) => new Date(a.tranDate) - new Date(b.tranDate));

        let balance = 0;

        let formattedData = mergedData.map(item => {
            let payment = 0;
            let receipt = 0;
            let desc = item.mode?.label;
            if ('amount' in item && 'tranDate' in item && 'voucher' in item && 'mode' in item && 'type' in item) {
                let amount = +item.amount;
             
                if (item.type === 'Payment') {
                    balance -= amount;
                    payment = amount;
                    receipt = "";
                    
                } else if (item.type === 'Receipt') {
                    balance += amount;
                    payment = "";
                    receipt = amount;
                } else {
                    console.log("Invalid type:", item.type);
                }
            
                // Rest of your logic goes here...
            } else {
                console.log("Invalid item format:", item);
            }
            
    

            return {
                date: formatDateToShortMonth(item.tranDate),
                desc,
                voucher: item.voucher,
                payment,
                receipt,
                balance: balance
            };
        });

        return res.json({
            message: "LIC 405 DATA ADDED",
            variant: "success",
            data: {residentInfo, formattedData}
        });
    } catch (err) {
        console.error(err);
        return res.json({
            message: "Error occurred while adding LIC 405 data",
            variant: "error"
        });
    }
}

module.exports = LIC405;
