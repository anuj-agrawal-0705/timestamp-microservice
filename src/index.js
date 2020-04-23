const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('yo bitches')
})

app.get('/api/timestamp/:date_string', (req,res)=>{
    const date_string = new Date (String(req.params.date_string))
    const data = new Date(Number(req.params.date_string))
        // if(date_string == 'Invalid Date' && data == 'Invalid Date'){
        //     res.send({error:"Invaid Date"})
        // }
        if(data != 'Invalid Date'){
            const utc = data.toUTCString()
            console.log('1')
            return res.send({data, utc})
        }
        else if(date_string != 'Invalid Dte'){
            const unix = date_string.getTime()
            const utc = date_string.toUTCString()
            console.log(new Date("4-25-2020"))
            return res.send({unix, utc})
        }

})

app.get('/api/timestamp',(req,res)=>{
    const unix = new Date().getTime()
    const utc = new Date().toUTCString()
    res.send({unix,utc})
})

app.listen(port, ()=>{
    console.log('Server is running on port '+port)
})