import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"

import { Api } from "../../config/Api"

import Table, { Col, Row, Tbody, Thead } from "../../components/Table"
import Button from "../../components/Button"
import Loading from "../../components/Loading"
import ArticleDelete from "./ArticleDelete";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const getData = () => {
    Api.get('posts').then(res => {
      setArticles(res.data);
      setShowLoading(false);
    }).catch(err => {
      console.log(err);
      Toastify("خطا در دریافت اطلاعات", "error")
    })
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <Loading show={showLoading} />
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
            articles.slice(0, 10).map(article => (
              <Row key={article.id}>
                <Col>{article.title}</Col>
                <Col>{article.body}</Col>
                <Col>
                  <Button type="button" color="red" onClick={() => ArticleDelete(article.id,getData)}>حذف</Button>
                </Col>
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