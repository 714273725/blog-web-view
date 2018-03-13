import axios from 'axios'
import crypto from 'crypto'
export function login(account, password) {
  if (account == null || account.length == 0) {
    window.alert("登录账号不能为空");
    return;
  }
  if (password == null || password.length == 0) {
    window.alert("登录密码不能为空");
    return;
  }
  var md5 = crypto.createHash("md5");
  md5.update(password);
  var psd = md5.digest('hex');
  axios.get('http://localhost:1991/user/login', {
    params: {
      account: account,
      password: psd,
    }
  }).then(function (response) {
    console.log(response);
    if (response.status == 200 && response.data.code == 200) {
      window.location.href = '/user';
    } else {
      window.alert(response.data.message);
    }
  }).catch(function (response) {
    console.log(response);
  })
}
