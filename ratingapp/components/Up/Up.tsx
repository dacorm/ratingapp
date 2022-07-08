import {UpProps} from "./Up.props";
import styles from './Up.module.css';
import UpIcon from './arrow.svg';
import {useScrollY} from "../../hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";


export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
    };

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight })
    }, [y, controls])

    return (
        <motion.div
            animate={controls}
            className={styles.up}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
        </motion.div>
    )
};