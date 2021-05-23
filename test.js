const { request } = require('chai')
let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('./app')
var userId
var should = chai.should()


chai.use(chaiHttp)
let host = 'localhost',
    port = 8000
describe('addUsers',()=>{
    describe(`/add-user`, () =>{
        it('it should add a user',(done)=>{
            let testMetaData = {
                username: "Kamran Jamshaid",
                amount: 10000
            }
            chai.request(`${host}:${port}`).post('/api/add-user').send(testMetaData).end((err, res)=>{
                res.should.have.status(200)
                userId = res.body.user.id
                done()
            })
        })
    })
})

describe('debit',()=>{
    describe(`/debit`, () =>{
        it('it should make a debit transaction',(done)=>{    
            let testMetaData = {
                accountNumber: userId,
                amount: 2000
            }
            chai.request(`${host}:${port}`).post('/api/debit').send(testMetaData).end((err, res)=>{
                res.should.have.status(200)
                done()
            })
        })
    })
})



describe('credit',()=>{
    describe(`/credit`, () =>{
        it('it should make a credit transaction',(done)=>{            
            let testMetaData = {
                accountNumber: userId,
                amount: 2000
            }
            chai.request(`${host}:${port}`).post('/api/credit').send(testMetaData).end((err, res)=>{
                res.should.have.status(200)
                done()
            })
        })
    })
})


describe('my-transactions',()=>{
    describe(`/my-transactions`, () =>{
        it('it should make a request to get all transactions',(done)=>{            
            
            chai.request(`${host}:${port}`).get(`/api/my-transactions/${userId}`).end((err, res)=>{
                res.should.have.status(200)
                done()
            })
        })
    })
})

describe('account-details',()=>{
    describe(`/account-details`, () =>{
        it('it should make a request to get account details',(done)=>{            
            chai.request(`${host}:${port}`).post(`/api/account-details/${userId}`).end((err, res)=>{
                res.should.have.status(200)
                done()
            })
        })
    })
})
