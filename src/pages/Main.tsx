import React from 'react';
import styled from 'styled-components';

const MainPage = () => (
  <PageContainer>
    <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F99E2EA4B5B9797E10171B1" />
    <Text>네트워크 관리사 !! 나도 할 수 있어요 !!<br />Dream comes true~ 🥰</Text>
  </PageContainer>
);

export default MainPage;

const PageContainer = styled.div`
  width: 100%;
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img``;
const Text = styled.h1`
  text-align: center;
  line-height: 2;
`;
