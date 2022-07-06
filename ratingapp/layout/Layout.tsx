import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css'
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Component, FunctionComponent} from "react";
import {AppContextProvider, IAppContext} from "../context/app.context";


export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
        <Header className={styles.header} />
                <Sidebar className={styles.sidebar} />
                <div className={styles.body}>
                    {children}
                </div>
        <Footer className={styles.footer} />
        </div>
    )
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};