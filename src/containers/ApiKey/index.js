import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutWrapper from "../../components/utility/layoutWrapper";
import PageHeader from "../../components/utility/pageHeader";
import notification from '../../components/notification';
import Box from "../../components/utility/box";
import HelperText from "../../components/utility/helper-text";
import IntlMessages from "../../components/utility/intlMessages";
import Scrollbars from "../../components/utility/customScrollBar";
import Button from "../../components/uielements/button";
import apiKeyActions from "../../redux/apiKeys/actions";
import CardWrapper from "./apiKey.style";
import TableWrapper from "../Inventory/antTable.style";
import { formatDate } from '../../helpers/utility';

const { createKey, deleteKey } = apiKeyActions;

class ApiKeys extends Component {
    state = {
        selected: [],
        loading: false
    };
    columns = [
        {
            title: "Api Key",
            dataIndex: "key",
            rowKey: "key",
            width: "55%",
            render: text => <span>{text}</span>
          },
          {
            title: "Expiration Date",
            dataIndex: "ttl",
            rowKey: "ttl",
            width: "35%",
            render: text => <span>{formatDate(text)}</span>
          },
    ];
    componentDidMount() {
        const { loadingInitData, initData } = this.props;
        if (!loadingInitData) {
          initData();
        }
    }
    handleClick (e) {
      var ttl = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      createKey(ttl);
    }
    render() {
        const { api_keys } = this.props;
        const { loading, selected } = this.state;
        const rowSelection = {
          hideDefaultSelections: true,
          selectedRowKeys: selected,
          onChange: selected => this.setState({ selected }),
          selections: [
            {
              key: "all-data",
              text: "Select All Api Keys",
              onSelect: () =>
                this.setState({
                  selected: this.props.api_keys.map(api_key => api_key.key)
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
                //   deleteKey(selected);
                  this.setState({ selected: [] });
                  notification("error", `${selected.length} api keys deleted`);
                }
              }
            }
          ],
          onSelection: selected => this.setState({ selected })
        };
        return (
            <LayoutWrapper>
                <PageHeader>
                <IntlMessages id="sidebar.apiKey" />
                </PageHeader>
                <Box>
                  <CardWrapper title="Api Keys">
                  {api_keys.length === 0 ? (
                      <HelperText text="No Api Keys" />
                      ) : (
                      <div className="nnApiKeyTable">
                          <Scrollbars style={{ width: "100%" }}>
                          <TableWrapper
                              rowSelection={rowSelection}
                              dataSource={api_keys}
                              columns={this.columns}
                              pagination={false}
                              className="apiKeyListTable"
                          />
                          </Scrollbars>
                      </div>
                      )}
                      <Button type='primary' loading={loading} onClick={this.handleClick} className='nnApiKeyTableBtn'>Generate key</Button>
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
  export default connect(mapStateToProps, apiKeyActions)(ApiKeys);