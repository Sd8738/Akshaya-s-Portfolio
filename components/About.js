function About() {
    return (
        <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
            <div className="container-custom">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <div className="w-20 h-1.5 bg-[var(--primary-color)] rounded-full mb-8"></div>
                        <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 relative">
                             {/* Mandala/Artistic Image */}
                             <img 
                                src="https://images.unsplash.com/photo-1605218427360-36390f854a86?q=80&w=1000&auto=format&fit=crop" 
                                alt="Mandala Art" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                             />
                             <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors">
                             </div>
                        </div>
                         <p className="text-center mt-4 text-sm text-[var(--text-muted)] italic">"Art allows me to approach engineering with a unique perspective."</p>
                    </div>
                    
                    <div className="md:col-span-7 space-y-6 text-[var(--text-muted)] leading-relaxed">
                        <p className="text-xl text-[var(--text-main)] font-medium">
                            I am currently pursuing a B.Tech in Instrumentation and Control Engineering at Padmabhushan Vasantraodada Patil Institute of Technology.
                        </p>
                        <p>
                            Where I am developing strong technical skills in automation, control systems, and instrumentation. Alongside my engineering studies, I have a deep passion for artistic expression, particularly in drawings, Mandala art, and abstract designs. This creative side allows me to think innovatively and approach problems with a unique perspective.
                        </p>
                        <p>
                            While I don’t have formal job experience yet, I am proficient in English communication. My ability to blend analytical thinking with artistic creativity helps me approach engineering challenges with fresh ideas.
                        </p>
                        <p>
                            My career goal is to become a skilled Instrumentation and Control Engineer, contributing to innovative automation solutions while continuing to explore my artistic passions. I aspire to work in industries where technology and creativity intersect, bringing precision engineering and design thinking together.
                        </p>

                        <div className="pt-6">
                            <div className="p-4 rounded-xl bg-[var(--bg-color)] border border-slate-100 inline-block pr-8">
                                <h4 className="font-bold text-[var(--text-main)] mb-1">Engineering Focus</h4>
                                <p className="text-sm">Automation, Control Systems, PLC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}