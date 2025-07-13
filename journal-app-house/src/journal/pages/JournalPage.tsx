import { Icon } from "@iconify/react/dist/iconify.js";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { Button } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote, startNewNote } from "../../store/journal";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const JournalPage = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { noteId } = useParams<{ noteId: string }>();

  const { isSaving, active, notes } = useSelector(
    (state: any) => state.journal
  );

  const handleNewNote = () => {
    dispatch(startNewNote());
  };

  useEffect(() => {
    if (noteId) {
      const note = notes.find((n: any) => n.id === noteId);

      if (note) {
        if (!active || active.id !== noteId) {
          // dispatch(setActiveNote(note));
        }
      } else {
        navigate("/journal");
      }
    } else {
      if (active) {
        // dispatch(setActiveNote(null));
      }
    }
  }, [noteId, notes, dispatch, active, navigate]);

  const shouldShowNoteView = noteId && active && active.id === noteId;

  return (
    <>
      <JournalLayout>
        {shouldShowNoteView ? <NoteView /> : <NothingSelectedView />}

        <Button
          disabled={isSaving}
          onPress={handleNewNote}
          className={`${
            isSaving ? "cursor-not-allowed" : ""
          }  fixed bottom-6 right-12 bg-red-600 text-white
        rounded-full  h-20 flex items-center 
       justify-center shadow-lg hover:bg-red-900 transition-colors z-50`}
        >
          <Icon icon="line-md:plus" width="50" height="50" />
        </Button>
      </JournalLayout>
    </>
  );
};
