import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

function Bar() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">LUCIANO GRAMAJO</p>
            </NavbarBrand>
            <NavbarContent className="gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <img src={github} alt="GitHub Logo" className="w-6 h-6" />
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link color="foreground" href="#">
                        <img src={linkedin} alt="LinkedIn Logo" className="w-6 h-6" />
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link color="foreground" href="#">
        
                    </Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <button disabled>
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        }
                    </button>
                </NavbarItem>

                <NavbarItem>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    )
}

export default Bar;