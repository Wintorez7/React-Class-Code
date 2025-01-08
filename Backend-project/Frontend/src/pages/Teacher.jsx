import { CiMenuKebab } from "react-icons/ci"
import BigCalendar from "../components/BigCalendar"

function Teacher() {
    return (
        <div className="min-h-[70vh] bg-slate-100 w-full flex gap-2">
            {/*Schedule  Calendar*/}
            <div className="bg-white lg:w-2/3 min-h-[100%]">
                {/* Title */}
                <div className="flex justify-between w-full px-8">
                    <h1 className="text-2xl">Schedule Classes</h1>
                    <CiMenuKebab className='rotate-90 text-4xl text-gray-500' />
                </div>
                {/* Calendar */}
                <div className="w-full min-h-[100%]">
                    <BigCalendar />
                </div>
            </div>
            {/*Announcements*/}
            <div className="bg-white lg:w-1/3 flex flex-col gap-2">
            </div>
        </div>
    )
}
export default Teacher