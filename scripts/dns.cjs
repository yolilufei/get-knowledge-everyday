const dns = require('dns');

dns.lookup('baidu.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});


console.log(process.env.NODE_ENV);