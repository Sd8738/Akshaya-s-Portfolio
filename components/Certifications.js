function Certifications() {
    const certs = [
        "Prompt Engineering & Programming with OpenAI by Columbia University",
        "Prompt Mania by Google Ambassador",
        "Instrutech",
        "SmartCops Hackathon",
        "My Bharat",
        "Design Thinking",
        "Ganalaxmi Industries Internship"
    ];

    return (
        <section id="certifications" className="section-padding" data-name="certifications" data-file="components/Certifications.js">
            <div className="container-custom">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
                    <p className="text-[var(--text-muted)]">Continuous learning and professional development.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary-color)] mb-4 group-hover:scale-110 transition-transform">
                                <span className="icon-award"></span>
                            </div>
                            <h4 className="font-medium text-[var(--text-main)] leading-snug">
                                {cert}
                            </h4>
                        </div>
                    ))}
                    
                    {/* Placeholder for '8 Total' - visual filler */}
                    <div className="bg-[var(--bg-color)] p-6 rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
                        <span className="text-[var(--text-muted)] font-medium">+ More Learning</span>
                    </div>
                </div>
            </div>
        </section>
    );
}