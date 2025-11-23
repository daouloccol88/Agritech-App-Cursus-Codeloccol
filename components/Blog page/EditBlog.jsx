"use client";
import React, { useState } from "react";

const EditBlog = ({ blog, currentUser, onUpdate }) => {
  const modalId = `editModal-${blog.id}`;

  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [content, setContent] = useState(blog.content);

  const isAuthor = currentUser?.name === blog.author;

  const handleSave = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

    const updatedBlogs = blogs.map((b) =>
      b.id === blog.id ? { ...b, title, category, content } : b
    );

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    if (onUpdate) onUpdate(updatedBlogs);

    const modal = window.bootstrap.Modal.getInstance(
      document.getElementById(modalId)
    );
    modal.hide();
    window.location.reload(true);
  };

  return (
    <div>
      <button
        className="btn btn-primary rounded-circle position-absolute top-0 start-0"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        <i className="bi bi-pen fs-3"></i>
      </button>

      <div className="modal fade" id={modalId} tabIndex="-1">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modifier "{blog.title}"</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {!isAuthor && (
                <p className="text-danger fw-semibold mb-3">
                  ⚠️ Attention: vous n'êtes pas l'auteur de ce blog. L'auteur
                  est <strong>{blog.author}</strong>
                </p>
              )}

              {/* Title */}
              <label className="form-label fw-semibold">Titre</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* Category dropdown */}
              <label className="form-label fw-semibold mt-3">Catégorie</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Jardinnage">Jardinnage</option>
                <option value="Contre-Saison">Contre-Saison</option>
                <option value="Pépinières">Pépinières</option>
                <option value="Désertification">Désertification</option>
              </select>

              {/* Content */}
              <label className="form-label fw-semibold mt-3">Contenu</label>
              <textarea
                rows="6"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Fermer
              </button>

              <button className="btn btn-success" onClick={handleSave}>
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
