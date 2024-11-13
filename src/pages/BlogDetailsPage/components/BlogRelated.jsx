import BlogItem from "@/components/BlogItem";

const BlogRelated = ({ relatedBlog = [] }) => {
  return (
    <div className="blogdetail__related">
      <h2 className="blogdetail__related-title title --t2">
        Bài viết liên quan
      </h2>
      <div className="blog__list">
        {relatedBlog?.map((blog) => {
          return <BlogItem {...blog} key={blog?.id} />;
        })}
      </div>
    </div>
  );
};

export default BlogRelated;
