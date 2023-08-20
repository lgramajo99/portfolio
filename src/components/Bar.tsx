import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import stackoverflow from '../assets/stack-overflow.svg';
import moon from '../assets/moon-regular.svg';
import sun from '../assets/sun-regular.svg';
import user from '../assets/user-regular.svg';

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
                        <img src={stackoverflow} alt="LinkedIn Logo" className="w-6 h-6" />
                    </Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <button disabled>
                        {<img src={moon} alt="Luna" className="w-6 h-6" />
                            || <img src={sun} alt="Sol" className="w-6 h-6" />}

                    </button>
                </NavbarItem>

                <NavbarItem>
                    <button>
                        <img src={user} alt="Usuario" className="w-6 h-6" />
                    </button>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    )
}

export default Bar;