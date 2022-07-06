import {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/graduation-hat 1.svg';
import ServicesIcon from './icons/cloud.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/box.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";



const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products},
]


export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    return (
        <div>
            <ul>
                {menu.map((e) => (<li key={e._id.secondCategory}>{e._id.secondCategory}</li>))}
            </ul>
        </div>
    )
};