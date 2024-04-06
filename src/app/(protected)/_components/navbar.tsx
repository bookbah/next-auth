"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/auth/user-button"
import { NavbarRoleGate } from "@/components/auth/role-gate"
import { UserRole } from "@prisma/client"

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="mx-auto bg-secondary flex justify-between items-center p-4 rounded-lg w-[600px] shadow-sm">
            <div className="flex gap-x-2">
                <Button
                    asChild
                    variant={pathname === "/server" ? "default" : "outline"}
                >
                    <Link href="/server">
                        Server
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/client" ? "default" : "outline"}
                >
                    <Link href="/client">
                        Client
                    </Link>
                </Button>
                {/* <NavbarRoleGate allowedRole={UserRole.ADMIN}>
                    <Button
                        asChild
                        variant={pathname === "/admin" ? "default" : "outline"}
                    >
                        <Link href="/admin">
                            Admin
                        </Link>
                    </Button>
                </NavbarRoleGate> */}
                <Button
                        asChild
                        variant={pathname === "/admin" ? "default" : "outline"}
                    >
                        <Link href="/admin">
                            Admin
                        </Link>
                    </Button>
                <Button
                    asChild
                    variant={pathname === "/settings" ? "default" : "outline"}
                >
                    <Link href="/settings">
                        Settings
                    </Link>
                </Button>
            </div>
            <UserButton />
        </nav>
    )
}

export default Navbar