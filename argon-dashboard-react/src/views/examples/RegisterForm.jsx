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
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
// core components
import RegisterHeader from "components/Headers/RegisterHeader.jsx";

require('moment/locale/pt');

class RegisterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
      username: '',
      phone: '',
      name: '',
      cpf: '',
      birthday: '',
      sponsorName: '',
      sponsorEmail: '',
      sponsorPhone: '',
      studentName: '',
      studentEmail: '',
      studentBirthday: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target
    console.log(name,value,e.target);
    this.setState({
      [name]: value
    })    
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, username, phone, name, cpf, birthday, sponsorName, sponsorEmail, sponsorPhone, studentName, studentEmail, studentBirthday } = this.state
    alert(`Detalhes do registro: \n 
           Nome: ${name} \n
           Nome de usuário: ${username} \n
           E-mail: ${email} \n
           Telefone: ${phone} \n
           CPF: ${cpf} \n
           Aniversário: ${birthday} \n
           Nome do Responsável: ${sponsorName} \n
           E-mail do responsável: ${sponsorEmail} \n
           Telefone do Responsável: ${sponsorPhone} \n
           Nome do Aluno: ${studentName} \n
           E-mail do Aluno: ${studentEmail} \n
           Aniversário do Aluno: ${studentBirthday}
           `)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Voltar
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Próximo
        </button>        
      )
    }
    return null;
  }

  render() {
    return (
      <>
      <RegisterHeader />
      <React.Fragment>
      {/* <form onSubmit={this.handleSubmit}> */}
        <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            name ={this.state.name}
            username ={this.state.username}
            email={this.state.email}
            phone={this.state.phone}
            cpf={this.state.cpf}
            birthday={this.state.birthday}
        />

        <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            sponsorName={this.state.sponsorName}
            sponsorEmail={this.state.sponsorEmail}
            sponsorPhone={this.state.sponsorPhone}
        />
        
        <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            studentName={this.state.studentName}
            studentEmail={this.state.studentEmail}
            studentPhone={this.state.studentPhone}
        />

          {this.previousButton()}
          {this.nextButton()}

      {/* </form> */}
      </React.Fragment>
      

      </>
    );

    function Step1(props) {
      if (props.currentStep !== 1) {
        return null
      } 
      return(
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" >
              <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Minha conta</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                        Cadastro de Dados pessoais
                    </h6>
                    <div className="pl-lg-4">
                    <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Nome completo
                              </label>
                              <Input
                                className="form-control-alternative"
                                // defaultValue=""
                                id="input-first-name"
                                name="name"
                                placeholder="Nome completo"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nome de usuário
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-username"
                              placeholder="Nome de usuário"
                              type="text"
                              value={props.username}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              E-mail
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="E-mail"
                              type="email"
                              value={props.email}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-phone"
                            >
                              Telefone
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-phone"
                              placeholder="Telefone"
                              type="tel"
                              value={props.phone}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-cpf"
                            >
                              CPF
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-cpf"
                              placeholder="CPF"
                              type="number"
                              value={props.cpf}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                            className="form-control-label" 
                            htmlFor="input-birthday"
                            >
                              Data de Nascimento
                            </label>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <ReactDatetime
                                inputProps={{
                                  placeholder: "Data de Nascimento"
                                }}
                                closeOnSelect={true}
                                viewMode='years'
                                locale="pt-br"
                                dateFormat="DD/MM/YYYY"
                                timeFormat={false}
                                value={props.birthday}
                                onChange={props.handleChange}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    function Step2(props) {
      if (props.currentStep !== 2) {
        return null
      } 
      return(
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" >
              <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Minha conta</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                        Cadastro de Responsável
                    </h6>
                    <div className="pl-lg-4">

                    <div> 
                      <label className="custom-toggle">
                        <input type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
                    
                      <p>Eu sou responsável</p>
                    </div>

                    <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-sponsorName"
                            >
                              Nome Completo do Responsável
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-sponsorName"
                              placeholder="Nome comleto do responsável"
                              type="text"
                              value={props.sponsorName}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-sponsorEmail"
                            >
                              E-mail do Responsável
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-sponsorEmail"
                              placeholder="E-mail do responsável"
                              type="email"
                              value={props.sponsorEmail}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-sponsorPhone"
                            >
                              Telefone do Responsável
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-sponsorPhone"
                              placeholder="Telefone do responsável"
                              type="number"
                              value={props.sponsorPhone}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    function Step3(props) {
      if (props.currentStep !== 3) {
        return null
      } 
      return(
        <React.Fragment>
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" >
              <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Minha conta</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                        Cadastro de Aluno
                    </h6>
                    <div className="pl-lg-4">

                    <div> 
                      <label className="custom-toggle">
                        <input type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
                    
                      <p>Eu sou aluno</p>
                    </div>

                    <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-sponsorName"
                            >
                              Nome Completo do Aluno
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-studentName"
                              placeholder="Nome completo do aluno"
                              type="text"
                              value={props.studentName}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-studentEmail"
                            >
                              E-mail do Aluno
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue=""
                              id="input-studentEmail"
                              placeholder="E-mail do aluno"
                              type="email"
                              value={props.studentEmail}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                        <FormGroup>
                            <label
                            className="form-control-label" 
                            htmlFor="input-birthday"
                            >
                              Data de Nascimento do Aluno
                            </label>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <ReactDatetime
                                inputProps={{
                                  placeholder: "Data de nascimento do aluno"
                                }}
                                closeOnSelect={true}
                                viewMode='years'
                                locale="pt-br"
                                dateFormat="DD/MM/YYYY"
                                timeFormat={false}
                                value={props.studentBirthday}
                                onChange={props.handleChange}
                                
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Criar
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </React.Fragment>
      );
    }

  }
}

export default RegisterForm;
