import Input from "./Input"
import BlackButton from "./BlackButton"
export default function PersonalDetailsForm({ data, handlePersonalData }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phoneNumber: formData.get("phoneNumber"),
            address: formData.get("address"),
        };
        handlePersonalData(data, 'personalDetails');
    }
    return (
        <form
            className="flex flex-col gap-3"
            action="#"
            method="post"
            onSubmit={handleFormSubmit}
        >
            <Input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                label="Full Name"
                required={true}
                value={data.fullName}
            />
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email"
                required={true}
                value={data.email}
            />
            <Input
                id="phoneno"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                label="Phone Number"
                required={true}
                value={data.phoneNumber}
            />
            <Input
                id="address"
                name="address"
                type="text"
                placeholder="City, Country"
                label="Address"
                required={true}
                value={data.address}
            />
            <BlackButton text="Submit"></BlackButton>
        </form>
    )
}
