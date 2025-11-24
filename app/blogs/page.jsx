"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AddBlog from "@/components/Blog page/AddBlog";
import UpperSection from "@/components/UpperSection";
import Loader from "@/components/Loader";
import EditBlog from "@/components/Blog page/EditBlog";
import RemoveBlog from "@/components/Blog page/RemoveBlog";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser") || "null"));
    const allBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    //To sort by created at
    const sortedBlogs = allBlogs.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setBlogs(sortedBlogs);
    setLoading(false);
  }, []);

  if (loading || !blogs)
    return (
      <div>
        <section className="mb-5 mt-5">
          <UpperSection actualPage={"Formations"} />
        </section>
        <Loader loadedElement={"Formations"} />
      </div>
    );

  return (
    <div>
      <section className="mb-5 mt-5">
        <UpperSection actualPage={"Nos formations"} />
      </section>
      <div className="container mt-5 ">
        <h1 className="mb-5">Toutes Nos Formations</h1>
        {currentUser && (
          <div>
            <AddBlog />
          </div>
        )}

        <div className="row">
          {blogs.map((b) => {
            // Count comments for this blog
            const allComments = JSON.parse(
              localStorage.getItem("comments") || "[]"
            );
            const blogComments = allComments.filter(
              (c) => c.blogId.toString() === b.id.toString()
            );

            return (
              <div className="col-md-6 col-lg-4 col-sm-12 mb-3" key={b.id}>
                <div
                  className="card border-0 h-100 mx-auto overlap-card"
                  style={{ width: "90%" }}
                >
                  <img
                    src={b.img}
                    className="card-img-top card-img-fixed zoom-img"
                    alt="Card image"
                  />
                  <div className="card-body text-center">
                    <p className="text-success fw-semibold ms-5">
                      {b.category}
                    </p>
                    <h4 className="card-title">{b.title}</h4>
                    <p className="card-text text-muted">{b.author}</p>
                    {currentUser ? (
                      <>
                        <EditBlog
                          blog={b}
                          currentUser={currentUser}
                          onUpdate={(updatedBlogs) => setBlogs(updatedBlogs)}
                        />
                        <RemoveBlog
                          blog={b}
                          onDelete={() => {
                            const updated = JSON.parse(
                              localStorage.getItem("blogs") || "[]"
                            );
                            setBlogs(updated);
                          }}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="position-absolute" style={{ top: "37%" }}>
                      <button className="btn bg-yellow rounded-circle p-4">
                        <span className="fs-3">
                          {b.createdAt
                            .slice(
                              b.createdAt.length - 16,
                              b.createdAt.length - 14
                            )
                            .replace("-", "0")}
                        </span>
                        <br />
                        <span className="fw-semibold">
                          {b.createdAt.slice(5, 7).replace("-", "") +
                            "/" +
                            b.createdAt.slice(0, 4)}
                        </span>
                      </button>
                    </div>

                    <p className="card-text">{b.content.slice(0, 100)}...</p>
                    <p className="text-sm text-muted mb-2">
                      💬 {blogComments.length} comments
                    </p>
                    <Link
                      href={`/blogs/${b.id}/${b.author}`}
                      className="btn bg-green text-white rounded-pill px-5 py-3"
                    >
                      <span className="fw-bold">Voir plus</span>
                      <i className="bi bi-box-arrow-up-right ms-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
