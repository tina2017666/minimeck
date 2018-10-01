import React, { Component } from "react";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { age: "", id: "" };
  }

  componentDidMount = () => {
    this.props.getonep(this.props.id);
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.onepilot !== this.props.onepilot) {
      // console.log(this.props.onepilot[0]._id);
      this.setState({
        // user: nextProps.onepilot[0],
        id: nextProps.onepilot[0]._id,
        age: nextProps.onepilot[0].age
        // gunnery: nextProps.onepilot[0].gunnery,
        // age: nextProps.onepilot[0].age,
        // piloting: nextProps.onepilot[0].piloting,
        // mechType: nextProps.onepilot[0].mechType,
        // rank: nextProps.onepilot[0].rank
      });
    }
  };
  changename = e => {
    this.setState({ age: e.target.value });
  };
  save = () => {
    const { id, age } = this.state;
    var oj = { age: age };
    this.props.editpilot(id, oj);
  };
  render() {
    return (
      <div>
        <input value={this.state.age} onChange={this.changename} />
        <button> save </button>
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

    getunitname: name => {
      dispatch(actions.getunitname(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
