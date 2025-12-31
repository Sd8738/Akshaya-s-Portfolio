function Skills() {
    const technicalSkills = [
        "PLC Programming", "Automation Components", "Sensors", 
        "Relays", "Transformers", "SMPS", "Control Panel Components",
        "Control Circuits", "Troubleshooting", "Safety Practices"
    ];

    const softSkills = [
        "Analytical Thinking", "Artistic Creativity", "English Communication", 
        "Problem Solving", "Design Thinking"
    ];

    return (
        <section id="skills" className="section-padding relative" data-name="skills" data-file="components/Skills.js">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-[var(--text-muted)]">A blend of technical precision and creative thought.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Technical Skills */}
                    <div className="card">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <span className="icon-settings-2 text-xl"></span>
                            </div>
                            <h3 className="text-2xl font-bold">Technical Proficiency</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {technicalSkills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 rounded-lg bg-[var(--bg-color)] text-[var(--text-main)] text-sm font-medium border border-slate-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Soft/Creative Skills */}
                    <div className="card">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                <span className="icon-palette text-xl"></span>
                            </div>
                            <h3 className="text-2xl font-bold">Creative & Soft Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                             {softSkills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 rounded-lg bg-[var(--bg-color)] text-[var(--text-main)] text-sm font-medium border border-slate-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}