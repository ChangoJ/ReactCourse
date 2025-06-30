import { Link as HeroLink } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";
export const SideBarItem = memo(({ title, body, id, date, imageUrls = [] }: any) => {
  const dispatch = useDispatch<any>();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    if (!title) return "Untitled Note";
    return title.length > 10 ? `${title.slice(0, 10)}...` : title;
  }, [title]);

  const newBody = useMemo(() => {
    if (!body) return "Untitled Note";
    return body.length > 10 ? `${body.slice(0, 10)}...` : body;
  }, [body]);

  return (
    <>
      <li key={`${id}-${title}`} className="mb-2 flex  flex-row items-center">
        <HeroLink
        onPress={onClickNote}
          as={Link}
          to={title}
          className="p-2 rounded hover:bg-primary hover:text-white text-decoration-none flex flex-row gap-2 items-center w-full"
          style={{ textDecoration: "none" }}
        >
          <Icon icon="line-md:document" width="25" height="25" />
          <div className=" flex  flex-col items-start">
            {newTitle}
            <span className="text-tiny text-default-400">{newBody}</span>
          </div>
        </HeroLink>
      </li>
    </>
  );
});
