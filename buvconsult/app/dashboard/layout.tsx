import {ReactNode} from "react"
import Link from "next/link"
import Image from "next/image";
import Logo from "@/public/buvconsultLogo.svg"
import {DashboardItems} from "@/app/components/dashboard/DashboardItems";
import {HardHat,ChartBar, CircleUser, DollarSign, Globe, Home} from "lucide-react"
import {ThemeToggle} from "@/app/components/dashboard/ThemeToggle";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components'
import {ProjectProvider} from "@/components/provider/ProjectProvider";

export const navLinks = [
    // {
    //     name: 'Dashboard',
    //     href: '/dashboard',
    //     icon: Home
    // },
    {
        name: 'Projects',
        href: '/dashboard/sites',
        icon: HardHat,
    },
    {
        name: 'Pricing',
        href: '/dashboard/pricing',
        icon: DollarSign
    },


]


export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <ProjectProvider>
            <section className="min-h-screen w-full flex flex-col">
                {/* Top Navigation Bar */}
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Image src={Logo} alt="Logo" className="size-12" />
                        <h3 className="text-2xl">
                            Buv<span className="text-primary">consult</span>
                        </h3>
                    </Link>
                    {/* Navigation - all dashboard items */}
                    <nav className="flex gap-2 items-center flex-1 ml-6">
                        <DashboardItems />
                    </nav>
                    {/* Theme/User menu */}
                    <div className="flex items-center gap-x-5">
                        <ThemeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <LogoutLink>Log out</LogoutLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                {/* Main content */}
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </section>
        </ProjectProvider>
    );
}