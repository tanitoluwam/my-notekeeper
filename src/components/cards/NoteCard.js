import { DetailsIcon } from "components/vectors/DetailsIcon";
import { Link, useNavigate } from "react-router-dom";
import { deleteNote } from "service";
import { updateNote } from "service";

export const NoteCard = ({ note, onDeleteNote }) => {
  const navigate = useNavigate();
  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      onDeleteNote(noteId);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      <div className="card task-box mx-2,">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <DetailsIcon />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => updateNote(note._id)}
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate(`/note/${note._id}`)}
                  >
                    View
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleDeleteNote(note._id)}
                  >
                    delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <h6 className="card-description">{note.description}</h6>
          <p className="card-text">{note.note}</p>
        </div>
      </div>
    </div>
  );
};
