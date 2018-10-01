import React, { Component } from "react";
import Header from "./Header";
import {
  Table,
  Modal,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Alert,
  Button
} from "react-bootstrap";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
class Mech extends Component {
  constructor(props) {
    super(props);
    this.state = { isuser: false, Name: "", Model: "", Class: "" };
  }
  onclickDts = item => {
    this.setState({
      Name: item.Name,
      Model: item.Model,
      Class: item.Class,
      isuser: !this.state.isuser
    });
  };
  toggle = () => {
    this.setState({ isuser: !this.state.isuser });
  };

  render() {
    const data = this.props.mech;
    console.log(data);

    if (this.props.isThere) {
      return (
        <div>
          <Header />
          <Table>
            <thead>
              <tr>
                <th> Name</th>
                <th>Type</th>
                <th>Class</th>
              </tr>
            </thead>
            {data.map(item => {
              return (
                <tr
                  onClick={() => {
                    this.onclickDts(item);
                  }}
                >
                  <td style={{ border: "3px solid black" }}>{item.Name}</td>
                  <td style={{ border: "3px solid black" }}>{item.Model} </td>
                  <td style={{ border: "3px solid black" }}>{item.Class}</td>
                </tr>
              );
            })}
          </Table>
          <Modal show={this.state.isuser} onHide={this.toggle}>
            <Modal.Header closeButton>Mech Detail</Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <Label bsStyle="info">Name</Label>
                  <input type="text" value={this.state.Name} />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">Model</Label>
                  <input type="text" value={this.state.Model} />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">Class</Label>
                  <input type="text" value={this.state.Class} />
                </FormGroup>
              </form>
            </Modal.Body>
            <ModalFooter />
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Header />

          <Alert bsStyle="danger" style={{ width: "40%" }}>
            {" "}
            Please Choose A UserName
          </Alert>
        </div>
      );
    }
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
)(Mech);
