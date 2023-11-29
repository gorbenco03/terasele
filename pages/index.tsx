import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Content } from '../components/content';

export default function Index() {
  return (
    <>
      <Header />
      <Content></Content>
      <Footer></Footer>
    </>
  );
}
