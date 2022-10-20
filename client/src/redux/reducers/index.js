import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import notify from "./notifyReducer";
import theme from "./themeReducer";
import profile from "./profileReducer";
import status from "./statusReducer";
import homePosts from "./postReducer";
import modal from "./modalReducer";
import detailPost from "./detailPostReducer";
import discover from "./discoverReducer";
import suggestions from "./suggestionsReducer";
import socket from "./socketReducer";
import message from "./messageReducer";
import online from "./onlineReducer";
import call from "./callReducer";
import peer from "./peerReducer";

export default combineReducers({
  auth,
  alert,
  notify,
  theme,
  profile,
  status,
  homePosts,
  modal,
  detailPost,
  discover,
  suggestions,
  socket,
  message,
  online,
  call,
  peer,
});
