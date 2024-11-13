import { Link } from "react-router-dom";

const MenuBlog = ({ categoriesData = [], titleMenu, setTitleMenu }) => {
  const modifyData = [
    {
      id: Date.now(),
      name: "Tất cả",
      slug: "All",
    },
    ...categoriesData,
  ];

  const handleTitle = (name) => {
    setTitleMenu(name);
  };
  return (
    <div className="blog__menu">
      {modifyData?.map((cat) => {
        return (
          <Link
            onClick={() => handleTitle(cat?.name)}
            key={cat?.id}
            className={`blog__menu-item ${
              titleMenu === cat?.name ? "active" : ""
            }`}
          >
            {cat?.name || ""}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuBlog;
