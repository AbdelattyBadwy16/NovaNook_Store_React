import { deleteItemComments } from "../features/apiSupaBase";
import Stars from "./Stars";
import "./Comment.css";
export default function Comment({ userid, id, userName, description, rate, setAdding }) {
    let userId = localStorage.getItem('id');
    let name = localStorage.getItem('name');

    function handelDelete() {
        deleteItemComments(id);
        setAdding(id);
    }

    return (
        <div className="w-[100%] border-2 border-gray-950 p-5 mt-5 rounded-md">
            <div className="flex justify-between items-center">
                <div className="prof flex items-center">
                    <img className="w-[70px] mr-5" src="/profile.png"></img>
                    <h2 className="font-bold">{userName}</h2>
                </div>
                <div>
                    {
                        userId == userid || name == "admin" ?
                            <div className="flex justify-end mb-5">
                                <p onClick={handelDelete} className="border-2 border-gray-950 rounded-full cursor-pointer p-2 bg-[#088178] text-white">X</p>
                            </div> : ""
                    }
                    <div className="del">
                        <Stars len={rate}></Stars>
                    </div>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}