import { Button, Card, CardFooter, CardHeader, Image } from "@heroui/react";

export const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-2">
      {images.map((image) => (
        <Card className="col-span-12 sm:col-span-4 ">
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={image}
          />
        </Card>
      ))}
    </div>
  );
};
