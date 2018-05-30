import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutWrapper from "../../components/utility/layoutWrapper";
import PageHeader from "../../components/utility/pageHeader";
import notification from "../../components/notification";
import Box from "../../components/utility/box";
import HelperText from "../../components/utility/helper-text";
import IntlMessages from "../../components/utility/intlMessages";
import Scrollbars from "../../components/utility/customScrollBar";
import Button from "../../components/uielements/button";
import timesheetActions from "../../redux/timesheets/actions";
import TableWrapper from "../Inventory/antTable.style";

class ApiKeys extends Component {
    state = {
        selected: []
    };
    columns = [
        {
            title: "Api Key",
            dataIndex: "apiKey",
            rowKey: "apiKey",
            width: "55%",
            render: text => <span>{text}</span>
          },
          {
            title: "Expiration Date",
            dataIndex: "expirationDate",
            rowKey: "expirationDate",
            width: "35%",
            render: text => <span>{text}</span>
          },
    ];
    componentDidMount() {
        const { loadingInitData, initData } = this.props;
        if (!loadingInitData) {
          initData();
        }
    }
    render() {
        return (
            <LayoutWrapper>
                <PageHeader>
                <IntlMessages id="sidebar.timesheets" />
                </PageHeader>
                <Box>
                <CardWrapper title="Api Keys">
                {api_keys.length === 0 ? (
                    <HelperText text="No Api Keys" />
                    ) : (
                    <div className="nnTimesheetTable">
                        <Scrollbars style={{ width: "100%" }}>
                        <TableWrapper
                            rowSelection={rowSelection}
                            dataSource={api_keys}
                            columns={this.columns}
                            pagination={false}
                            className="timesheetListTable"
                        />
                        </Scrollbars>
                    </div>
                    )}
                </CardWrapper>
                </Box>
            </LayoutWrapper> 
        )
    }
};

function mapStateToProps(state) {
    return {
      ...state.ApiKeys.toJS()
    };
  }
  export default connect(mapStateToProps, timesheetActions)(ApiKeys);