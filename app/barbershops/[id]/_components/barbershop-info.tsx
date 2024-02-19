'use client'

import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon, Gem } from "lucide-react";
import { Barbershop } from "@prisma/client"
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import SideMenu from "@/app/components/side-menu";

interface BarbershopInfoProps {
   barbershop: Barbershop;
}


const BarbershopInfo = ({ barbershop }: BarbershopInfoProps ) => {
   const router = useRouter();
   
   const handleBackClick = () => {
      router.replace("/");
   }
    
   return ( 

      <>
      <div className="h-[250px] w-full relative">
      
         <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
            <ChevronLeftIcon />
         </Button>
      
         <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
      <MenuIcon />
         </Button>
<>
         <Sheet>
  <SheetTrigger asChild>
  <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
      <MenuIcon />
         </Button>
  </SheetTrigger>

  <SheetContent className="p-0">
  <SideMenu/>

  </SheetContent>
         </Sheet>
         </>

         <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{
            objectFit: "cover",
         }}
         className="opacity-75" />
      
      </div>   
      <div className="px-5 pt-3 pb-6 border-b border-solid boder-secondary">
         <h1 className="text-xl font-bold py-3" >{barbershop.name}</h1>
      <div className="flex items-center gap-2">
         <Gem className="text-primary" size={18}></Gem>
      <p className="text-sm">{barbershop.address} </p>
      </div>
      <div className="flex items-center gap-2 mt-2">
         <StarIcon className="text-primary" size={18}></StarIcon>
      <p className="text-sm">5,0 (899 avaliações) </p>
      </div>
      </div> 
      </>
    );
}
 
export default BarbershopInfo;