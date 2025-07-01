import { Button, Card, CardBody, Form, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { JournalFormData, journalSchema } from "../components/JournalForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const NoteView = () => {
  const { active, messageSaved, isSaving } = useSelector(
    (state: any) => state.journal
  );

  const dispatch = useDispatch<any>();
  // const { isDirty } = useFormState();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<JournalFormData>({
    resolver: zodResolver(journalSchema),
    defaultValues: {
      title: active?.title || "",
      body: active?.body || "",
      date: active?.date || "",
    },
  });

  const formValues = watch();

  const onFormSubmit: SubmitHandler<JournalFormData> = async (data) => {
    if (data) {
      await dispatch(startSaveNote());
    }
  };

  const onFileInputChange = ({ target }: any) => {
    if (target.files === 0) return;


    dispatch(startUploadingFiles(target.files));

  };

  const dateString = useMemo(() => {
    const date = new Date(active?.date || Date.now());
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [active?.date]);

  useEffect(() => {
    dispatch(
      setActiveNote({
        ...active,
        title: formValues.title,
        body: formValues.body,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      setActiveNote({
        ...active,
        title: formValues.title,
        body: formValues.body,
        date: new Date().getTime(),
      })
    );
  }, [formValues.title, formValues.body]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  return (
    <Card className=" m-4 h-screen ">
      <CardBody>
        <div className="flex flex-row justify-between m-2">
          <div>
            <h2 className=" text-4xl font-semibold">{dateString}</h2>
          </div>
          <div className="flex flex-row gap-2">
            <Input
              //size="md"
              className="hidden"
              type="file"
              multiple
              ref={fileInputRef}
              onChange={onFileInputChange}              
            />
            <Button
              className="flex items-center justify-center p-2"
              disabled={isSaving}
              color="secondary"
              onPress={() => fileInputRef.current?.click()}
            >
              <Icon
                color="white"
                icon="line-md:cloud-alt-upload-filled-loop"
                width="50"
                height="50"
              />
              Subir
            </Button>

            <Button
              form="journal-form"
              disabled={isSaving}
              color="primary"
              type="submit"
              isLoading={isSubmitting}
            >
              <Icon icon="line-md:folder-check-filled" width="25" height="25" />
              <h3>Guardar</h3>
            </Button>
          </div>
        </div>
        <div className="m-2 mt-8 ">
          <Form
            id="journal-form"
            className="w-full max-w-full"
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <Input
              isRequired
              size="lg"
              label="Titulo"
              placeholder="Ingresa un título"
              // name="title"
              type="text"
              variant="bordered"
              autoComplete="title"
              {...register("title")}
              errorMessage={errors.title?.message}
              isInvalid={!!errors.title}
            />
            <Textarea
              isRequired
              disableAnimation
              disableAutosize
              classNames={{
                base: "max-w-full",
                input: "resize-y min-h-[100px]",
              }}
              label="Descripción"
              placeholder="Escribe algo..."
              variant="bordered"
              autoComplete="body"
              {...register("body")}
              errorMessage={errors.body?.message}
              isInvalid={!!errors.body}
            />
          </Form>
        </div>

        {/* <ImageGallery /> */}
      </CardBody>
    </Card>
  );
};
