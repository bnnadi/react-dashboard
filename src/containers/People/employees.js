import React, { Component } from 'react';
import { connect } from 'react-redux';
import employeeAction from "../../redux/employees/actions";
import { Layout, Icon } from "antd";
import Button from "../../components/uielements/button";
import ContactList from "../../components/contacts/contactList";
import SingleContactView from "../../components/contacts/singleView";
import EditContactView from "../../components/contacts/editView";
import DeleteButton from "../../components/contacts/deleteButton";
import IntlMessages from "../../components/utility/intlMessages";
import { PeopleWrapper } from "./people.style";
import Scrollbar from "../../components/utility/customScrollBar.js";

const {
    initData,
    changeContact,
    addContact,
    editContact,
    deleteContact,
    viewChange
  } = employeeAction;

  const { Content } = Layout;
  class Employees extends Component {
    state = {};
    componentDidMount() {
        const { loadingInitData, initData } = this.props;
        if (!loadingInitData) {
          initData();
        }
    }
    render() {
      const otherAttributes = [];
      const {
        employees,
        seectedId,
        editView,
        changeContact,
        addContact,
        editContact,
        deleteContact,
        viewChange
      } = this.props;
      const selectedEmployee = seectedId
        ? employees.filter(employee => employee.employee_id === seectedId)[0]
        : null;
      const onVIewChange = () => viewChange(!editView);
      return (
        <PeopleWrapper
          className="ndeputaContacts"
          style={{ background: "none" }}
        >
          <div className="nnContactListBar">
            <ContactList
              contacts={employees}
              seectedId={seectedId}
              changeContact={changeContact}
              deleteContact={deleteContact}
            />
          </div>
          <Layout className="nnContactBoxWrapper">
            {selectedEmployee ? (
              <Content className="nnContactBox">
                <div className="nnContactControl">
                  <Button type="button" onClick={onVIewChange}>
                    {editView ? <Icon type="check" /> : <Icon type="edit" />}{" "}
                  </Button>
                  <DeleteButton
                    deleteContact={deleteContact}
                    contact={selectedEmployee}
                  />
                  <Button
                    type="primary"
                    onClick={addContact}
                    className="nnAddContactBtn"
                  >
                    <IntlMessages id="contactlist.addNewContact" />
                  </Button>
                </div>
  
                <Scrollbar className="contactBoxScrollbar">
                  {editView ? (
                    <EditContactView
                      contact={selectedEmployee}
                      editContact={editContact}
                      otherAttributes={otherAttributes}
                    />
                  ) : (
                    <SingleContactView
                      contact={selectedEmployee}
                      otherAttributes={otherAttributes}
                    />
                  )}
                </Scrollbar>
              </Content>
            ) : (
              <div className="nnContactControl">
                <Button
                  type="primary"
                  onClick={addContact}
                  className="nnAddContactBtn"
                >
                  <IntlMessages id="contactlist.addNewContact" />
                </Button>
              </div>
            )}
          </Layout>
        </PeopleWrapper>
      );
    }
  }
  

  function mapStateToProps(state) {
    return {
      ...state.Employees.toJS(),
    };
  }
  export default connect(mapStateToProps, {
    initData,
    changeContact,
    addContact,
    editContact,
    deleteContact,
    viewChange
  })(Employees);
  