"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted){
        return null;
    }

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    className="focus-visible:ring-0 ficus-visible:ring-off w-full md:w-auto">
                    {
                        theme === "system" ?
                            <>{isMobile ? <div className="flex gap-2"><SunMoon/> System</div> : <SunMoon/>}</>
                        :
                            theme === "dark" ?
                                <>{isMobile ? <div className="flex gap-2"><MoonIcon/> Dark</div> : <MoonIcon/>}</> 
                            :
                                <>{isMobile ? <div className="flex gap-2"><SunIcon/> Light</div> : <SunIcon/>}</>
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-40" >
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem 
                    checked={theme === "system"} 
                    onClick={() => setTheme("system")}
                >
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    checked={theme === "dark"} 
                    onClick={() => setTheme("dark")}
                >
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    checked={theme === "light"} 
                    onClick={() => setTheme("light")}
                >
                    Light
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
    );
}
 
export default ModeToggle;