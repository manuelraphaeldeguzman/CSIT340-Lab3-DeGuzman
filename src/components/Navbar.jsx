import NavLink from "./NavLink"

function Navbar() {
    return (
        <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
            <div className="max-w-4xl mx-auto flex h-16 items-center justify-between px-6">
                <a href="#top" className="font-semibold">
                    Manuel Raphael De Guzman
                </a>
                <div className="flex gap-6 text-sm text-stone-600">
                    <NavLink href="#about" label="About" />
                    <NavLink href="#skills" label="Skills" />
                    <NavLink href="#projects" label="Projects" />
                    <NavLink href="#experience" label="Experience" />
                    <NavLink href="#contact" label="Contact" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;