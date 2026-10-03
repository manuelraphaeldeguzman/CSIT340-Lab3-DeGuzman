import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection(){
    return (
        <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="Projects" subtitle="Things I have built."/>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ProjectCard 
                year="2026" 
                title="Portfolio in React"
                description="A personal portfolio website built using React components and Tailwind CSS."
                tech="React · Tailwind CSS"
                link="https://github.com/manuelraphaeldeguzman/CSIT340-Lab3-DeGuzman"
                />
                <ProjectCard
                year="2025"
                title="School Project"
                description="A flight booking and tracking system."
                tech="HTML · CSS · JavaScript · Java"
                link="https://github.com/manuelraphaeldeguzman"
                />
                <ProjectCard
                year="2026"
                title="School Project 2"
                description="A Wi-Fi voucher generation and distribution system."
                tech="Java · MySQL"
                link="https://github.com/manuelraphaeldeguzman"
                />
                <ProjectCard
                year="2026"
                title="Placeholder"
                description="A system that'll be made in the future by future me."
                tech="Placeholder"
                link="https://github.com/manuelraphaeldeguzman"
                />
            </div>
        </section>
    );
}

export default ProjectsSection;