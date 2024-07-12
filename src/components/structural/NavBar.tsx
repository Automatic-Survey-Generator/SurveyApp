'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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
import { useState } from 'react'
import ResponsiveContainer from '../ui/ResponsiveContainer'
import { signOut } from 'next-auth/react'

const AuthLink = ({ href, children }) => (
    <div className='flex items-center justify-center hover:bg-gray-50 bg-white border-[1px] border-gray-300 text-black px-4 py-2 rounded-3xl font-semibold'>
        <Link href={href}>
            {children}
            <span className="ml-2 w-4 h-4 bg-orange-500 rounded-full inline-block"></span>
        </Link>
    </div>
);

function NavigationLinks({ onLinkClick = () => {} }) {
    const path = usePathname()
    const isLoginPage = path === '/login'
    const isSignupPage = path === '/signup';

    if (isLoginPage) {
        return <AuthLink href="/signup">Sign Up</AuthLink>;

    }
    if (isSignupPage) {
        return <AuthLink href="/login">Sign In</AuthLink>;

    }
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

function UserMenu({ session }) {
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
                {session ? (
                    <DropdownMenuItem
                        className="flex gap-2"
                        onClick={() => {
                            signOut({ callbackUrl: '/login' })
                        }}
                    >
                        <LogOut className="h-4 w-4" />
                        Log out
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem
                        className="flex gap-2"
                        onClick={() => {
                            router.push('/login')
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

export default function NavBar({ session }) {
    const [isSheetOpen, setIsSheetOpen] = useState(false)


    const handleLinkClick = () => {
        setIsSheetOpen(false)
    }

    return (
        <>
            <header className="order-b border-[1px] fixed w-full z-20 top-0 start-0 antialiased bg-white">
                <ResponsiveContainer className='py-4 shadow-md items-center flex gap-4'>
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
                <UserMenu session={session} />
                </ResponsiveContainer>
            </header>
        </>
    )
}
