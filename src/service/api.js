import {
  get,
  post,
  postJson
} from '../utils'

const API = {}

API.Verify = (params) => {
  return get(`/users/Verify`, params)
}
API.Signup = (params) => {
  return post(`/users/Signup`, params)
}
API.Login = (params) => {
  return post(`/users/login`, params)
}
API.UsersList = () => {
  return get(`/admin/UsersList`)
}
API.DeleteUser = (params) => {
  return post(`admin/DeleteUser`, params)
}
API.Postslist = () => {
  return get(`/admin/Postslist`)
}
API.Deletepost = (params) => {
  return post(`admin/Deletepost`, params)
}
API.editImg = (id,file)=>{
  return postJson(`/users/editImg?user_id=${id}` , file)
}
API.userInfo = (params)=>{
  return get(`/users/userInfo?`,params)
}

API.postProject=(params)=>{
  return post('/users/publish',params)
}
API.editMoreImg = (file)=>{
  return postJson('/users/editMoreImg' , file)
}

API.keyword=(params)=>{
  return get('/users/keyword',params)
}
export default API