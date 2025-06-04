import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const Section = ({ title, isOpen, onClick, children }) => (
    <div className="bg-white rounded-2xl w-full px-4 py-2 drop-shadow-xl">
        <h2
            onClick={onClick}
            className="flex justify-between items-center text-xl font-bold py-1 cursor-pointer"
        >
            {title}
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <ChevronDown />
            </motion.div>
        </h2>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="my-2 mx-2">{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function Details({data, handleData}) {
    const [openSection, setOpenSection] = useState(null);

    const toggle = (i) => {
        setOpenSection(openSection === i ? null : i);
    };

    return (
        <div className="w-4/5 flex flex-col gap-4">
            <Section
                title="Personal Details"
                isOpen={openSection === 0}
                onClick={() => toggle(0)}
            >
                <PersonalDetailsForm
                    data={data.personalDetails}
                    handlePersonalData={handleData}
                    handleOpenSection={() => setOpenSection(null)}
                />
            </Section>
            <Section
                title="Education"
                isOpen={openSection === 1}
                onClick={() => toggle(1)}
            >
                <EducationForm
                    data={data.education}
                    handleEducation={handleData}
                    handleOpenSection={() => setOpenSection(null)}
                />
            </Section>
            <Section
                title="Practical Experience"
                isOpen={openSection === 2}
                onClick={() => toggle(2)}
            >
                <ExperienceForm
                    data={data.experience}
                    handleExperience={handleData}
                    handleOpenSection={() => setOpenSection(null)}
                />
            </Section>
        </div>
    );
}
