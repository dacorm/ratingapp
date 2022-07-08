import Head from 'next/head';
import Image from 'next/image';
import {Htag} from "../components/Htag/Htag";
import {Button, Input, Rating, Textarea} from "../components";
import {Ptag} from "../components/Ptag/Ptag";
import {Tag} from "../components";
import {useState} from "react";
import {Layout, withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Ptag>Средний текст</Ptag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
        <Input placeholder='test' />
        <Textarea placeholder='test' />
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}