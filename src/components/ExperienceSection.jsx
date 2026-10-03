import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
    return (
        <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
            <ol className="mt-8 space-y-8 border-l border-stone-200">
                <TimelineItem
                period="2024 – Present"
                title="BS Information Technology"
                place="CIT-U"
                description="Taking up web development, databases, and systems analysis." />
                <TimelineItem
                period="2025"
                title="Student Project"
                place="Class Project"
                description="Worked on a group programming project and practiced using Git and GitHub." />
                <TimelineItem
                period="2020 – 2022"
                title="Senior High School, STEM Strand"
                place="USC-NC"
                description="Started learning about computers, programming, and web development." />
            </ol>
        </section>
    );
}

export default ExperienceSection;