import { teachersData } from "../../libs/teachersList"
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
function TeachersList() {
    return (
        <div className="overflow-x-auto bg-white">
            {/*Headers */}
            <div className="flex justify-between p-4">
                {/* Title */}
                <h1 className="text-2xl font-semibold">ALL Teachers</h1>
                {/* Actions */}
                <div className="flex justify-center items-center gap-4">
                    {/* Search Input */}
                    <div className="ring-1 ring-slate-300 w-56 h-8 rounded-3xl flex justify-center items-center gap-2">
                        <IoIosSearch className="text-2xl text-slate-400" />
                        <input type="search" className="focus:ring-0 focus:outline-none" placeholder="Search...." />
                    </div>
                    {/* Header Action Buttons */}
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-yellow-300 flex items-center justify-center rounded-full opacity-80">
                            <IoOptionsOutline className="text-xl" />
                        </div>
                        <div className="h-10 w-10 bg-yellow-300 flex items-center justify-center rounded-full opacity-80">
                            <FaArrowDownShortWide className="text-xl" />
                        </div>
                        <div className="h-10 w-10 bg-yellow-300 flex items-center justify-center rounded-full opacity-80">
                            <FaPlus className="text-xl cursor-pointer"
                                onClick={() => document.getElementById('my_modal_3').showModal()} />
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Info</th>
                        <th>TeacherID</th>
                        <th>Subjects</th>
                        <th>Classes</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachersData.map(teacher => {
                        return (
                            <tr key={teacher.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    className="rounded-full"
                                                    src={teacher.photo}
                                                    alt="Profile pic" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{teacher.name}</div>
                                            <div className="text-sm opacity-50">{teacher.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {teacher.teacherId}
                                </td>
                                <td>
                                    {teacher.subjects.toString()}
                                </td>
                                <td>
                                    {teacher.classes.toString()}
                                </td>
                                <td>
                                    {teacher.phone}
                                </td>
                                <td>
                                    {teacher.address}
                                </td>
                                {/* Action Buttons */}
                                <td>
                                    <div className="flex gap-2">
                                        <div className="bg-slate-400 h-10 w-10 flex justify-center items-center
                                         rounded-full opacity-70 cursor-pointer">
                                            <FaRegEye className="text-2xl" />
                                        </div>
                                        <div className="bg-red-400 h-10 w-10 flex justify-center items-center
                                         rounded-full opacity-70 cursor-pointer">
                                            <RiDeleteBin5Line className="text-2xl" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TeachersList