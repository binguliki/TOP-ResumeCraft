import Input from "./Input";
import BlackButton from "./BlackButton";

export default function ExperienceForm({ data, handleExperience, handleOpenSection }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const experienceData = {
            companyName: formData.get("companyName"),
            position: formData.get("position"),
            startYear: formData.get("startYear"),
            endYear: formData.get("endYear"),
            location: formData.get("location"),
            points: formData.get("points").split('\n')
        };
        handleOpenSection();
        handleExperience(experienceData, 'experience');
    };

    return (
        <form
            className="flex flex-col gap-3"
            action="#"
            method="post"
            onSubmit={handleFormSubmit}
        >
            <Input
                id="company-name"
                name="companyName"
                type="text"
                placeholder="Enter Company Name"
                label="Company Name"
                required={true}
                value={data.companyName}
            />

            <Input
                id="position-title"
                name="position"
                type="text"
                placeholder="Enter Position Title"
                label="Position Title"
                required={true}
                value={data.position}
            />

            <div className="flex gap-4">
                <div className="flex-1">
                    <Input
                        id="start-year"
                        name="startYear"
                        type="number"
                        placeholder="Enter Start Year"
                        label="Start Year"
                        required={true}
                        value={data.startYear}
                    />
                </div>
                <div className="flex-1">
                    <Input
                        id="end-year"
                        name="endYear"
                        type="number"
                        placeholder="Enter End Year"
                        label="End Year"
                        required={true}
                        value={data.endYear}
                    />
                </div>
            </div>

            <Input
                id="location"
                name="location"
                type="text"
                placeholder="Enter Location"
                label="Location"
                required={false}
                value={data.location}
            />

            <Input
                id="points"
                name="points"
                type="textarea"
                placeholder="Enter each responsibility with a line break..."
                label="Responsibilities"
                required={false}
                value={data.points.join('\n')}
            />

            <BlackButton text="Submit" />
        </form>
    );
}
