import React from 'react';
import { Row, Col } from "antd";
import useFecth from "../hooks/useFetch";
import { URL_API, API } from '../utils/constants';
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFecth(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
  const popularMovies = useFecth(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);
  const topRaterMovies = useFecth(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`);
  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <MovieList title="Películas Populares" movies={popularMovies} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <MovieList title="Top Mejores Películas Puntuadas" movies={topRaterMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  )
}