import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readNote } from "service";

export const NoteDetails = () => {
  const [note, setNote] = useState("");
  const { id } = useParams();
  const getSingleNote = async (param) => {
    const { data } = await readNote(param);
    setNote(data);
  };

  useEffect(() => {
    if (!id) return;
    getSingleNote(id);
  }, [id]);

  return (
    <div className="bg-white container vh-100">
      <div className="row flex justify-content-center h-100">
        <div className="col-7 bg-light p-5">
          <Link to="/" className="text-decoration-none text-secondary">
            <i className="bi bi-arrow-left"></i>
          </Link>
          <div>
            <h4 className="border-bottom mb-2">{note.title}</h4>
            <p className="border-bottom mb-2 text-lg">{note.description}</p>
          </div>

          <p className="note-details">{note.note}</p>
        </div>
      </div>
    </div>
  );
};
