import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import articles from '../articles';

import MainPage from '../pages/Main';
import ArticlePage from '../pages/Article';

const Root = () => (
  <Container>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        {articles.map((article) => (
          <Route
            path={`/${article.type}/${article.index}`}
            exact
            render={() => (
              <ArticlePage
                title={article.title}
                subTitle={article.subTitle}
                contents={article.contents}
              />
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </Container>
);

export default Root;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
`;
