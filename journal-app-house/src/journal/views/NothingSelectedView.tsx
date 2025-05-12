import { Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const NothingSelectedView = () => {
  return (
    <Card className=" m-4 h-screen">
      <CardBody className=" justify-center p-0 items-center">
        <div>
          <Icon icon="line-md:document-add" width="100" height="100" />
        </div>
        <div className="mt-4">
          <h5>Seleccionar o crear una entrada</h5>
        </div>
      </CardBody>
    </Card>
  );
};
