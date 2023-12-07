"use client"

import {useMdEditor} from "@/app/_components/md-editor";
import clsx from "clsx";

const Edit = ({className}: {className?: string}) => {
    const {text, setText} = useMdEditor()

    return <textarea
        className={clsx(`w-full h-full resize-none bg-gray-100 dark:bg-gray-800 px-4 pt-10 pb-4 overflow-scroll focus:outline-none dark:text-white`, className)}
        value={text}
        onChange={e => setText(e.target.value)}
    />
}

export default Edit