import { Icon } from "@iconify/react/dist/iconify.js";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
import { Button } from "@heroui/react";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {

  const dispatch = useDispatch<any>();

const handleNewNote = () => {
  dispatch(startNewNote())
}

  return (
    <JournalLayout>
     
     <NoteView />
      <Button
      onPress={handleNewNote}
        className="fixed bottom-6 right-12 bg-red-600 text-white
        rounded-full  h-20 flex items-center 
       justify-center shadow-lg hover:bg-red-900 transition-colors z-50"
      >
        <Icon icon="line-md:plus" width="50" height="50" />
      </Button>
    </JournalLayout>
  );
};
