import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection(){
    return(
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="Contact" subtitle="Reach out to me through:."/>
            <ul className="mt-8 space-y-3">
                <ContactLink
                    label="Email"
                    href="mailto:manuelraphael.deguzman@cit.edu"
                    text="manuelraphael.deguzman@cit.edu" />
                <ContactLink
                    label="GitHub"
                    href="https://github.com/manuelraphaeldeguzman"
                    text="github.com/manuelraphaeldeguzman" />
                <ContactLink
                    label="LinkedIn"
                    href="https://linkedin.com/in/manuelraphaeldeguzman"
                    text="linkedin.com/in/manuelraphaeldeguzman" />
            </ul>
        </section>
    );
}

export default ContactSection;