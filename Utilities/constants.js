module.exports={
    
        userExists:
        {
            message:"User already registered",
            status: 401
        },
        userNotFound:{
            message:"User not found",
            status:404
        },
        transaction:{
            successful:{
                message:"Transaction Successfull!",
                status:200
            },
            noTransactions:{
                message:"You don't have transactions yet",
                status:200
            },
            insufficientFunds:{
                message:"Insufficient funds to process request!",
                status:404
            }
        },
        serviceNotAvailable:{
            message:"You can't utilize this service. Contact support!",
            status:404
        }
}