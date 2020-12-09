import React from 'react';
import styled from 'styled-components';
import ContentBlock from '../components/ContentBlock';

interface Content {
  preface: string;
  text: string;
  image?: string;
};

interface ArticlePageProp {
  title: string;
  subTitle?: string;
  contents: Array<Content>;
};

const ArticlePage = (props: ArticlePageProp) => (
  <PageContainer>
    <Title>{props.title}</Title>
    <SubTitle>{props.subTitle}</SubTitle>
    <Divider />
    {props.contents.map((content, index) => (
      <>
        <ContentBlock
          index={index + 1}
          preface={content.preface}
          text={content.text}
          image={content.image}
        />
        <Divider style={{ marginTop: '35px' }} />
      </>
    ))}
  </PageContainer>
);

export default ArticlePage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10%;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;
const SubTitle = styled.h3``;

const Divider = styled.hr`
  margin: 0;
`;
