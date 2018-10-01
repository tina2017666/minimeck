import axios from "axios";
export const setpilot = data => ({
  type: "GET_PILOT",
  data: data
});
export const setonep = data => ({
  type: "GET_ONEPILOT",
  data: data
});
export const toggle = () => ({
  type: "TOGGLE"
});
// export const setpage = data => ({
//   type: "GET_MAXIMUM",
//   data: data
// });
export const getpilot = () => {
  return dispatch => {
    axios.get("/api/pilot").then(res => {
      dispatch(setpilot(res.data));
    });
  };
};

export const editpilot = (id, update) => {
  return dispatch => {
    axios.put(`/api/pilot/${id}`, update).then(res => {
      console.log(res);
      if (res) {
        //alert("Changed Successfully!!");
        dispatch(getpilot(res.data));
      }
    });
  };
};
// export const getmaxpage = () => {
//   return dispatch => {
//     axios.get("/api/pilot").then(res => {
//       dispatch(setpage(res.data));
//     });
//   };
// };

export const deleteonep = id => {
  return dispatch => {
    axios.delete(`/api/pilot/${id}`).then(res => {
      dispatch(getpilot());
    });
  };
};
export const addonep = update => {
  return dispatch => {
    axios.post("/api/pilot", update).then(() => {
      dispatch(getpilot());
    });
  };
};
export const getonep = id => {
  return dispatch => {
    axios.get(`/api/pilot/${id}`).then(res => {
      console.log(res);
      dispatch(setonep(res.data));
    });
  };
};

export const setinfor = infor => ({
  type: "GET_INFOR",
  data: infor
});

export const setmech = data => ({
  type: "GET_MECH",
  data: data
});
export const getmech = unit => {
  return dispatch => {
    axios.get(`/api/mech/${unit}`).then(res => {
      console.log(res.data);
      dispatch(setmech(res.data));
    });
  };
};

export const getonem = id => {
  return dispatch => {
    axios.get(`/api/mech/${id}`).then(res => {
      console.log(res);
      dispatch(setmech(res.data));
    });
  };
};

export const getunitname = data => {
  return dispatch => {
    axios.post("api/infor", data).then(res => {
      dispatch(setunitname(res.data));
    });
  };
};
export const getprev = num => ({
  type: "GET_PRE",
  data: num
});
export const getnext = num => ({
  type: "GET_NEXT",
  data: num
});
export const getinit = () => ({
  type: "GET_INIT"
});
export const getpage = () => ({
  type: "GET_PAGE"
});
export const setunitname = bl => ({
  type: "GET_UNITNAME",
  data: bl
});
