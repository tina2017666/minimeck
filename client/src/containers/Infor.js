import React, { Component } from "react";
import { FormGroup, Label, Button, Alert } from "react-bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel, faGamepad } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import Header from "./Header";
library.add(faStroopwafel, faGamepad);

class Infor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitName: "",
      Affliation: "",
      isShow: false,
      isExist: false
    };
  }
  handleunit = e => {
    this.setState({ unitName: e.target.value });
    console.log(this.state.unitName);
    var dt = { unitName: e.target.value };
    this.props.getunitname(dt);
  };
  handleaff = e => {
    this.setState({ Affliation: e.target.value });
  };
  handledismiss1 = () => {
    if (!this.props.isThere) {
    }
    this.setState({ isShow: true });
  };
  // handledismiss2 = () => {
  //   if (this.props.isThere) {
  //   }
  //   this.setState({ isExist: true });
  // };
  onclickSave = () => {
    if (this.props.isThere) {
      const unit = this.state.unitName;
      //console.log(unit);
      this.props.getmech(unit);
      //this.setState({ isExist: true });
      this.props.history.push("/list");
    } else {
      this.setState({ isShow: true });
    }
  };
  render() {
    console.log(this.props.isThere);
    console.log(this.state.isShow);
    console.log(this.state.isExist);
    return (
      <div>
        <Header />

        <FormGroup>
          <FontAwesomeIcon icon="gamepad" color="red" size="lg" />
          <Label bsSize="lg"> UnitName:</Label>
          {/* <input
            placeholder="unit name is required"
            // onChange={this.handleunit}
          /> */}
          <select onChange={this.handleunit}>
            <option>--Please choose an option--</option>
            <option>Black Widow Company</option>

            <option>Blalala </option>
          </select>
        </FormGroup>

        <FontAwesomeIcon icon="stroopwafel" color="black" size="lg" />
        <Label bsSize="lg"> Affliation: </Label>

        <select onChange={this.handleaff}>
          <option>--Please choose an option--</option>
          <option>Command Lance</option>
          <option>Fire Lance</option>
          <option>Recon Lance</option>
        </select>
        <div>
          <Button onClick={this.onclickSave} bsSize="xsmall">
            Save
          </Button>
        </div>
        {this.state.isShow ? (
          <Alert bsStyle="danger" onDismiss={this.handledismiss1}>
            {" "}
            Unit Name Does Not Exist Now!!!
          </Alert>
        ) : null}
        {/* {this.state.isExist ? (
          <Alert onDismiss={this.handledismiss2}> Choose Successfully</Alert>
        ) : null} */}
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
)(Infor);
