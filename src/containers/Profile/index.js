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
import Tabs, { TabPane } from '../../components/uielements/tabs';
import themeActions from '../../redux/themeSwitcher/actions.js';
import Switcher from '../../components/themeSwitcher/themeSwitcher';
import { infos } from './config';

class Profile extends Component {
    render() {
        const {
            isActivated,
            // changeThemes,
            topbarTheme,
            sidebarTheme,
            layoutTheme,
            switchActivation,
            changeTheme
          } = this.props;
      
        const styleButton = { background: sidebarTheme.buttonColor };
        return (
            <LayoutWrapper>
                <PageHeader>
                <IntlMessages id="topbar.profile" />
                </PageHeader>
                <Tabs className="nnTableDisplayTab">
                    {infos.map(info => (
                        <TabPane tab={info.title} key={info.value}>
                           
                        </TabPane>
                    ))}
                </Tabs>
            </LayoutWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
      ...state.Employees.toJS(),
      ...state.ThemeSwitcher.toJS(),
      LanguageSwitcher: state.LanguageSwitcher.toJS()
    };
  }
  export default connect(mapStateToProps, {})(Profile);