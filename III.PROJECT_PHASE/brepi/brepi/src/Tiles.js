import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import { Pagination } from "antd";

const Tiles = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const pageLength = 6;

  const onPaginationChange = (page, pageSize) => {
    setPage(page - 1);
  };

  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch((err) => {
        setError(error);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div className="container">
      <div className="tiles">
        {items
          .slice(page * pageLength, (page + 1) * pageLength)
          .map((tile, index) => {
            return <Tile data={tile} key={index} />;
          })}
      </div>

      <div>
        <Pagination
          current={page + 1}
          total={items.length}
          className="paginator"
          onChange={onPaginationChange}
          pageSize={pageLength}
        />
      </div>
    </div>
  );
};

export default Tiles;
