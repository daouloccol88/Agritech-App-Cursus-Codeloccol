import React from "react";

const RemoveBlog = ({ blog, onDelete }) => {
  const modalId = `removeModal-${blog.id}`;

  const handleDelete = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const filtered = blogs.filter((b) => b.id !== blog.id);

    localStorage.setItem("blogs", JSON.stringify(filtered));

    if (onDelete) onDelete(); // tell parent to refresh

    // close modal
    const modal = window.bootstrap.Modal.getInstance(
      document.getElementById(modalId)
    );
    modal.hide();
    window.location.reload(true);
  };

  return (
    <div>
      <button
        className="btn btn-danger rounded-circle"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        style={{ position: "absolute", right: "0", top: "0" }}
      >
        <i className="bi bi-trash3-fill fs-3"></i>
      </button>

      <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Supprimer l'article "{blog.title}"
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              Voulez-vous vraiment supprimer <strong>{blog.title}</strong> ?
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBlog;
