import React, { Component } from 'react';
import { connect } from 'react-redux';
import productAction from '../../redux/products/actions';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import Button from "../../components/uielements/button";
import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import TableDemoStyle from './demo.style';
import { tableInfos } from './configs';
import * as TableViews from './tableViews/';
const { initData } = productAction;

class Inventory extends Component {
    state = {};
    componentDidMount() {
        const { loadingInitData, initData } = this.props;
        if (!loadingInitData) {
          initData();
        }
    }
    renderTable(tableInfo, products) {
        let Component;
        switch (tableInfo.value) {
          case 'yana':
            Component = TableViews.FilterView;
            break;
          case 'willow':
            Component = TableViews.FilterView;
            break;
          default:
            Component = TableViews.FilterView;
        }
        return <Component tableInfo={tableInfo} dataList={products} />;
      }
    render() {
        const { products } = this.props;
        return(
            <LayoutContentWrapper>
                <TableDemoStyle className="nnLayoutContent">
                    {/* If user doesn't have access then only show organization they are a part of */}
                    <Tabs className="nnTableDisplayTab">
                        {tableInfos.map(tableInfo => (
                        <TabPane tab={tableInfo.title} key={tableInfo.value}>
                            {this.renderTable(tableInfo, products)}
                        </TabPane>
                        ))}
                    </Tabs>
                </TableDemoStyle>
            </LayoutContentWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.Products.toJS(),
    };
  }

export default connect(mapStateToProps,
    { initData }
  )(Inventory);