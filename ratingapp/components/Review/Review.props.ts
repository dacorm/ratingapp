import {HTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import {ReviewModel} from "../../interfaces/product.interface";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel;
}