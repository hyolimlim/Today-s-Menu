import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MainSkeleton() {
  return (
    <main className="main">
      <div className="searchbar">
        <Skeleton />
      </div>
      <div className="main__introduce">
        <h1>레시피 리스트</h1>
      </div>
      <div className="recipelist">
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
        <Skeleton height="300px" borderRadius="30px" />
      </div>
    </main>
  );
}

export default MainSkeleton;
