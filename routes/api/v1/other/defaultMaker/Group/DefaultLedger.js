const Ledger = require("../../../../../../Models/Private/Account/Ledger");


function generateVoucher() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let voucher = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      voucher += characters.charAt(randomIndex);
    }
    return voucher;
  }
  
  async function generateUniqueVoucher() {
    let isUnique = false;
    let voucher;
  
    while (!isUnique) {
      voucher = await generateVoucher();
         // Check if the generated voucher exists in the database
      const existingLedger = await Ledger.findOne({ voucher });
  
      if (!existingLedger) {
        isUnique = true;
      }
    }
  
    return voucher;
  }

const defaultLedgerMaker = async (req, res) => {
    try {
        for (let i = 0; i < allLedger.length; i++) {
            let oneLedger = allLedger[i];
            let isAlreadySaved = await Ledger.exists({ ledger: oneLedger.ledger });
            if (!isAlreadySaved) {
                console.log("Ledger " + i + " added");
                const ledgerObj = await getLedgerObj(req, oneLedger, "create");
                await new Ledger(ledgerObj).save();
            } else {
                console.log("Duplicate Ledger at " + i + " found");
            }
        }
        res.status(201).json({
            message: "All ledgers added successfully",
            variant: "success",
        });
    } catch (error) {
        console.error("Error while saving default ledgers:", error);
        res.status(500).json({
            message: "Internal server error",
            variant: "error",
        });
    }
};


async function getLedgerObj(req, oneLedger, type) {
    let newLedger = {};

    if (type === "create") {
        newLedger.user = req.user.id;
    }
newLedger.isDefault = true
    if (oneLedger.ledgerImage) {
        newLedger.ledgerImage = oneLedger.ledgerImage;
    }

    newLedger.voucher = await generateUniqueVoucher();

    if (oneLedger.ledger) {
        newLedger.ledger = oneLedger.ledger;
    }

    if (oneLedger.group) {
        newLedger.group = {};
        if (oneLedger.group.label) {
            newLedger.group.label = oneLedger.group.label;
        }

        if (oneLedger.group._id) {
            newLedger.group._id = oneLedger.group._id;
        }

        if (oneLedger.group.link !== undefined) {
            newLedger.group.link = oneLedger.group.link;
        }
    }

    if (oneLedger.openingBal !== undefined) {
        newLedger.openingBal = oneLedger.openingBal;
    }

    if (oneLedger.isDr !== undefined) {
        newLedger.isDr = oneLedger.isDr;
    }

    if (oneLedger.important !== undefined) {
        newLedger.important = oneLedger.important;
    }

    if (oneLedger.street) {
        newLedger.street = oneLedger.street;
    }

    if (oneLedger.unit) {
        newLedger.unit = oneLedger.unit;
    }

    if (oneLedger.mobile) {
        newLedger.mobile = oneLedger.mobile;
    }

    if (oneLedger.email) {
        newLedger.email = oneLedger.email;
    }

    if (oneLedger.zip) {
        newLedger.zip = oneLedger.zip;
    }

    if (oneLedger.city) {
        newLedger.city = oneLedger.city;
    }

    if (oneLedger.remark) {
        newLedger.remark = oneLedger.remark;
    }

    if (oneLedger.url) {
        newLedger.url = oneLedger.url;
    }

    if (oneLedger.bankName) {
        newLedger.bankName = oneLedger.bankName;
    }

    if (oneLedger.holderName) {
        newLedger.holderName = oneLedger.holderName;
    }

    if (oneLedger.accountNo) {
        newLedger.accountNo = oneLedger.accountNo;
    }

    if (oneLedger.Aba) {
        newLedger.Aba = oneLedger.Aba;
    }

    if (oneLedger.swift) {
        newLedger.swift = oneLedger.swift;
    }

    if (oneLedger.branch) {
        newLedger.branch = oneLedger.branch;
    }

    if (oneLedger.state) {
        newLedger.state = {};
        if (oneLedger.state.label) {
            newLedger.state.label = oneLedger.state.label;
        }

        if (oneLedger.state.id) {
            newLedger.state.id = oneLedger.state.id;
        }
    }

    if (oneLedger.gender) {
        newLedger.gender = {};
        if (oneLedger.gender.label) {
            newLedger.gender.label = oneLedger.gender.label;
        }

        if (oneLedger.gender.id) {
            newLedger.gender.id = oneLedger.gender.id;
        }
    }

    newLedger.lastModified = new Date();

    return newLedger;
}

    

    let allLedger = [ 
        {
            "group": {
                "label": "Cash in Hand",
                "_id": "64fa37dee402f4a99bd2f634",
                "link": "cashinhand"
            },
            "gender": {
                "label": "",
                "id": ""
            },
            "state": {
                "label": "",
                "id": ""
            },
            "ledgerImage": "https://res.cloudinary.com/dncukhilq/image/upload/v1690208267/oasisManors/Default/myledgerDefault_x7kowb.jpg",
            "openingBal": 0,
            "isDr": true,
            "important": false,
            "street": "",
            "unit": "",
            "mobile": "",
            "email": "",
            "zip": "",
            "city": "",
            "remark": "Cash Ledger",
            "url": "cash",
            "bankName": "",
            "holderName": "",
            "accountNo": "",
            "Aba": "",
            "swift": "",
            "branch": "",
            "communityId": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3fbfe402f4a99bd2f960",
            "community": "647654545893b52b5c8bbc61",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "createDate": "Sep 8, 2023",
            "voucher": "FOAZ",
            "ledger": "Cash",
            "lastModified": "2023-09-07T21:30:42.490Z",
            "date": "2023-09-07T21:25:19.272Z",
            "__v": 0
        },
    ]


module.exports = defaultLedgerMaker