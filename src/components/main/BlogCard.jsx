import React from "react";
import Card from "../sub/Card";

import { posts } from "../../constants/postData";

const CardList = () => {
  return (
    <div className="flex flex-col items-center py-5 z-[20]">
      <h1 className="text-3xl font-bold my-10 text-white">Recent Posts</h1>
      <div className="space-y-8 w-full">
        {posts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
