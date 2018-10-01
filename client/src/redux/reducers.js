const iniState = {
  pilot: [],

  mech: [],
  onepilot: [],
  curInfo: [1],
  page: 0,
  max_page: Number.MIN_SAFE_INTEGER,
  isThere: false
};

const useracts = (state = iniState, action) => {
  switch (action.type) {
    case "GET_PILOT":
      console.log(state.mech);
      const data1 = action.data.filter(item => {
        for (let i of state.mech) {
          if (i.Model === item.mechType) {
            return item;
          }
        }
      });
      console.log(data1);
      const data2 = data1.slice(state.page * 3, state.page * 3 + 3);
      const max = Math.floor(data1.length / 3);
      console.log(data2);
      console.log(max);
      return {
        ...state,
        pilot: [...data2],
        max_page: max
      };
    // case "GET_MAXIMUM":
    //   const max = Math.floor(action.data.length / 3);
    //   return {
    //     ...state,
    //     max_page: max
    //   };
    case "GET_ONEPILOT":
      return {
        ...state,
        onepilot: action.data
      };
    case "GET_PRE":
      return {
        // content: state.content,
        // page: action.data - 1
        ...state,
        page: action.data - 1
      };
    case "GET_NEXT":
      return {
        // content: state.content,
        // page: action.data + 1
        ...state,
        page: action.data + 1
      };
    case "GET_INIT":
      return {
        // content: state.content,
        // page: 0
        ...state
      };
    case "GET_PAGE":
      return {
        ...state
      };

    case "GET_INFOR":
      return {
        ...state,
        curInfo: action.data
      };
    case "GET_MECH":
      return {
        ...state,
        mech: [...action.data]
      };
    case "GET_ONEPILOT":
      return {
        ...state,
        onepilot: action.data
      };
    case "GET_UNITNAME":
      return {
        ...state,
        isThere: action.data
      };
    case "TOGGLE":
      return {
        ...state,
        isShow: !state.isShow
      };
    default:
      return state;
  }
};

export default useracts;
