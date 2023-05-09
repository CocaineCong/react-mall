import {LOGOUT, SAVE, UPDATE_AVATAR} from "./constant";

const initState = {
  user_id: localStorage.getItem('id'),
  user_name: localStorage.getItem('user_name'),
  nick_name: localStorage.getItem('nick_name'),
  avatar: localStorage.getItem('avatar'),
  access_token: localStorage.getItem('access_token'),
  refresh_token: localStorage.getItem('refresh_token'),
  status: localStorage.getItem('status'),
}

const actions = {
  logout: () => ({type: LOGOUT}),
  save: (data: any) => ({type: SAVE, data}),
  updateAvatar: (avatar: string) => ({type: UPDATE_AVATAR, payload: avatar}),
}

const userReducer = (state: any = initState, action: any) => {
  const {type,data}=action;
  switch (type) {
    case SAVE:
      const {id,user_name, avatar, nick_name, email} = data;
      const {access_token,refresh_token} = data;
      state.user_id = id;
      state.user_name = user_name;
      state.nick_name = nick_name;
      state.email = email;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.avatar = avatar;
      localStorage.setItem('id', id);
      localStorage.setItem('user_name', user_name);
      localStorage.setItem('nick_name', nick_name);
      localStorage.setItem('email', email);
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('avatar', avatar);
      return {...state};

    case LOGOUT:
      state.user_id = null;
      state.user_name = null;
      state.nick_name = null;
      state.email = null;
      state.access_token = null;
      state.refresh_token = null;

      localStorage.removeItem('id');
      localStorage.removeItem('user_name');
      localStorage.removeItem('nick_name');
      localStorage.removeItem('email');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('avatar');
      return {...state};

    case UPDATE_AVATAR:
      state.avatar = data;
      localStorage.setItem('avatar', data);
      return {...state, avatar: data};
    default:
      return state;
  }
}
export const {logout, save, updateAvatar} = actions
export default userReducer;
