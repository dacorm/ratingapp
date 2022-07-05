import Head from 'next/head';
import Image from 'next/image';
import {Htag} from "../components/Htag/Htag";
import {Button, Rating} from "../components";
import {Ptag} from "../components/Ptag/Ptag";
import {Tag} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Ptag>Средний текст</Ptag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  )
}