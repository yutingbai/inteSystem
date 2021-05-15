import {
  get,
  post,
  postJson,
} from '../utils';

const API: any = {

};
API.Verify = (params: any) => {
  return get(`/users/Verify`, params);
};
API.Signup = (params: any) => {
  return post(`/users/Signup`, params);
};
API.Login = (params: any) => {
  return post(`/users/Login`, params);
};
API.logOut = (params: any) => {
  return post(`/users/Logout`, params);
};
API.UsersList = () => {
  return get(`/admin/UsersList`, undefined);
};
API.DeleteUser = (params: any) => {
  return post(`admin/DeleteUser`, params);
};
API.Postslist = () => {
  return get(`/admin/Postslist`, undefined);
};
API.Deletepost = (params: any) => {
  return post(`admin/Deletepost`, params);
};
API.editImg = (id: any, file: any) => {
  return postJson(`/users/editImg?user_id=${id}` , file);
};
API.userInfo = (params: any) => {
  return get(`/users/userInfo?`, params);
};

API.postProject = (params: any) => {
  return post('/users/publish', params);
};
API.editMoreImg = (file: any) => {
  return postJson('/users/editMoreImg' , file);
};

API.keyword = (params: any) => {
  return get('/users/keyword', params);
};
API.postTitle = () => {
  return get('/users/postTitle', undefined);
};
API.searchPost = (params: any) => {
  return post('/searchPost', params);
};
API.getPostDetail = (params: any) => {
  return get('/users/postDetail' , params);
};
API.pushAnswer=(params:any)=>{
  return post('users/pushAnswer' , params)
}
API.getAnswerList=(params:any)=>{
  return post('users/answerList' , params)
}
API.deleAnswer=(params:any)=>{
  return post('users/deleAnswer' , params)
}
API.pushAnsTalk=(params:any)=>{
  return post('users/pushAnsTalk' , params)
}
API.getAnsTalkList=(params:any)=>{
  return post('users/ansTalkList' , params)
}
API.deleAnsTalk=(params:any)=>{
  return post('users/deleAnsTalk' , params)
}
API.like=(params:any)=>{
  return get('users/like' , params)
}
API.star=(params:any)=>{
  return get('users/star' , params)
}
API.follow=(params:any)=>{
  return get('users/follow' , params)
}
API.unfollow=(params:any)=>{
  return get('users/unfollow' , params)
}
API.followList=(params:any)=>{
  return get('users/followList' , params)
}
export default API;
