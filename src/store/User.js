import {observable} from 'mobx'

class User {

  property = [
    {key : "email", title : "Email", inputType : 'email-address', secureInput : false},
    {key : "name", title : "Nama Lengkap", inputType : 'default', secureInput : false},
    {key : "ponsel", title : "Nomor Ponsel", inputType : 'phone-pad', secureInput : false},
    {key : "password", title : "Password", inputType : 'default', secureInput : true},
  ]

  activeUser = {}

  register(userData){
    let result = {status : true, message : "register berhasil"}
    this.property.map((item, iter)=>{
      if(!userData[item.key]){
        result = {status : false, message : "Register gagal, data "+item.key+" tidak ditemukan"}
        return;
      }
    })
    if(result.status){
      this.activeUser = userData;
    }
    return result;
  }

  login(email, password){
    this.activeUser = {email : email, password : password, name : "dumy name", ponsel : "dumy ponsel"}
  }

  logout(){
    this.activeUser = {}
  }

}

const userStore = new User();
export default userStore;
