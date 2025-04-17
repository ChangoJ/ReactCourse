import { HeroList } from "../components/HeroList"

export const DcPage = () => {
    return (
      <>
      <h1 className="font-bold justify-center text-center w-full my-5">DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />

      </>
    )
  }
  