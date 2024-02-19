'use client'

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { LogOutIcon, MenuIcon, UserIcon, LogInIcon, HomeIcon, CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signOut, signIn , useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import SideMenu from "./side-menu";

const Header = () => {

   const { data } = useSession();

   const handleLogoutClick = () => signOut() 

   const handleLoginClick = () => signIn ("google") 

   return ( 
<header>
<Card>
         <CardContent className="p-5 justify-between items-center flex flex-row">

<Link href="/">
<Image src="/Logo.png" alt="FSW Barber" width={120} height={120} />

</Link>
        <Sheet>
  <SheetTrigger asChild>
  <Button variant="outline" size="icon">
            <MenuIcon size={16}/>
         </Button>
  </SheetTrigger>

  <SheetContent className="p-0">
  <SideMenu/>
  </SheetContent>
         </Sheet>
            </CardContent>

      </Card>
</header>
    );
}
 
export default Header;