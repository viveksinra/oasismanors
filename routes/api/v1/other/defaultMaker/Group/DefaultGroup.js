
const Group = require("../../../../../../Models/Private/Account/Group");



    const defaultGroupMaker = async (req, res) => {
        try {
            for (let i = 0; i < allGroup.length; i++) {
                let oneGroup = allGroup[i];
                let isAlreadySaved = await Group.exists({ label: oneGroup.label }); // Check if the group already exists
                if (!isAlreadySaved) {
                console.log("Group " + i + " added")

                    const groupObj = await getGroupObj(req, oneGroup, "create");
                    await new Group(groupObj).save();
                }else{
                console.log("Duplicate Group at " + i + "found")}

            }
            res.status(201).json({
                message: "All groups added successfully",
                variant: "success",
            });
        } catch (error) {
            console.error("Error while saving default groups:", error);
            res.status(500).json({
                message: "Internal server error",
                variant: "error",
            });
        }
    };



    async function getGroupObj(req, oneGroup, type) {
        let newGroup = {
            user: req.user.id,
            lastModified: new Date(),
        };
        newGroup.defaultGroup = true;
    
        // Copying properties directly
        newGroup.label = oneGroup.label;
        newGroup.link = oneGroup.link;
        newGroup.alias = oneGroup.alias || "";
        newGroup.remark = oneGroup.remark || "";
    
        // Copying under object
        newGroup.under = {
            label: oneGroup.under.label,
            link: oneGroup.under.link,
            defaultGroup: oneGroup.under.defaultGroup,
            _id: oneGroup.under._id,
        };
    
        // Copying natureOfGroup object
        newGroup.natureOfGroup = {
            label: oneGroup.natureOfGroup.label,
            id: oneGroup.natureOfGroup.id,
        };
    
        // Copying other properties
        newGroup.showBanking = !!oneGroup.showBanking;
        newGroup.showAddress = !!oneGroup.showAddress;
        newGroup.isSubLedger = !!oneGroup.isSubLedger;
        newGroup.canDelete = !!oneGroup.canDelete;
        newGroup.netBalance = !!oneGroup.netBalance;
        newGroup.forCalculation = !!oneGroup.forCalculation;
    
        // Copying forPurInvoice object
        newGroup.forPurInvoice = {
            label: oneGroup.forPurInvoice.label,
            id: oneGroup.forPurInvoice.id,
        };
    
        return newGroup;
    }
    

    let allGroup = [
        {
            "under": {
                "label": "Loans (Liability)",
                "link": "loans(liability)",
                "defaultGroup": false,
                "_id": "64fa3ac4e402f4a99bd2f71b"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "An unsecured loan is a loan that doesn't require any type of collateral. Instead of relying on a borrower's assets as security, lenders.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3ce2e402f4a99bd2f775",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:13:06.247Z",
            "label": "Unsecured Loans",
            "link": "unsecuredloans",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:13:06.247Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Loans (Liability)",
                "link": "loans(liability)",
                "defaultGroup": false,
                "_id": "64fa3ac4e402f4a99bd2f71b"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Secured loans are business or personal loans that require some type of collateral as a condition of borrowing.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3c9ae402f4a99bd2f76c",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:11:54.591Z",
            "label": "Secured Loans",
            "link": "securedloans",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:11:54.592Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "This is a temporary accounts maintained in the Genera Ledger. The purpose of maintaining suspense accounts.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3c3de402f4a99bd2f75f",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:10:21.732Z",
            "label": "Suspense A/c",
            "link": "suspensea/c",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:10:21.732Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Current Liabilities",
                "link": "currentliabilities",
                "defaultGroup": false,
                "_id": "64fa3825e402f4a99bd2f63d"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "A person who gives goods or services to the business in credit or does not receive the payment immediately from the business and Pay later. ",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3bbce402f4a99bd2f74d",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:08:12.044Z",
            "label": "Sundry Creditors",
            "link": "sundrycreditors",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:08:12.044Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Loan Liabilities means all indebtedness and obligations (including all accrued and unpaid interest, principal, penalties, other fees).",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3ac4e402f4a99bd2f71b",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:04:04.240Z",
            "label": "Loans (Liability)",
            "link": "loans(liability)",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:04:04.240Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Current Liabilities",
                "link": "currentliabilities",
                "defaultGroup": false,
                "_id": "64fa3825e402f4a99bd2f63d"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Tax is a financial obligation which is to be paid to the government compulsorily. Duty is a fee payable to the government on the manufacture.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa38ece402f4a99bd2f658",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:56:12.285Z",
            "label": "Taxes & Duties",
            "link": "taxes&duties",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:56:12.286Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Current liabilities (also called short-term liabilities) are debts a company must pay within a normal operating cycle, usually less than 12 months.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3825e402f4a99bd2f63d",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:52:53.001Z",
            "label": "Current Liabilities",
            "link": "currentliabilities",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:52:53.002Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Liabilities",
                "id": "liabilities"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "A capital account is used in accounting to record individual ownership rights of the owners of a company.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3761e402f4a99bd2f62b",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:49:37.609Z",
            "label": "Capital Account",
            "link": "capitalaccount",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:49:37.610Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Income",
                "id": "income"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "A sales account (SA) is a record of all the transactions that happen in a business.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3b50e402f4a99bd2f72d",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:06:24.080Z",
            "label": "Sales Accounts",
            "link": "salesaccounts",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:06:24.082Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Income",
                "id": "income"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "One that is gained from non-business activities is indirect income. Sales of old newspapers, sales of cardboard boxes for instance, etc.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa39e5e402f4a99bd2f6e4",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:00:21.085Z",
            "label": "Indirect Incomes",
            "link": "indirectincomes",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:00:21.086Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Income",
                "id": "income"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Direct income is received directly from business operations. You probably have a manager, staff, and suppliers if you own a coffee shop.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa388de402f4a99bd2f64f",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:54:37.477Z",
            "label": "Direct Income",
            "link": "directincome",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:54:37.478Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Expenses",
                "id": "expenses"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Hospice Provider Group",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "65ec7ab00d45b44fd0a0b5fb",
            "user": "649c232bd352614060418053",
            "lastModified": "2024-03-09T15:05:20.384Z",
            "label": "Hospice Provider",
            "link": "hospiceprovider",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2024-03-09T15:05:20.387Z",
            "__v": 0
        },
    
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Expenses",
                "id": "expenses"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "The purchases account is a general ledger account in which is recorded the inventory purchases of a business.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3afee402f4a99bd2f724",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:05:02.250Z",
            "label": "Purchase Accounts",
            "link": "purchaseaccounts",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:05:02.251Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Expenses",
                "id": "expenses"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Indirect Expenses are those expenses that cannot be assigned directly to any activity since these are completely.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa398de402f4a99bd2f6c7",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:58:53.564Z",
            "label": "Indirect Expenses",
            "link": "indirectexpenses",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:58:53.569Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Expenses",
                "id": "expenses"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Direct expenses means all expenses directly connected with the manufacture, purchase of goods, and bringing them to the point of sale.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3859e402f4a99bd2f646",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:53:45.035Z",
            "label": "Direct Expenses",
            "link": "directexpenses",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:53:45.036Z",
            "__v": 0
        },
    
        {
            "under": {
                "label": "Current Assets",
                "link": "currentassets",
                "defaultGroup": false,
                "_id": "64fa36b3e402f4a99bd2f619"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "the total amount of any given item that you currently have in your warehouse, regardless of whether it is available for use or sale.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3d1be402f4a99bd2f77e",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:14:03.689Z",
            "label": "Stock-in-Hand",
            "link": "stock-in-hand",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:14:03.689Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Current Assets",
                "link": "currentassets",
                "defaultGroup": false,
                "_id": "64fa36b3e402f4a99bd2f619"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "A person who receives goods or services from a business in credit or does not make the payment immediately.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3bfae402f4a99bd2f756",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:09:14.932Z",
            "label": "Sundry Debtors",
            "link": "sundrydebtors",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:09:14.932Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Current Assets",
                "link": "currentassets",
                "defaultGroup": false,
                "_id": "64fa36b3e402f4a99bd2f619"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "When a business firm gives any loan to its employees or to its sister concerns or to its directors then this loan.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3a7ce402f4a99bd2f712",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:02:52.814Z",
            "label": "Loan & Advances (Asset)",
            "link": "loan&advances(asset)",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:02:52.818Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Investment refers to putting your money in an asset with the aim of generating income.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3a0de402f4a99bd2f6ed",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:01:01.799Z",
            "label": "Investments",
            "link": "investments",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:01:01.800Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Fixed assets are items that a company plans to use over the long term to help generate income.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa392ee402f4a99bd2f661",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:57:18.826Z",
            "label": "Fixed Assets",
            "link": "fixedassets",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:57:18.827Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Current Assets",
                "link": "currentassets",
                "defaultGroup": false,
                "_id": "64fa36b3e402f4a99bd2f619"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Cash in Hand Journal Entry is to record the financial transaction where payments or receipts are done with involvement of Cash GL.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa37dee402f4a99bd2f634",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:30:30.131Z",
            "label": "Cash in Hand",
            "link": "cashinhand",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:51:42.671Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Current Assets",
                "link": "currentassets",
                "defaultGroup": false,
                "_id": "64fa36b3e402f4a99bd2f619"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "All kinds of Bank Accounts will be cover in this group. ",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa3710e402f4a99bd2f622",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:48:16.176Z",
            "label": "Bank Accounts",
            "link": "bankaccounts",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:48:16.178Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Primary",
                "link": "primary",
                "defaultGroup": true,
                "_id": "64764c71c3790924fc500761"
            },
            "natureOfGroup": {
                "label": "Assets",
                "id": "assets"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Current assets are a company's short-term assets; those that can be liquidated quickly and used for a company's immediate needs.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa36b3e402f4a99bd2f619",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T20:46:43.794Z",
            "label": "Current Assets",
            "link": "currentassets",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T20:46:43.797Z",
            "__v": 0
        },
        {
            "under": {
                "label": "Indirect Expenses",
                "link": "indirectexpenses",
                "defaultGroup": false,
                "_id": "64fa398de402f4a99bd2f6c7"
            },
            "natureOfGroup": {
                "label": "Expenses",
                "id": "expenses"
            },
            "forPurInvoice": {
                "label": "Not Applicable",
                "id": "notApplicable"
            },
            "alias": "",
            "defaultGroup": false,
            "remark": "Agents are individuals that work for you on generally commission basis. You can track record of his/her work to pay latter.",
            "community": "647654545893b52b5c8bbc61",
            "company": "647644e05117173d58993882",
            "_id": "64fa455be402f4a99bd2f9f5",
            "user": "64f8dd21ddc5a35b4f4c0c5a",
            "lastModified": "2023-09-07T21:51:41.850Z",
            "label": "Agent",
            "link": "agent",
            "showAddress": false,
            "isSubLedger": false,
            "canDelete": false,
            "netBalance": false,
            "date": "2023-09-07T21:49:15.717Z",
            "__v": 0
        },
    ]   


module.exports = defaultGroupMaker