import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from "react-intl";
import { Debounce } from "react-throttle";
import WindowResizeListener from "react-window-size-listener";
import { ThemeProvider } from "styled-components";
import authAction from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import DashboardRouter from "./DashboardRouter";
import { siteConfig } from "../../settings";
import { AppLocale } from "../../App";
import themes from "../../settings/themes";
import DashboardHolder from "./commonStyle";
import "./global.css";

const { Content, Footer } = Layout;
const { logout } = authAction;
const { toggleAll } = appActions;

export class Dashboard extends Component {
    render() {
        const { url } = this.props.match;
        const { locale, selectedTheme, height } = this.props;
        const currentAppLocale = AppLocale[locale];
        return (
            <LocaleProvider locale={currentAppLocale.antd}>
                <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
                >
                <ThemeProvider theme={themes[selectedTheme]}>
                    <DashboardHolder>
                    <Layout style={{ height: "100vh" }}>
                        <Debounce time="1000" handler="onResize">
                        <WindowResizeListener
                            onResize={windowSize =>
                            this.props.toggleAll(
                                windowSize.windowWidth,
                                windowSize.windowHeight
                            )
                            }
                        />
                        </Debounce>
                        <Topbar url={url} />
                        <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
                        <Sidebar url={url} />
                        <Layout
                            className="nnContentMainLayout"
                            style={{
                            height: height
                            }}
                        >
                            <Content
                            className="ndeputaContent"
                            style={{
                                padding: "70px 0 0",
                                flexShrink: "0",
                                background: "#f1f3f6",
                                position: "relative"
                            }}
                            >
                            <DashboardRouter url={url} />

                            </Content>
                            <Footer
                            style={{
                                background: "#ffffff",
                                textAlign: "center",
                                borderTop: "1px solid #ededed"
                            }}
                            >
                            {siteConfig.footerText}
                            </Footer>
                        </Layout>
                        </Layout>
                    </Layout>
                    </DashboardHolder>
                </ThemeProvider>
                </IntlProvider>
            </LocaleProvider>
        )
    }
}

export default connect(
    state => ({
        auth: state.Auth,
        locale: state.LanguageSwitcher.toJS().language.locale,
        selectedTheme: state.ThemeSwitcher.toJS().changeThemes.themeName,
        height: state.App.toJS().height
    }),
    { logout, toggleAll }
)(Dashboard);