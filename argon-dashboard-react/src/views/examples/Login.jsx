/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import api from "../../services/api";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {


  state = {
    username: "",
    password: ""
  };

  // handleInputChange = e => {
  //   this.setState({ username: e.target.value });
  //   this.setState({ password: e.target.value });
  // };
  
  handleSubmit = e => {
    e.preventDefault();
    
    const { username, password } = this.state;
    
    if(!username.length) return;
    if(!password.length) return;

    localStorage.setItem("@GoKings:username", username);
    localStorage.setItem("@GoKings:password", password);

    this.props.history.push("/admin/index");
  };

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Entre com</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#kings"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/facebook.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Facebook</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#kings"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Ou entre com suas credenciais</small>
              </div>
              <Form onSubmit={this.handleSubmit} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={e => this.setState({ username: e.target.value })} placeholder="E-mail" type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={e => this.setState({ password: e.target.value })} placeholder="Senha" type="password" />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Lembre-me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Entrar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#kings"
                onClick={e => e.preventDefault()}
              >
                <small>Esqueceu a senha?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#kings"
                onClick={e => e.preventDefault()}
              >
                <small>Crie uma nova conta</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
