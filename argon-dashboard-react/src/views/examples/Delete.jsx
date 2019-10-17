        <RegisterHeader />
        {/* Page content */}
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
                                defaultValue=""
                                id="input-first-name"
                                placeholder="Nome completo"
                                type="text"
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
                              defaultValue=""
                              id="input-username"
                              placeholder="Nome de usuário"
                              type="text"
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
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        {/* <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col> */}
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
                              defaultValue=""
                              id="input-phone"
                              placeholder="Telefone"
                              type="tel"
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
                              defaultValue=""
                              id="input-cpf"
                              placeholder="CPF"
                              type="number"
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
                                
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Cadastro de responsável
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
                              defaultValue=""
                              id="input-sponsorName"
                              placeholder="Nome comleto do responsável"
                              type="text"
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
                              defaultValue=""
                              id="input-sponsorEmail"
                              placeholder="E-mail do responsável"
                              type="email"
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
                              defaultValue=""
                              id="input-sponsorPhone"
                              placeholder="Telefone do responsável"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        {/* <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col> */}
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Cadastro de Aluno</h6>
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
                              defaultValue=""
                              id="input-studentName"
                              placeholder="Nome completo do aluno"
                              type="text"
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
                              defaultValue=""
                              id="input-studentEmail"
                              placeholder="E-mail do aluno"
                              type="email"
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