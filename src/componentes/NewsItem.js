import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, publishedAt, author,source } =
      props;
    return (
      <div>
        <div  className="card bg-dark my-1 text-white">
          <div style={{
            display:'flex',
            justifyContent : 'flex-end',
            position: 'absolute',
            right:0
          }}>
          <span  className="badge rounded-pill bg-danger" style={{left:'90%',color:'#ffffff',zIndex:'1'}}>
            {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div  className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small style={{ color: "cyan" }}>
                - By {author ? author : "Anonymous"} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>

            <a 
              target="_blank"
              rel="noreferrer"
              href={newsUrl}
              className="btn btn-sm btn-info"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;
