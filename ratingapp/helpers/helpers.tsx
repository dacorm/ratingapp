import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "../layout/Menu/icons/graduation-hat 1.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesIcon from "../layout/Menu/icons/cloud.svg";
import BooksIcon from "../layout/Menu/icons/books.svg";
import ProductsIcon from "../layout/Menu/icons/box.svg";


export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products},
]