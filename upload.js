const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')

const {
  ak, sk, bucket
} = {
	host: 'http://payyzo9fa.bkt.clouddn.com/',
	bucket: 'vue-shop',
	ak: 'XlaEyT1ufpq0YE2E9Stpi7cIhNSud8iaxQRYFCrH',
	sk: 'UdrMBsxfWdTmBQHGcA4MjyFh45OjdEyqOt-mGZjI'
}

const mac = new qiniu.auth.digest.Mac(ak, sk)

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0


const key = 'test.txt'
const file = path.join(__dirname,'./test.txt')
const options = {
  scope: bucket + ':' + key
}
const formUploader = new qiniu.form_up.FormUploader(config)
const putExtra = new qiniu.form_up.PutExtra()
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)
formUploader.putFile(uploadToken, key, file, putExtra, (err, body, info) => {
  if (err) {
    console.log(err);
  }

})

