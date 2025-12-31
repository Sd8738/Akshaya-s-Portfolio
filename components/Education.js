function Education() {
    return (
        <section id="education" className="section-padding bg-white" data-name="education" data-file="components/Education.js">
            <div className="container-custom">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
                    <p className="text-[var(--text-muted)]">Education and Practical Experience</p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    
                    {/* Education Item */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[var(--primary-color)] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="icon-graduation-cap text-lg"></span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[var(--bg-color)] border border-slate-100 shadow-sm">
                            <div className="flex flex-col sm:flex-row justify-between mb-2">
                                <div className="font-bold text-lg text-[var(--text-main)]">Padmabhooshan Vasantraodada Patil Institute of Technology</div>
                            </div>
                            <div className="text-[var(--primary-color)] font-medium mb-2">B.TECH Instrumentation & Control Engineering (Major)</div>
                            <div className="text-sm text-[var(--text-muted)]">+ Electronics Engineering (Minor)</div>
                        </div>
                    </div>

                    {/* Internship Item */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[var(--secondary-color)] text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="icon-briefcase text-lg"></span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[var(--bg-color)] border border-slate-100 shadow-sm">
                             <div className="flex flex-col sm:flex-row justify-between mb-2">
                                <div className="font-bold text-lg text-[var(--text-main)]">Ganalaxmi Industries Internship</div>
                                <span className="text-xs font-semibold text-[var(--secondary-color)] uppercase tracking-wider">Internship</span>
                            </div>
                            <p className="text-sm text-[var(--text-muted)] mb-3">
                                Gained hands-on experience in industrial automation settings.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-xs px-2 py-1 bg-white rounded border border-slate-200">PLC Programming</span>
                                <span className="text-xs px-2 py-1 bg-white rounded border border-slate-200">Automation Components</span>
                                <span className="text-xs px-2 py-1 bg-white rounded border border-slate-200">Sensors & Relays</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}