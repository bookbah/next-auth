"use client";

import { useSession, signOut } from "next-auth/react";


const SettingPage = () => {
    const session = useSession();

    const onClick = () => {
        signOut();
    }
    return (
        <div className="mx-auto">
            {JSON.stringify(session)}
            <button onClick={onClick} className="border rounded-md p-2 mx-auto bg-blue-500 justify-center items-center" type="submit">
                Sign Out
            </button>
        </div>
    )
}

export default SettingPage