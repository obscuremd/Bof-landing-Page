import { useMediaQuery } from "react-responsive";
import Form from "./Form"
import { Button } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/16/solid";


const image = "https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



const Hero = ({ setActive }) => {

  const isMobile = useMediaQuery({ maxWidth: 960 });

  const hero = {
    background: isMobile ? '#F8FAFC' : `url(${image})`,
    backgroundSize: 'cover'
  }

  return (
    <div style={hero} className=" w-full md:py-[2%] py-[5%] md:px-[15%] px-[5%] flex flex-col md:flex-row md:justify-between justify-center object-fill">

      {isMobile &&
        <div className="flex flex-col gap-2">
          <a href="https://boa-tan.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex w-full">
            <Button variant="gradient" color="blue" className="w-full flex items-center gap-3">
              <UserCircleIcon className="w-[20px] h-[20px]" />Login
            </Button>
          </a>
          <Button onClick={() => setActive(1)} variant="gradient" color="blue-gray" className="flex items-center gap-3">
            <UserCircleIcon className="w-[20px] h-[20px]" />Register
          </Button>
        </div>}

      <div className="my-7 text-center">
        <p className="text-4xl font-bold">Online Banking <br /> simple and fast</p>
        <p className="md:text-3xl text-2xl mt-2">Register now for easy <br /> banking services.</p>
      </div>

      <Form setActive={setActive} />


    </div>
  )
}

export default Hero