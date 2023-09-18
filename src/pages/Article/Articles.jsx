import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"

import axios from "axios";

import Table, { Col, Row, Tbody, Thead } from "../../components/Table"
import Button from "../../components/Button"
import Loading from "../../components/Loading"

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setArticles(res.data);
      setShowLoading(false);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      <Loading show={showLoading}/>
      <Link to='create'>
        <Button color="neutral">+ افزودن نوشته</Button>
      </Link>
      <Table>
        <Thead>
          <Row>
            <Col>نام نوشته</Col>
            <Col>محتوا</Col>
            <Col></Col>
          </Row>
        </Thead>
        <Tbody>
          {articles.length > 0 &&
            articles.slice(0,10).map(article => (
              <Row key={article.userId}>
                <Col>{article.title}</Col>
                <Col>{article.body}</Col>
                <Col></Col>
              </Row>
            ))
          }
        </Tbody>
      </Table>

      <Outlet />
    </div>
  )
}

export default Articles