import https from 'https';


https.get('https://asset.test.gifshow.com/asset-new/v2/api-docs?group=is-asset-new', res => {
    res.on('data', (r) => {
        console.log(r.toString());
    })
})