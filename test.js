const su = require('./index')
su.uptime.create('')
su.uptime.interval('1')
su.uptime.init(res=>{
    console.log(res)
})
su.uptime.exit()
