import { useAuthContext } from "@/context/AuthContext";
import useMutation from "@/hooks/useMutation";
import { blogService } from "@/services/blogService";
import { formatDate } from "@/utils/format";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogRelated from "./components/BlogRelated";

const BlogDetailsPage = () => {
  const { blogSlug } = useParams();
  const { messageApi } = useAuthContext();

  const {
    data: blogDetails,
    loading: loadingBlog,
    fetchApi: getDetails,
  } = useMutation(blogService.getBlogBySlug);

  const { name, author, createdAt, image, description, category } = blogDetails;

  const {
    data: blogRelatedData,
    loading: loadingRelatedBlog,
    fetchApi: getRelatedBlogs,
  } = useMutation((query) => blogService.getAllBlog(query));

  const categoryId = blogDetails ? category?.id : "";
  const query = categoryId ? `?limit=3&cagetory=${categoryId}` : "";

  useEffect(() => {
    if (!blogSlug) return;
    getDetails(blogSlug || "");
  }, [blogSlug]);

  useEffect(() => {
    if (query) {
      getRelatedBlogs(query);
    }
  }, [query]);

  const loadingDebounced = loadingRelatedBlog || loadingBlog;

  // const relatedBlog = useMemo(() => {
  //   const randomElements = [];
  //   const filterBlog = blogData?.blogs?.filter(
  //     (blog) => blog.slug !== blogSlug
  //   );

  //   if (!filterBlog) return;
  //   for (let i = 0; i < 3; i++) {
  //     const randomIndex = Math.floor(Math.random() * filterBlog?.length);
  //     randomElements.push(filterBlog[randomIndex]);
  //     filterBlog.splice(randomIndex, 1);
  //   }

  //   return randomElements;
  // }, [blogData]);

  const handleCopiedLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    messageApi.success("Copied");
  };

  // const filterBlog = blogRelatedData?.blogs?.filter(
  //   (blog) => blog.slug !== blogSlug
  // );

  return (
    <main className="mainwrapper blogdetail --ptop">
      <div className="container">
        <div className="wrapper">
          <div className="blogdetail__title">
            <h1 className="title --t2">{name || ""}</h1>
            <ul className="meta">
              <li className="meta__item">Đăng bởi {author}</li>
              <li className="meta__item">Dev</li>
              <li className="meta__item">{formatDate(createdAt)}</li>
            </ul>
          </div>
          <div className="blogdetail__content">
            <img src={image || ""} alt="Post thumnail" />
            <div
              className="blogdetail__content-entry"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="blogdetail__line" />
            <div className="blogdetail__content-social btngroup">
              <a onClick={handleCopiedLink} className="btn btn-fb">
                <img src="/img/icon-fb-share.svg" alt />
                <span>Share</span>
              </a>
              <a onClick={handleCopiedLink} className="btn btn-linkedin">
                <img src="/img/icon-in-share.svg" alt />
                <span>Share</span>
              </a>
            </div>
          </div>
        </div>

        <BlogRelated
          relatedBlog={blogRelatedData?.blogs}
          loading={loadingDebounced}
        />
      </div>
    </main>
  );
};

export default BlogDetailsPage;
