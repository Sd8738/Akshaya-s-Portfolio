function Hero() {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
            {/* Abstract Background Shapes */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-60"></div>

            <div className="container-custom flex flex-col items-center text-center">
                <div className="space-y-8 fade-in-up max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 text-[var(--primary-color)] text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></span>
                        Instrumentation Engineer
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Bridging <span className="text-[var(--primary-color)]">Precision</span> with <span className="text-[#E76F51]">Innovation</span>
                    </h1>
                    
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mx-auto">
                        I blend analytical engineering skills with creative problem-solving to create innovative automation solutions.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
                        <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})} className="btn-primary">
                            Explore My Work
                        </button>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="btn-outline">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}