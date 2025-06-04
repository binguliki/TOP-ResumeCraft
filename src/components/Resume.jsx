export default function Resume({ data }) {
    const { personalDetails, education, experience } = data;

    return (
        <div className="w-4/5">
            <div className="max-w-3xl mx-auto bg-white p-8 font-serif rounded-xl">

                {/* Header */}
                <div className="text-center mb-6 border-b pb-6">
                    <h1 className="text-3xl font-bold mb-2">{personalDetails.fullName}</h1>
                    <div className="text-gray-700 space-y-1">
                        <p>
                            {personalDetails.email} | {personalDetails.phone} | {personalDetails.address}
                        </p>
                    </div>
                </div>

                {/* Experience */}
                <section className="mb-6 flex-1">
                    <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Experience</h2>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-semibold">{experience.position}</h3>
                                    <p className="text-gray-700">{experience.companyName}</p>
                                </div>
                                <span className="text-gray-600 text-sm">
                                    {experience.startYear} - {experience.endYear}
                                </span>
                            </div>
                            <ul className={experience.points[0] === ''? "hidden": "text-gray-800 space-y-1 ml-4"}>
                                {experience.points.map((point, index) => <li key={index}>• {point}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="flex-shrink-0">
                    <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Education</h2>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold">{education.degree}</h3>
                            <p className="text-gray-700">{education.school}</p>
                        </div>
                        <span className="text-gray-600 text-sm">
                            {education.startYear} - {education.endYear}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
}
