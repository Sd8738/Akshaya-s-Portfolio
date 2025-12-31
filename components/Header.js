function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-color)]/80 backdrop-blur-md border-b border-slate-100" data-name="header" data-file="components/Header.js">
            <div className="container-custom h-20 flex items-center justify-between">
                <div className="font-bold text-xl tracking-tight flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white">
                        <span className="icon-pen-tool text-sm"></span>
                    </div>
                    <span>Akshaya's Portfolio</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-[var(--text-muted)] font-medium">
                    <button onClick={() => scrollToSection('about')} className="hover:text-[var(--primary-color)] transition-colors">About</button>
                    <button onClick={() => scrollToSection('skills')} className="hover:text-[var(--primary-color)] transition-colors">Skills</button>
                    <button onClick={() => scrollToSection('education')} className="hover:text-[var(--primary-color)] transition-colors">Journey</button>
                    <button onClick={() => scrollToSection('certifications')} className="hover:text-[var(--primary-color)] transition-colors">Certifications</button>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-[var(--text-main)]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></span>
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-[var(--card-bg)] border-b border-slate-100 p-6 shadow-lg animate-fade-in">
                    <div className="flex flex-col gap-4 text-center">
                        <button onClick={() => scrollToSection('about')} className="py-2 hover:text-[var(--primary-color)]">About</button>
                        <button onClick={() => scrollToSection('skills')} className="py-2 hover:text-[var(--primary-color)]">Skills</button>
                        <button onClick={() => scrollToSection('education')} className="py-2 hover:text-[var(--primary-color)]">Journey</button>
                        <button onClick={() => scrollToSection('certifications')} className="py-2 hover:text-[var(--primary-color)]">Certifications</button>
                    </div>
                </div>
            )}
        </header>
    );
}