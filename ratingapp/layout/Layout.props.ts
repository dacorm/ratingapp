import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
}