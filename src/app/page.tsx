'use client'
import { styled } from "styled-components";
import Layout from "./home/page";


export default function Home() {
  return (
    
  <Container>
  <Layout/>
  </Container>
   
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
 
`