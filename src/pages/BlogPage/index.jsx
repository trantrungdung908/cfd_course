import BlogItem from "@/components/BlogItem";
import useDebounce from "@/hooks/useDebounce";
import useQuery from "@/hooks/useQuery";
import { blogService } from "@/services/blogService";
import { Empty, Skeleton } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuBlog from "./components/MenuBlog";
import { useDispatch, useSelector } from "react-redux";
import { getBlogApi } from "@/store/actions/blogActions";

const BlogPage = () => {
  const { blogData } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();
  // const {
  //   loading: loadingBlog,
  //   data: blogData,
  //   error,
  // } = useQuery(() => blogService.getAllBlog("?page=1&limit=6"));

  // const {
  //   loading: loadingBlog,
  //   data: blogData,
  //   error,
  // } = useQuery(blogService.getAllBlog);

  useEffect(() => {
    dispatch(getBlogApi());
  }, []);

  const [titleMenu, setTitleMenu] = useState("Tất cả");

  const { loading: loadingCat, data: categoriesData } = useQuery(
    blogService.getBlogCategories
  );

  const modifyBlog = blogData?.blogs?.filter(
    (item) => item?.category?.name === titleMenu
  );

  // const debouncedLoading = useDebounce(loadingBlog, 500);

  return (
    <main className="mainwrapper blog --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Blog</h2>
          </div>
        </div>
        <MenuBlog
          categoriesData={categoriesData?.blogs}
          titleMenu={titleMenu}
          setTitleMenu={setTitleMenu}
        />

        {/* {debouncedLoading && (
          <div className="blog__list">
            {Array(6)
              .fill("")
              .map((_, index) => {
                return (
                  <div key={index} className="blog__list-item">
                    <CustomSkeletonImage
                      active
                      style={{
                        height: "300px",
                      }}
                    />
                    <Skeleton
                      active
                      className="blog__list-item"
                      style={{ marginTop: 10, width: "100%" }}
                      avatar={true}
                      paragraph={{ rows: 3 }}
                    />
                  </div>
                );
              })}
          </div>
        )} */}

        <div className="blog__list">
          {(titleMenu === "Tất cả" ? blogData?.blogs : modifyBlog)?.map(
            (blog) => (
              <BlogItem {...blog} key={blog.id} />
            )
          )}
        </div>

        {/* {!loadingBlog &&
          (blogData?.blogs?.length === 0 ||
            (modifyBlog?.length === 0 && titleMenu !== "Tất cả")) && (
            <Empty
              description={"Không có dữ liệu"}
              style={{ margin: "0 auto" }}
            />
          )}

        {!loadingBlog &&
          ((modifyBlog?.length > 0 && titleMenu !== "Tất cả") ||
            (blogData?.blogs?.length > 0 && titleMenu === "Tất cả")) && (
            <ul className="paging">
              <li>
                <a href="#">
                  <i>
                    <img src="img/iconprev.svg" alt />
                  </i>
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src="img/iconprev.svg" alt />
                  </i>
                </a>
              </li>
            </ul>
          )} */}

        {(blogData?.blogs?.length === 0 ||
          (modifyBlog?.length === 0 && titleMenu !== "Tất cả")) && (
          <Empty
            description={"Không có dữ liệu"}
            style={{ margin: "0 auto" }}
          />
        )}
      </div>
    </main>
  );
};

const CustomSkeletonImage = styled(Skeleton.Image)`
  width: 100% !important;
`;

export default BlogPage;
