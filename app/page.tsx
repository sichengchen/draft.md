"use client"

import Preview from "@/app/_components/preview";
import Edit from "@/app/_components/edit";
import {MdEditorProvider} from "@/app/_components/md-editor";
import Header from "@/app/_components/header";

export default function Home() {
    return (
        <main className={`h-screen`}>
            <MdEditorProvider>
                <Header className={`fixed top-0 w-full`} />
                <div
                    className={`h-full w-full container mx-auto grid grid-cols-2 gap-1 md:gap-2 lg:gap-4`}
                >
                    <Edit />
                    <Preview />
                </div>
            </MdEditorProvider>
        </main>
    )
}
