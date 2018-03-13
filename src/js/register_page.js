import axios from 'axios'
import crypto from 'crypto'

export function register(username, email, password) {
  if (email == null || email.length == 0) {
    window.alert("email不能为空");
    return;
  }
  if (password == null || password.length == 0) {
    window.alert("password不能为空");
    return;
  }
  var md5 = crypto.createHash("md5");
  md5.update(password);
  var psd = md5.digest('hex');
  axios.get('http://localhost:1991/user/register', {
    params: {
      account: email,
      password: psd,

    }
  }).then(function (response) {
    console.log(response);
    if (response.status == 200 && response.data.code == 200) {
      window.location.href = '/reg_success';
    } else {
      window.alert(response.data.measure);
    }
  }).catch(function (response) {
    console.log(response);
  })
}
