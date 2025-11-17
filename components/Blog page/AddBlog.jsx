import React, { useEffect, useState } from "react";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Jardinnage",
  });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser") || "null"));
  }, []);

  const handleAddBlog = () => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const newBlog = {
      id: Date.now(),
      title: formData.title,
      img: "placeholder.jpg",
      content: formData.content,
      author: currentUser.name,
      category: formData.category,
      createdAt: new Date().toISOString(),
      comments: [],
    };
    const updated = [newBlog, ...allBlogs];
    localStorage.setItem("blogs", JSON.stringify(updated));
    console.log(formData.category);
    setFormData({ title: "", content: "", category: "" });
    window.location.reload(true);
  };

  return (
    <div>
      <button
        type="button"
        className="btn bg-green rounded-pill text-white fw-bold px-5 py-3 mb-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ajouter un blog <i className="bi bi-pen"></i>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajoutez un blog
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="fw-semibold">Veuillez saisir le titre</p>
              <input
                className="form-control mb-2"
                placeholder="Blog Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <p className="fw-semibold">Choisissez la catégorie</p>
              <select
                className="form-select mb-3"
                aria-label="Large select example"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value={"Jardinnage"}>Jardinnage</option>
                <option value="Contre-Saison">Contre-Saison</option>
                <option value="Pépinière">Pépinière</option>
                <option value="Désertification">Désertification</option>
              </select>
              <p className="fw-semibold">
                Veuillez saisir le contenu de la formations
              </p>
              <textarea
                className="form-control mb-2"
                placeholder="Blog Content"
                rows="4"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger rounded-pill text-white fw-bold px-4 py-2"
                data-bs-dismiss="modal"
              >
                Annulez <i className="bi bi-x"></i>
              </button>
              <button
                type="button"
                className="btn bg-green rounded-pill text-white fw-bold px-4 py-2"
                data-bs-dismiss="modal"
                onClick={handleAddBlog}
              >
                Confirmez <i className="bi bi-check-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
