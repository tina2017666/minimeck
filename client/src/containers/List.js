import React, { Component } from "react";
import Header from "./Header";
import "/Users/jingnili/Desktop/JS/PJs/project2/client/src/App.css";

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
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faGamepad,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import Detail from "./Detail";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      id: "",
      name: "",
      gunnery: "",
      age: "",
      piloting: "",
      mechType: "",
      rank: "",

      isShow: false,
      isuser: false
    };
  }
  componentDidMount = () => {
    console.log(this.props.mech);

    this.props.getpilot();
    //this.props.getinit();
    console.log("CDM CALLED");
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.onepilot !== this.props.onepilot) {
      // console.log(this.props.onepilot[0]._id);
      this.setState({
        user: nextProps.onepilot[0],
        id: nextProps.onepilot[0]._id,
        name: nextProps.onepilot[0].name,
        gunnery: nextProps.onepilot[0].gunnery,
        age: nextProps.onepilot[0].age,
        piloting: nextProps.onepilot[0].piloting,
        mechType: nextProps.onepilot[0].mechType,
        rank: nextProps.onepilot[0].rank
      });
    }
  };
  onclickDts = item => {
    this.props.getonep(item._id);
    this.setState({ isuser: true });
    // this.setState({
    //   isuser: true,
    //   name: item.name,
    //   gunnery: item.gunnery,
    //   rank: item.rank,
    //   mechType: item.mechType,
    //   age: item.age,
    //   piloting: item.piloting,
    //   isShow: false,
    //   id: item._id,
    //   user: item
    // });
  };

  onclickPre = () => {
    const { page } = this.props;
    console.log(page);
    if (page <= 0) {
      this.props.getinit();
      //this.props.getpilot();
      console.log(page);
    } else {
      this.props.getprev(this.props.page);
      this.props.getpilot();
    }
  };
  onclickNext = () => {
    const { page, max_page } = this.props;
    //this.props.getmaxpage();
    console.log("maximum page:", max_page);
    console.log("current page:", page);

    if (page < max_page) {
      this.props.getnext(this.props.page);
      console.log(this.props.page);
      this.props.getpilot();
    } else {
      this.props.getpage();
    }
  };
  // handlePage = e => {
  //   this.props.getpage(e.target.value);
  // };
  handlename = e => {
    this.setState({ name: e.target.value });
  };
  handlegnry = e => {
    this.setState({ gunnery: e.target.value });
  };
  handleag = e => {
    this.setState({ age: e.target.value });
  };
  handleplt = e => {
    this.setState({ piloting: e.target.value });
  };
  handlemt = e => {
    this.setState({ mechType: e.target.value });
  };
  handlerk = e => {
    this.setState({ rank: e.target.value });
  };
  toggle = () => {
    this.setState({
      isuser: !this.state.isuser
    });
  };
  onclickSave = () => {
    console.log(this.state.id);
    const { id, name, gunnery, age, piloting, mechType, rank } = this.state;
    var update = {
      name: name,
      gunnery: gunnery,
      age: age,
      piloting: piloting,
      mechType: mechType,
      rank: rank
    };

    this.props.editpilot(id, update);
    this.setState({
      isuser: !this.state.isuser,
      isShow: true
    });
  };
  onclickReset = () => {
    const { user } = this.state;
    console.log(user);
    this.setState({
      name: user.name,
      gunnery: user.gunnery,
      age: user.age,
      piloting: user.piloting,
      mechType: user.mechType,
      rank: user.rank
      // isuser: !this.state.isuser
    });
  };

  onclickDelete = item => {
    const id = item._id;
    this.props.deleteonep(id);
  };
  render() {
    const data = this.props.pilot;

    console.log(data);
    //console.log(onepilot);
    // if (this.props.isExist) {
    if (this.props.isThere) {
      return (
        <div>
          <Header />

          {this.state.isShow ? <Alert> Save Successfully</Alert> : null}

          <Table style={{ width: "60%", float: "left", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>Age</th>
                <th>Mech</th>
                <th>Piloting</th>
                <th>Gunnery</th>
                <th>Delete</th>
              </tr>
            </thead>
            {data.map(item => {
              return (
                <tr style={{ border: "1px solid black" }}>
                  <td
                    onClick={() => {
                      this.onclickDts(item);
                    }}
                    style={{ border: "3px solid black" }}
                  >
                    {item.name}
                  </td>
                  <td style={{ border: "3px solid black" }}>{item.rank} </td>
                  <td style={{ border: "3px solid black" }}>{item.age}</td>
                  <td style={{ border: "3px solid black" }}>{item.mechType}</td>
                  <td style={{ border: "3px solid black" }}>{item.piloting}</td>
                  <td style={{ border: "3px solid black" }}>{item.gunnery}</td>
                  <td style={{ border: "3px solid black" }}>
                    <i
                      class="fa fa-trash"
                      style={{ color: "red", width: "3px" }}
                      onClick={() => {
                        this.onclickDelete(item);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
            <div style={{ float: "left" }}>
              <Button bsStyle="primary" size="sm" onClick={this.onclickPre}>
                PREV
              </Button>
            </div>
            <div style={{ float: "right" }}>
              <Button bsStyle="primary" size="sm" onClick={this.onclickNext}>
                Next
              </Button>
            </div>
          </Table>
          {this.state.isuser ? (
            <div style={{ width: "30%", float: "right" }}>
              <form>
                <FormGroup>
                  <Label bsStyle="info">Name</Label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handlename}
                  />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">Rank</Label>
                  <input
                    type="text"
                    value={this.state.rank}
                    onChange={this.handlerk}
                  />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">Age</Label>
                  <input
                    type="text"
                    value={this.state.age}
                    onChange={this.handleag}
                  />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">Gunnery</Label>
                  <input
                    type="text"
                    value={this.state.gunnery}
                    onChange={this.handlegnry}
                  />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">Piloting</Label>
                  <input
                    type="text"
                    value={this.state.piloting}
                    onChange={this.handleplt}
                  />
                </FormGroup>
                <FormGroup>
                  <Label bsStyle="info">mechType</Label>
                  <input
                    type="text"
                    value={this.state.mechType}
                    onChange={this.handlegnry}
                  />
                </FormGroup>
              </form>
              <Button bsStyle="success" bsSize="sm" onClick={this.onclickSave}>
                Save Edits
              </Button>
              <Button bsStyle="success" bsSize="sm" onClick={this.onclickReset}>
                Reset
              </Button>
              <Button bsStyle="success" bsSize="sm" onClick={this.toggle}>
                Cancel
              </Button>
            </div>
          ) : null}
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
    },
    deleteonep: id => {
      dispatch(actions.deleteonep(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
