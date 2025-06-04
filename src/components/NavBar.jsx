import { FileCog } from "lucide-react"
export default function NavBar() {
    return (
        <div className="flex justify-center border-b-1 border-black w-full min-h-15 px-10 py-3">
            <span className="text-2xl font-black">ResumeCraft <FileCog className="inline" /></span>
            {/* 
                Functionalities yet to be implemented 
                <div className="flex gap-4">
                    <BlackButton text="Save"/>
                    <WhiteButton text="Preview"/>
                </div>
            */}
        </div>
    )
}