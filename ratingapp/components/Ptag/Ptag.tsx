import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css'


export const Ptag = ({ size = 'medium', children, ...props }: PtagProps): JSX.Element => {
    switch (size) {
        case "small":
            return <p className={styles.psmall} {...props}>{children}</p>
        case "medium":
            return <p className={styles.pmedium} {...props}>{children}</p>
        case "high":
            return <p className={styles.phigh} {...props}>{children}</p>
        default:
            return <></>
    }
};