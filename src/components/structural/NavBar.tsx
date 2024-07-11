'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserRound, Menu, LogOut, LogIn, SunMoon } from 'lucide-react'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function NavBar() {
    const router = useRouter()

    return (
        <>
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0 md:hidden text-primary"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium mt-4">
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Home
                            </Link>
                            <Link
                                href="/builder/0"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Editor
                            </Link>
                            <Link
                                href="/admin/0"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Admin
                            </Link>
                            <Link
                                href="/viewer/0"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Viewer
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link
                    href="/"
                    className="text-primary text-2xl font-bold uppercase mr-auto"
                >
                    SURVEY CREATOR
                </Link>
                <nav className="hidden flex-col gap-6 font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
                    <div className="flex gap-6">
                        <Link
                            href="/"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Home
                        </Link>
                        <Link
                            href="/builder/0"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Editor
                        </Link>
                        <Link
                            href="/admin/0"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Admin
                        </Link>
                        <Link
                            href="/viewer/0"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Viewer
                        </Link>
                    </div>
                </nav>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-secondary-foreground rounded-full"
                        >
                            <UserRound className="h-5 w-6" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex gap-2">
                            <SunMoon className="h-4 w-4" />
                            Theme
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {/* Conditionally render logout/sign in, based on auth status
                            I think the users profile picture could be enough to let them know they are logged in, instead of showing their email 
                            (This could make it easier to be responsive as well, since the email could be too long to fit in the dropdown menu on smaller screens)
                        */}
                        <DropdownMenuItem className="flex gap-2">
                            <LogOut className="h-4 w-4" />
                            Log out
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-2">
                            <LogIn className="h-4 w-4" />
                            Sign in
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
        </>
    )
}
