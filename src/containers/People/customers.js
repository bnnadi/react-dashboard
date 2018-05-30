import React, { Component } from 'react';
import { connect } from 'react-redux';
import customerAction from "../../redux/employees/actions";
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
    changeContact,
    addContact,
    editContact,
    deleteContact,
    viewChange
  } = customerAction;

  const { Content } = Layout;
  class Customers extends Component {
    render() {
      const otherAttributes = [];
      const {
        customers,
        seectedId,
        editView,
        changeContact,
        addContact,
        editContact,
        deleteContact,
        viewChange
      } = this.props;
      const selectedCustomer = seectedId
        ? customers.filter(customer => customer.id === seectedId)[0]
        : null;
      const onVIewChange = () => viewChange(!editView);
      return (
        <PeopleWrapper
          className="isomorphicContacts"
          style={{ background: "none" }}
        >
          <div className="nnContactListBar">
            <ContactList
              contacts={customers}
              seectedId={seectedId}
              changeContact={changeContact}
              deleteContact={deleteContact}
            />
          </div>
          <Layout className="nnContactBoxWrapper">
            {selectedCustomer ? (
              <Content className="nnContactBox">
                <div className="nnContactControl">
                  <Button type="button" onClick={onVIewChange}>
                    {editView ? <Icon type="check" /> : <Icon type="edit" />}{" "}
                  </Button>
                  <DeleteButton
                    deleteContact={deleteContact}
                    contact={selectedCustomer}
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
                      contact={selectedCustomer}
                      editContact={editContact}
                      otherAttributes={otherAttributes}
                    />
                  ) : (
                    <SingleContactView
                      contact={selectedCustomer}
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
    const { customers, seectedId, editView } = state.Customers.toJS();
    return {
      customers,
      seectedId,
      editView
    };
  }
  export default connect(mapStateToProps, {
    changeContact,
    addContact,
    editContact,
    deleteContact,
    viewChange
  })(Customers);
  