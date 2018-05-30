import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import appActions from '../../redux/app/actions';
import TopbarNotification from './topbarNotification';
import TopbarSearch from './topbarSearch';
import TopbarUser from './topbarUser'
import TopbarWrapper from './topbar.style';


const { Header } = Layout;
const { toggledCollasped } = appActions;

class Topbar extends Component {
    render() {
        const { url, toggledCollasped, customizedTheme, locale } = this.props;
        const collapsed = this.props.collapsed && !this.props.collapsed;
        const styling = {
            background: customizedTheme.backgroundColor,
            position: 'fixed',
            width: '100%',
            height: 70,
        };
        return(
            <TopbarWrapper>
                <Header style={styling} className={collapsed ? 'ndeputaTopbar collapsed' : 'ndeputaTopbar'}>
                    <div className='nnLeft'>
                        <button 
                         className={ collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen' }
                         style={{ color: customizedTheme.textColor }}
                         onClick={toggledCollasped} />
                    </div>
                    <ul className='nnRight'>
                        <li className='nnSearch'>
                            <TopbarSearch locale={locale} />
                        </li>
                        <li onClick={() => this.setState({ selectedItem: 'notification' })} className='nnNotify'>
                            <TopbarNotification locale={locale} />
                        </li>
                        <li onClick={() => this.setState({ selectedItem: 'user' })} className='nnUser'>
                            <TopbarUser url={url} locale={locale}/>
                        </li>
                    </ul>
                </Header>
            </TopbarWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.App.toJS(),
        locale: state.LanguageSwitcher.toJS().language.locale,
        customizedTheme: state.ThemeSwitcher.toJS().topbarTheme
      }),
    { toggledCollasped }
)(Topbar);