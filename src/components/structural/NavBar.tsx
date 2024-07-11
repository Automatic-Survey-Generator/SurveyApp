'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserRound, Menu, LogOut, SunMoon } from 'lucide-react'
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
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
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
                {/* show email address if authenticated */}
                {/* Programatic routing because if user is loged in, button will become dropdown */}
                {/* see Figma Design */}
                <Button
                    onClick={() => router.push('/signup')}
                    className="hidden md:flex gap-2 justify-around group items-center bg-transparent border border-gray-300 rounded-full text-slate-700 hover:bg-gray-400 px-3 hover:text-white transition-colors group"
                >
                    <div>Sign Up</div>
                    <div className="w-4 h-4 bg-primary rounded-full group-hover:border-orange-500/10 group-hover:border transition-colors" />
                </Button>
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
                        <DropdownMenuItem className="flex gap-2">
                            <LogOut className="h-4 w-4" />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
        </>
    )
}
