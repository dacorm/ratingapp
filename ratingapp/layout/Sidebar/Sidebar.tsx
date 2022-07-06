import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css'


export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
};