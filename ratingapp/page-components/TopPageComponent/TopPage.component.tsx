import {TopPageComponentProps } from "./TopPage.component.props";
import styles from './TopPage.component.module.css'
import {Card, HhData, Htag, Tag} from "../../components";
import {TopLevelCategory} from "../../interfaces/page.interface";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.title}>
            <Htag tag='h1'>{page.title}</Htag>
            {products && <Tag color='gray' size='m'>{products.length}</Tag>}
            <span>Сортировка</span>
        </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {/* @ts-ignore */}
            {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
        </div>
    )
};