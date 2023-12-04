import { useState, useEffect } from "react";
import { Navbar } from "../components/navigation/Navbar";
import { FormModal } from "../components/modal/FormModal";
import { NoteCard } from "../components/cards/NoteCard";
import { Link } from "react-router-dom";
import { Greeting } from "utils/Greeting";
import { readNotes } from "service";
import { AddNoteIcon } from "components/vectors/AddNoteIcon";
import { useAuthContext } from "context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

const override = {
  display: "block",
  margin: "70px auto 0 auto",
  borderColor: "black",
};

export const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteNote = (deletedNoteId) => {
    const updatedNotes = notes.filter((note) => note._id !== deletedNoteId);
    setNotes(updatedNotes);
  };

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const getNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await readNotes({ sortBy: "asc", page: 1, limit: 2 });
      setNotes(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  if (isLoading) {
    return (
      <ClipLoader
        color= "#000000"
        isLoading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="container">
        {/* <h3 className="text-white">
        <BsToggleOff />
        </h3> */}
        <div className="d-flex justify-content-between w-100 py-4">
          <h2 className="s-2 text-light">
            <Greeting /> {user?.name}
          </h2>
          <Link to="/create" className="text-decoration-none text-secondary">
            <AddNoteIcon />
          </Link>
        </div>
        <div className="row mt-5">
          {notes && notes.length > 0 ? (
            notes?.map((note) => (
              <div className="col-md-3" key={note._id}>
                <NoteCard
                  note={note}
                  key={note._id}
                  onDeleteNote={handleDeleteNote}
                />
              </div>
            ))
          ) : (
            <div className="s-2 text-light">You are yet to create any note</div>
          )}
        </div>
      </div>
      <FormModal isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
};
