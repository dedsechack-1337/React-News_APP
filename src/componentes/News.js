import React from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
const News = (props) => {
  const [articles, setAricles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const updateNews = async () => {
    props.setProg(10);
    const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(api);
    props.setProg(50);
    let parsedData = await data.json();
    props.setProg(70);
    setAricles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProg(100);
  };
  useEffect(() => {
    document.title = ` News About - ${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    }`;

    updateNews();
    // eslint-disable-next-line
  }, []);
  const fetchMoreData = async () => {
    const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(api);
    let parsedData = await data.json();
    setAricles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1);
  };

  // clickNextBtn = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  // clickPreBtn = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "60px" }}>
        News D3d5ec - Top Headlines{" "}
        <p className="text-success">
          ({props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
          News)
        </p>
      </h1>{" "}
      <p style={{ color: "cyan" }}>
        {" "}
        (<b>-Developed By Amit Roy</b>)
      </p>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={Math.ceil(totalResults / props.pageSize) >= page}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div key={index} className="col-md-3">
                  <NewsItem
                    source={element.source.name}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    title={element.title}
                    description={element.description}
                    newsUrl={element.url}
                    imageUrl={
                      !element.urlToImage
                        ? "https://thumbs.dreamstime.com/b/good-news-newspaper-headline-25776802.jpg"
                        : element.urlToImage
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between"> */}
      {/* <button
              type="button"
              hidden="true"
              disabled={this.state.page <= 1}
              className="btn btn-primary my-3"
              onClick={this.clickPreBtn}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              hidden="true"
              disabled={
                this.state.page + 1 >
                  Math.ceil(this.state.pageSize / this.props.pageSize) ||
                !this.state.articles
              }
              className="btn btn-primary my-3"
              onClick={this.clickNextBtn}
            >
              Next &rarr;{" "}
            </button> */}
      {/* </div> */}
    </>
  );
};
export default News;
