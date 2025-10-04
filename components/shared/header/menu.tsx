import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { ShoppingCart, EllipsisVertical } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import UserButton from "./user-button";


const Menu = () => {
    return ( 
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <ModeToggle/>
                <Button asChild variant="ghost">
                    <Link href="/cart">
                        <ShoppingCart/> Cart
                    </Link>
                </Button>
                <UserButton/>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical/>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start" >
                        <div className="flex gap-5 items-center">
                            <UserButton/>
                            <SheetTitle>Menu</SheetTitle>
                        </div>
                        <ModeToggle/> 
                        <Button className="w-full" asChild variant="ghost">
                            <Link href="/cart">
                                <ShoppingCart/> Cart
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}
 
export default Menu;