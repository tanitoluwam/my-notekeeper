import { useState } from "react";

export const FormModal = ({ hideModal }) => {
  const [title, setTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const handleSubmit =(e) =>{
    e.preventDefault();
    if (hideModal) {
      console.log(title + " " + noteDescription)
    }
  }
  return (
    <div>
      <div
        className="modal fade"
        id="formModal"
        tabIndex="-1"
        aria-labelledby="formModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 classame="modal-title" id="formModalLabel">
                Create a new note
              </h5>
              <button
                onClick={hideModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="note-description" className="col-form-label">
                    Add note description
                  </label>
                  <textarea
                    className="form-control"
                    id="note-description"
                    value={noteDescription}
                    onChange={(e)=>setNoteDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">Save</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
