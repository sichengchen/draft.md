"use client"

import Markdown from "react-markdown";
import {useMdEditor} from "@/app/_components/md-editor";
import clsx from "clsx";

const Preview = ({className}: {className?: string}) => {
    const {text} = useMdEditor()

    return (
        <article className={clsx(`w-full h-full prose dark:prose-invert bg-gray-100 dark:bg-gray-800 px-4 pt-10 pb-4 overflow-scroll`, className)}>
            <Markdown>{text}</Markdown>
        </article>
    )
}

export default Preview