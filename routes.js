const routes = require('next-routes')();


routes
.add('/','index')
.add('/send','/send')
.add('/receive','/receive')
.add('/about','/about')
.add('/receive/:address','/display')


module.exports = routes;