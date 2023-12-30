const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime ${os.uptime()}seconds`)

const CurrentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(CurrentOS)