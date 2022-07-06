import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css'
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Component, FunctionComponent} from "react";


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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
                <Layout>
                    <Component {...props} />
                </Layout>
        );
    };
};