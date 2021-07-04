let link;
const fetch = require('node-fetch')
let interval;
module.exports ={
    uptime:{
        create:(link1)=>{
        link = link1            
    },
    init:(res)=>{
        if(!link) throw new Error('No link provided')
        setInterval( async function(){
        fetch(link)
        if(res){
        res('Uptimed '+ link )
        }
        }, interval || 120000)
    }, 
    interval:(value)=>{
        if(!value) throw new Error('No value provided')
        interval = value
    }, 
    exit:()=>{
        process.exit()
    }
}
}
