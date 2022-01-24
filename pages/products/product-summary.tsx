import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import styles from "../../styles/modules/product.module.scss";

const products = require("../../data/products.json");

const ProductSummary = ({ data = [] }: any) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(posts?.length < products?.length);
  }, [posts]);

  const getMorePost = () => {
    setPosts((post: any) => [...post, ...products]);
  };

  return (
    <>
      <InfiniteScroll dataLength={posts.length} next={getMorePost} hasMore={hasMore} loader={<h3> Loading...</h3>}>
        <div className={styles.productSummaryContainer}>
          {posts.map((product: any) => (
            <div className={styles.productSummaryItem} key={product.id}>
              <div className={styles.productSummaryItemHeader}>
                <div className={styles.productSummaryImage}>
                  <Image src={`/images/products/${product.image}`} alt="Elextrolux icon" layout="fill" objectFit="contain" />
                </div>
              </div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>
                {product.price} {product.currencySymbol}
              </p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default ProductSummary;
