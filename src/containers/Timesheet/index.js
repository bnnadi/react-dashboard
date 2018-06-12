import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import PageHeader from "../../components/utility/pageHeader";
import notification from "../../components/notification";
import Box from "../../components/utility/box";
import HelperText from "../../components/utility/helper-text";
import IntlMessages from "../../components/utility/intlMessages";
import Scrollbars from "../../components/utility/customScrollBar";
import Button from "../../components/uielements/button";
import timesheetActions from "../../redux/timesheets/actions";
import CardWrapper from "./timesheet.style";
import TableWrapper from "../Inventory/antTable.style";

class Timesheets extends Component {
    state = {
        selected: []
    };
    columns = [
        {
          title: "Number",
          dataIndex: "number",
          rowKey: "number",
          width: "15%",
          render: text => <span>{text}</span>
        },
        {
          title: "Bill From",
          dataIndex: "billFrom",
          rowKey: "billFrom",
          width: "25%",
          render: text => <span>{text}</span>
        },
        {
          title: "Bill TO",
          dataIndex: "billTo",
          rowKey: "billTo",
          width: "22%",
          render: text => <span>{text}</span>
        },
        {
          title: "Total Cost",
          dataIndex: "totalCost",
          rowKey: "totalCost",
          width: "15%",
          render: text => <span>{text}</span>
        },
        {
          title: "Status",
          dataIndex: "orderStatus",
          rowKey: "orderStatus",
          width: "13%",
          render: text => <span>{text}</span>
        },
        {
          title: "",
          dataIndex: "view",
          rowKey: "view",
          width: "10%",
          render: (text, invoice) => (
            <div className="isoInvoiceBtnView">
              <Link to={`${this.props.match.path}/${invoice.id}`}>
                <Button color="primary" className="invoiceViewBtn">
                  View
                </Button>
              </Link>{" "}
              <Button
                className="invoiceDltBtn"
                icon="delete"
                onClick={() => {
                  notification("error", "1 invoice deleted");
                  this.props.deleteInvoice([invoice.key]);
                  this.setState({ selected: [] });
                }}
              />
            </div>
          )
        }
      ];
    componentDidMount() {
        const { loadingInitData, initData } = this.props;
        if (!loadingInitData) {
          initData();
        }
    }
    render() {
        const { timesheets } = this.props;
        const { selected } = this.state;
        const rowSelection = {
          hideDefaultSelections: true,
          selectedRowKeys: selected,
          onChange: selected => this.setState({ selected }),
          selections: [
            {
              key: "all-data",
              text: "Select All Timesheets",
              onSelect: () =>
                this.setState({
                  selected: this.props.timesheets.map(timesheet => timesheet.key)
                })
            },
            {
              key: "no-data",
              text: "Unselect all",
              onSelect: () => this.setState({ selected: [] })
            },
            {
              key: "delete-selected",
              text: "Delete selected",
              onSelect: changableRowKeys => {
                if (selected.length > 0) {
                //   deleteInvoice(selected);
                  this.setState({ selected: [] });
                  notification("error", `${selected.length} timesheets deleted`);
                }
              }
            }
          ],
          onSelection: selected => this.setState({ selected })
        };
        return (
            <LayoutWrapper>
                <PageHeader>
                <IntlMessages id="sidebar.timesheets" />
                </PageHeader>
                <Box>
                <CardWrapper title="Timesheets">
                {timesheets.length === 0 ? (
                    <HelperText text="No Timesheets" />
                    ) : (
                    <div className="nnTimesheetTable">
                        <Scrollbars style={{ width: "100%" }}>
                        <TableWrapper
                            rowSelection={rowSelection}
                            dataSource={timesheets}
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
}

function mapStateToProps(state) {
  return {
    ...state.Timesheets.toJS()
  };
}
export default connect(mapStateToProps, timesheetActions)(Timesheets);