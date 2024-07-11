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
import { useState, useEffect } from 'react'

function NavigationLinks({ onLinkClick = () => {} }) {
    return (
        <>
            <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
                onClick={onLinkClick}
            >
                Home
            </Link>
            <Link
                href="/builder/0"
                className="text-muted-foreground hover:text-foreground"
                onClick={onLinkClick}
            >
                Editor
            </Link>
            <Link
                href="/admin/0"
                className="text-muted-foreground hover:text-foreground"
                onClick={onLinkClick}
            >
                Admin
            </Link>
            <Link
                href="/viewer/0"
                className="text-muted-foreground hover:text-foreground"
                onClick={onLinkClick}
            >
                Viewer
            </Link>
        </>
    )
}

function UserMenu({ isAuthenticated }) {
    const router = useRouter()

    return (
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
                {isAuthenticated ? (
                    <DropdownMenuItem
                        className="flex gap-2"
                        onClick={() => {
                            router.push('/logout')
                        }}
                    >
                        <LogOut className="h-4 w-4" />
                        Log out
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem
                        className="flex gap-2"
                        onClick={() => {
                            router.push('/signin')
                        }}
                    >
                        <LogIn className="h-4 w-4" />
                        Sign in
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    useEffect(() => {
        // TODO Replace with actual authentication check logic
        const checkAuthStatus = async () => {
            const authenticated = await fakeAuthCheck()
            setIsAuthenticated(authenticated as boolean)
        }

        checkAuthStatus()
    }, [])

    const handleLinkClick = () => {
        setIsSheetOpen(false)
    }

    return (
        <>
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
                            <NavigationLinks onLinkClick={handleLinkClick} />
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link
                    href="/"
                    className="text-primary text-2xl font-bold uppercase mr-auto"
                >
                    Survey Creator
                </Link>
                <nav className="hidden flex-col gap-6 font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
                    <div className="flex gap-6">
                        <NavigationLinks />
                    </div>
                </nav>
                <UserMenu isAuthenticated={isAuthenticated} />
            </header>
        </>
    )
}

// TODO Replace with actual authentication check
const fakeAuthCheck = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(true)))
}
