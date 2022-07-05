import Head from 'next/head';
import Image from 'next/image';
import {Htag} from "../components/Htag/Htag";
import {Button} from "../components";
import {Ptag} from "../components/Ptag/Ptag";
import {Tag} from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Ptag>Средний текст</Ptag>
    </>
  )
}
