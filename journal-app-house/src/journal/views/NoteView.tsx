import { Button, Card, CardBody, Form, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ImageGallery } from "./ImageGallery";

export const NoteView = () => {
  return (
    <Card className=" m-4 h-screen ">
      <CardBody
        className="
      "
      >
        <div className="flex flex-row justify-between m-2">
          <div>
            <h2 className=" text-4xl font-semibold">15 de mayo del 2025</h2>
          </div>
          <div className="flex flex-row ">
            <Button>
              <Icon icon="line-md:folder-check-filled" width="25" height="25" />
              <h3>Guardar</h3>
            </Button>
          </div>
        </div>
        <div className="m-2 mt-8 ">
          <Form className="w-full max-w-full">
            <Input
              size="lg"
              errorMessage="Ingrese un título"
              label="Titulo"
              name="title"
              type="text"
              variant="bordered"
            />
            <Textarea
              disableAnimation
              disableAutosize
              classNames={{
                base: "max-w-full",
                input: "resize-y min-h-[100px]",
              }}
              label="Descripción"
              placeholder="Escribe algo..."
              variant="bordered"
            />
          </Form>
        </div>

        <ImageGallery />
      </CardBody>
    </Card>
  );
};
