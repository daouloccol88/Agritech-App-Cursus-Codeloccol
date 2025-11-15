import React, { useEffect, useState } from "react";
import Loader from "../Loader";

const TeamsSection = () => {
  const [users, serUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    //To sort by created at

    serUsers(fetchedUsers);
    setLoading(false);
  }, []);

  if (loading || !users)
    return (
      <div>
        <Loader loadedElement={"Our Team"} />
      </div>
    );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h3 className="text-center">Our Teams</h3>
            <h2 className="text-center">Meet Our Teams members</h2>
            <div className="mx-auto" style={{ width: "50%" }}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus tempore quae laboriosam fugit quis omnis natus
                libero nihil, ex vel voluptatibus fuga a necessitatibus aliquam
                eius asperiores porro rem temporibus?
              </p>
            </div>
          </div>

          <div className="row">
            {users.map((user) => {
              return (
                <div className="col-lg-3 col-md-6 text-center" key={user.id}>
                  <img
                    src={user.img}
                    className="rounded-circle mx-auto"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <h3 className="mt-4">{user.name}</h3>
                  <p className="fw-semibold">{user.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
