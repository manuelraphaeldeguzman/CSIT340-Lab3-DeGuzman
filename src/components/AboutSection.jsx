import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

function AboutSection(){
    return (
        <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="About" subtitle="A little about who I am." />
            <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
                I grew up in Cebu City and enrolled to CIT-U for college. I picked IT because I thought it would've been a future-proof path that'll give me plenty of opportunities, but the rise of AI made me think otherwise. Perhaps, the Business path would've been better for me since I would be able to inherit the Mango business from my parents.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Fact label="Course" value="BS Information Technology" />
                <Fact label="Year level" value="Third year" />
                <Fact label="School" value="CIT-U" />
                <Fact label="Based in" value="Cebu City" />
            </dl>
        </section>
    );
}

export default AboutSection;