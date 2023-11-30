import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Content } from '../components/content';
import { Cloud } from '../components/cloud';

export default function Index() {
  return (
    <>
      <Header />
      <Content></Content>
      <Cloud></Cloud>
      <Footer></Footer>
    </>
  );
}
