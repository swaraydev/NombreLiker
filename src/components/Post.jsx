import React from "react";

export default function Post({ data, liker, suppressionDonner }) {
  return (
    <div className={data.liker ? "post active" : "post"}>
      <div>
        <h2>{data.titre}</h2>
        <h2>{data.description}</h2>
      </div>
      <div className="btn">
        <button onClick={() => liker(data)}>
          {" "}
          {data.liker ? "Déja liker" : "Liker"}
        </button>
        <button className="delete" onClick={() => suppressionDonner(data.id)}>
          Effacer
        </button>
      </div>
    </div>
  );
}
