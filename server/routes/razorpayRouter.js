const router = require('express').Router()
const Razorpay = require('razorpay')
const shortid = require('shortid')


const razorpay = new Razorpay(
    {
        key_id: 'rzp_test_GZoIhlpTT3QTn2',
        key_secret:'SsBgmNmcyxvYhzUrVyoHOAus'
    }
)

router.get('/',(req,res)=>{
    res.send("Raorpay")
})


.post('/',async (req,res)=>{
    console.log("phew")
    const payment_capture = 1
    const amount = 500
    const currency = 'INR'
  
    const options ={
      amount:(amount).toString(),
      currency,
      receipt:shortid.generate(),
      payment_capture
      }
  
  try{
  
    const response = await razorpay.orders.create(options)
    console.log(response);
    res.json(response);
  }catch(error){
    console.log(error);
  }
  
  })
  

  module.exports = router;