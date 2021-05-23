# venzee
Implementation of solution set required by Venzee for technical test
The project is also on Heroku (a cloud platform) to be used directly without running locally 
To use the Heroku hosted backend, you need to fire up your postman and use the link https://venzee-solution.herokuapp.com/api/<api-endpoint>
Endpoints to be directly used from Heroku are as followed with the same format in body or in response mentioned in the steps for running project in localhost:

For adding a user, make a POST Call https://venzee-solution.herokuapp.com/api/add-user </br>
For debit, make a PUT call https://venzee-solution.herokuapp.com/api/debit </br>
For credit, make a PUT call https://venzee-solution.herokuapp.com/api/credit </br>
For listing all transactions, make a GET call https://venzee-solution.herokuapp.com/api/my-transactions/<account-number> </br>
For listing account details, make a GET call https://venzee-solution.herokuapp.com/api/account-details/<account-number> </br>


To use the project locally, you need to follow the steps defined below: </br>
1. cd ./<project-folder> </br>
2. npm i or npm install (any of the command would work) </br>
3. npm start (make sure that port 8000 is free and available to be consumed) </br>
4. import the postman collection available in the same repository and start sending the calls </br>

Steps the consume the backend services after running the project are defined below: </br>
1. Create or add an user by making a POST call using http://localhost:8000/api/add-user </br>
Use the following format in the body defined below: </br>
</br>
{
    "username": "Kamran Jamshaid",
    "amount": 10000
}
</br>
Response should be in JSON format defined below: </br>

{
    "user": [
        {
            "username": "Kamran Jamshaid",
            "id": "3f8ded3e-f339-487e-ba91-d416387ad247",
            "amount": 10000
        }
    ]
}
</br>
The uuid received as id in the response would be considered account number for all future calls </br>

2. Make a PUT call for debit using http://localhost:8000/api/debit </br>
Use the following format in the body defined below: </br>

{
    "accountNumber": "3f8ded3e-f339-487e-ba91-d416387ad247",
    "amount": 2000
}
</br>
Response should be in string format defined below: </br>
Transaction Successfull! </br>

3. Make a PUT call for credit using http://localhost:8000/api/credit </br>
Use the following format in the body defined below: </br>

{
    "accountNumber": "3f8ded3e-f339-487e-ba91-d416387ad247",
    "amount": 10000
}
</br>
Response should be in string format defined below: </br>
Transaction Successfull! </br>


4. Make a GET call for a transaction record using http://localhost:8000/api/my-transactions/<account-number> </br>
Response should be in string format </br>

5. Make a GET call for getting account details using http://localhost:8000/api/account-details/<account-number> </br>
#Response should be in a JSON format as defined below: </br>
{
    "accountDetails": {
        "username": "Kamran Jamshaid",
        "id": "3f8ded3e-f339-487e-ba91-d416387ad247",
        "amount": 18000
    }
}
</br>

For running tests, execute the following command mentioned below:</br>
npm test
