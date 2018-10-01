import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faFolder } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import Header from "./Header";
import FolderTree from "react-folder-tree";
library.add(faFolder);
const testData = {
  id: 1,
  filename: "Black Widow Company",
  children: [
    {
      id: 2,
      filename: "Command Lance",
      children: [
        {
          id: 3,
          filename: "Captain. Natasha Kerensky - Warhammer"
        },
        {
          id: 12,
          filename: "Colin Maclaren - Marauder"
        },
        {
          id: 12,
          filename: "Lynn Sheridan - Crusader"
        }
      ]
    },
    {
      id: 16,
      filename: "Fire Lance",
      children: [
        {
          id: 12,
          filename: "Lt. Takiro Ikeda - Archer"
        },
        {
          id: 12,
          filename: "Michael Andrews - Shadow Hawk"
        },
        {
          id: 12,
          filename: "Nikolai Koniev - Wasp"
        }
      ]
    },
    {
      id: 16,
      filename: "Recon Lance",
      children: [
        {
          id: 12,
          filename: "Piet Nichols - Phoenix Hawk"
        },
        {
          id: 12,
          filename: "Steve Tommersom - Stinger"
        },
        {
          id: 12,
          filename: "Arthur Williams - Locust"
        }
      ]
    }
  ]
};
class Org extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false, isuser: false };
  }
  toggle = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  toggle1 = () => {
    this.setState({ isuser: !this.state.isuser });
  };
  render() {
    return (
      <div>
        <Header />
        <FolderTree data={testData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // state is the global state, we have already had the provider
    pilot: state.pilot,
    page: state.page,
    infor: state.infor,
    mech: state.mech,
    max_page: state.max_page,
    onepilot: state.onepilot,
    isThere: state.isThere
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setpilot: data => {
      dispatch(actions.setpilot(data));
    },
    getpilot: () => {
      dispatch(actions.getpilot());
    },
    getprev: p => {
      dispatch(actions.getprev(p));
    },
    getnext: p => {
      dispatch(actions.getnext(p));
    },
    getinit: () => {
      dispatch(actions.getinit());
    },

    getonep: id => {
      dispatch(actions.getonep(id));
    },

    getmech: unit => {
      dispatch(actions.getmech(unit));
    },
    getonem: id => {
      dispatch(actions.getonem(id));
    },
    getpage: () => {
      dispatch(actions.getpage());
    },
    // getmaxpage: () => {
    //   dispatch(actions.getmaxpage());
    // },
    editpilot: (id, update) => {
      dispatch(actions.editpilot(id, update));
    },
    getmech: unit => {
      dispatch(actions.getmech(unit));
    },
    getunitname: name => {
      dispatch(actions.getunitname(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Org);
