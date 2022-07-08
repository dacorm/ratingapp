import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '../logo.svg';
import cn from 'classnames';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion, useReducedMotion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);


    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
                <Sidebar />
                <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />
        </header>
    );
};