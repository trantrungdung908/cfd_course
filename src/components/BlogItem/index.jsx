import { formatDate } from "@/utils/format";
import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import PATHS from "@/constants/path";

const BlogItem = ({ author, name, category = {}, image, createdAt, slug }) => {
  const blogDetailsPath = `${PATHS.BLOG.INDEX}/${slug}`;

  return (
    <div className="blog__list-item">
      <div className="img">
        <Link to={blogDetailsPath}>
          <img
            src={
              image ||
              "https://cfdcircle.vn/files/thumbnails/JuQE6Rd3DGuiHJOpgEb3Jg1KoLoa25OlLrl1pDQa.jpg"
            }
            alt="Khóa học CFD"
            className="course__thumbnail"
          />
        </Link>
      </div>
      <div className="content">
        <p className="label">{category?.name}</p>
        <h2 className="title --t3">
          <Link to={blogDetailsPath}>{name || ""}</Link>
        </h2>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
            </div>
            <p className="user__name">{author || ""}</p>
          </div>
          <div className="date">{formatDate(createdAt) || ""}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
