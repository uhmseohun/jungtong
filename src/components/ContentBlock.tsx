import React from 'react';
import styled from 'styled-components';

interface ContentProp {
  index: number;
  preface: string;
  text: string;
  image?: string;
};

const ContentBlock = (props: ContentProp) => (
  <Container>
    {props.preface ? (
      <Preface>{`${props.index}. ${props.preface}`}</Preface>
    ) : null}
    <ContentWrapper>
      <TextBox>
        {
          props.text.split('\n')
            .map((prg) => (
              <Paragraph>{prg}</Paragraph>
            ))
        }
      </TextBox>
      {props.image ? (
        <Image src={props.image} />
      ) : null}
    </ContentWrapper>
  </Container>
);

export default ContentBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Preface = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 10px;
  word-break: keep-all;
`;

const Image = styled.img`
  width: 40%;
  height: 40%;
  margin-left: 15px;
  border: 1.5px solid black;
`;
