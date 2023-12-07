"use client"

import clsx from "clsx";
import Link from "next/link";
import {useMdEditor} from "@/app/_components/md-editor";

const Header = ({className}: {className?: string}) => {
    const {text, setText, filename, setFilename} = useMdEditor()

    const handleClearClick = () => {
        setText("")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard!'))
    }

    const handleSaveClick = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = href;
        link.download = filename;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    return (
        <header className={clsx(`bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-300 text-sm px-2 py-0.5 columns-3`, className)}>
            <div>
                <div className={`flex flex-row gap-2`}>
                    <button onClick={() => handleClearClick()} className={`dark:hover:text-gray-400 hover:text-gray-500`}>Clear</button>
                    <button onClick={() => handleSaveClick()} className={`dark:hover:text-gray-400 hover:text-gray-500`}>Save</button>
                    <button onClick={() => handleCopyClick()} className={`dark:hover:text-gray-400 hover:text-gray-500`}>Copy</button>
                </div>
            </div>
            <div className={`text-center`}>
                <input className={`bg-transparent text-center`} value={filename} onChange={e => setFilename(e.target.value)} />
            </div>
            <div className={`text-right`}>
                <Link href={'https://scchan.moe'} className={`dark:hover:text-gray-400 hover:text-gray-500`}>scchan.moe</Link>
            </div>
        </header>
    )
}

export default Header