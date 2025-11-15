"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import UpperSection from "@/components/UpperSection";
import CommentSection from "@/components/Blog page/CommentSection";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id, name } = params;

  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);

  const getAuthor = () => {
    const allAuthor = JSON.parse(localStorage.getItem("users") || "[]");

    const found = allAuthor.find((u) => u.name === name.replace("%20", " "));

    setAuthor(found);
  };

  useEffect(() => {
    // Load blog
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const foundBlog = blogs.find((b) => b.id.toString() === id);
    if (!foundBlog) return router.push("/blogs"); // redirect if blog not found
    setBlog(foundBlog);

    // Load comments for this blog
    const allComments = JSON.parse(localStorage.getItem("comments") || "[]");
    const blogComments = allComments.filter(
      (c) => c.blogId.toString() === id.toString()
    );
    setComments(blogComments);
    getAuthor();
    console.log(author);
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading blog...</p>;

  return (
    <div className="container mt-5">
      <section className="mt-5 mb-5">
        <UpperSection actualPage={"Détails Formations"} />
      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12 ">
            <div className="bg-yellow shadow rounded-3 py-5 d-flex justify-content-center">
              <div className="text-center">
                <img
                  src={author.img}
                  className="rounded-circle"
                  alt=""
                  height={200}
                  width={200}
                />
                <h3 className="mt-4">{author.name}</h3>
                <p className="fw-semibold">{author.role}</p>

                <p className="px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quos officiis excepturi ullam odit facere ad nihil
                  laborum, odio reprehenderit.
                </p>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <i className="bi bi-facebook fs-2"></i>
                  </div>
                  <div>
                    <i className="bi bi-instagram fs-2"></i>
                  </div>
                  <div>
                    <i className="bi bi-twitter-x fs-2"></i>
                  </div>
                  <div>
                    <i className="bi bi-linkedin fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-subtle p-4 mt-5 rounded-4">
              <h3 className="text-center">Catégories</h3>
              <h4 className="text-center text-success">{blog.category}</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <h1 className="mb-3">{blog.title}</h1>
            <img
              src={`/` + blog.img}
              width="100%"
              className="rounded-4"
              alt={blog.img}
            />
            <p className="text-muted mt-3">
              By {blog.author} | Published on{" "}
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString()
                : ""}
            </p>
            <div className="mb-5">{blog.content}</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-4">
        <CommentSection comments={comments} setComments={setComments} />
      </div>
    </div>
  );
}
