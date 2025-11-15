import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    {
      // Load latest blogs
      const allBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
      const sorted = allBlogs.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBlogs(sorted.slice(0, 2));
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="col-lg-6 col-md-12">
          <h1 className="mb-4 text-green">
            Jetez un coup d'oeil à nos dernières Formations
          </h1>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-6 col-sm-12 mb-3" key={blog.id}>
              <div className="card border-0 h-100">
                <img
                  src={blog.img}
                  className="card-img-top card-img-fixed"
                  alt="..."
                ></img>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="fw-semibold text-success">
                        {blog.category}
                      </span>
                    </div>
                    <div className="me-5">
                      <span className="fst-italic">
                        {blog.author}, {blog.createdAt.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-green fw-semibold">
                    {blog.content.slice(0, 100)}...
                  </p>
                  <Link href={`/blogs/${blog.id}`}>
                    <button className="btn btn-outline-success expandable border-0 p-3 px-5 rounded-4">
                      <span className="fw-bold">
                        Plus de Details <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
