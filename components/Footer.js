function Footer() {
    return (
        <footer id="contact" className="bg-white pt-20 pb-10 border-t border-slate-100" data-name="footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-[var(--text-muted)] mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities in Automation and Control Engineering.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <a href="mailto:akshayasubhedar@gmail.com" className="flex items-center gap-3 text-[var(--text-main)] hover:text-[var(--primary-color)] transition-colors p-4 rounded-xl bg-[var(--bg-color)] border border-slate-100 hover:shadow-md">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary-color)]">
                                <span className="icon-mail"></span>
                            </div>
                            <span className="font-medium">akshayasubhedar@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/akshaya-subhedar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--text-main)] hover:text-[var(--primary-color)] transition-colors p-4 rounded-xl bg-[var(--bg-color)] border border-slate-100 hover:shadow-md">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <span className="icon-linkedin"></span>
                            </div>
                            <span className="font-medium">LinkedIn Profile</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)]">
                    <p>© 2025 Instrumentation Engineer Portfolio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/akshaya-subhedar" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]">LinkedIn</a>
                        <a href="#" className="hover:text-[var(--primary-color)]">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}