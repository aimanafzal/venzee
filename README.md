# venzee
Implementation of solution set required by Venzee for technical test
The project is also on Heroku (a cloud platform) to be used directly without running locally 
To use the Heroku hosted backend, you need to fire up your postman and use the link https://venzee-solution.herokuapp.com/api/<api-endpoint>
Endpoints to be directly used from Heroku are as followed with the same format in body or in response mentioned in the steps for running project in localhost:

For adding a user, make a POST Call https://venzee-solution.herokuapp.com/api/add-user
For debit, make a PUT call https://venzee-solution.herokuapp.com/api/debit
For credit, make a PUT call https://venzee-solution.herokuapp.com/api/credit
For listing all transactions, make a GET call https://venzee-solution.herokuapp.com/api/my-transactions/<account-number>
For listing account details, make a GET call https://venzee-solution.herokuapp.com/api/account-details/<account-number>


To use the project locally, you need to follow the steps defined below:
1. cd ./<project-folder>
2. npm i or npm install (any of the command would work) 
3. npm start (make sure that port 8000 is free and available to be consumed)
4. import the postman collection available in the same repository and start sending the calls 

Steps the consume the backend services after running the project are defined below:
1. Create or add an user by making a POST call using http://localhost:8000/api/add-user
Use the following format in the body defined below: 

{
    "username": "Kamran Jamshaid",
    "amount": 10000
}

Response should be in JSON format defined below: 

{
    "user": [
        {
            "username": "Kamran Jamshaid",
            "id": "3f8ded3e-f339-487e-ba91-d416387ad247",
            "amount": 10000
        }
    ]
}
The uuid received as id in the response would be considered account number for all future calls

2. Make a PUT call for debit using http://localhost:8000/api/debit
Use the following format in the body defined below:

{
    "accountNumber": "3f8ded3e-f339-487e-ba91-d416387ad247",
    "amount": 2000
}

Response should be in string format defined below: 
Transaction Successfull!

3. Make a PUT call for credit using http://localhost:8000/api/credit
Use the following format in the body defined below:

{
    "accountNumber": "3f8ded3e-f339-487e-ba91-d416387ad247",
    "amount": 10000
}

Response should be in string format defined below: 
Transaction Successfull!


4. Make a GET call for a transaction record using http://localhost:8000/api/my-transactions/<account-number>
Response should be in string format

5. Make a GET call for getting account details using http://localhost:8000/api/account-details/<account-number>
#Response should be in a JSON format as defined below:
{
    "accountDetails": {
        "username": "Kamran Jamshaid",
        "id": "3f8ded3e-f339-487e-ba91-d416387ad247",
        "amount": 18000
    }
}

For running tests, execute the following command mentioned below:
npm test
