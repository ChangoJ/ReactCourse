import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: any) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    const heroRoute  = `/hero/${id}`;
   
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

  return (
    <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    <Link to={heroRoute}>
    <Card isPressable className="py-4 hover:bg-slate-100" key={id}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{alter_ego}</p>
        <small className="text-default-500">{first_appearance}</small>
        
        <h4 className="font-bold text-large">{superhero}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={superhero}
          className="object-cover rounded-xl"
          src={heroImageUrl}
          width={380}
        />
        <small className="text-default-500">{publisher}</small>
      </CardBody>
    </Card>
    </Link>
    </motion.div>
  );
};
