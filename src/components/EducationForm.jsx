import Input from "./Input"
import BlackButton from "./BlackButton"
export default function EducationForm({ data, handleEducation }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = {
            school: formData.get('school'),
            degree: formData.get('degree'),
            startYear: formData.get('startYear'),
            endYear: formData.get('endYear'),
            location: formData.get('location')
        };
        handleEducation(data, 'education');
    }
    return (
        <form className="flex flex-col gap-3"
            action="#"
            method="post"
            onSubmit={handleFormSubmit}
        >
            <Input
                id="school"
                name="school"
                type="text"
                placeholder="Enter school / university"
                label="School"
                required={true}
                value={data.school}
            />

            <Input
                id="degree"
                name="degree"
                type="text"
                placeholder="Enter Degree / Field Of Study"
                label="Degree"
                required={true}
                value={data.degree}
            />
            <Input
                id="start-year"
                type="number"
                name="startYear"
                placeholder="Enter start year"
                label="Start Year"
                required={true}
                value={data.startYear}
            />
            <Input
                id="end-year"
                type="number"
                name="endYear"
                placeholder="Enter end year"
                label="End Year"
                required={true}
                value={data.endYear}
            />

            <Input
                id="location"
                type="text"
                name="location"
                placeholder="Enter Location"
                label="Location"
                required={false}
                value={data.location}
            />
            <BlackButton text="Submit"></BlackButton>
        </form>

    )
}