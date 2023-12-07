"use client"

import React, {createContext, useContext, useState} from "react";

interface MdEditorContextType {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    filename: string,
    setFilename: React.Dispatch<React.SetStateAction<string>>
}

const MdEditorContext = createContext<MdEditorContextType | undefined>(undefined);

export const useMdEditor = () => {
    const context = useContext(MdEditorContext)

    if (!context) {
        throw new Error('useMdEditor must be used within a MdEditorProvider');
    }

    return context
}

interface MdEditorProviderProps {
    children: React.ReactNode;
}

export const MdEditorProvider = ({ children }: MdEditorProviderProps) => {
    const [text, setText] = useState<string>("# draft.md\n\nMinimal online Markdown editor.\n\n## Save\n\nYou can copy the draft to clipboard, or save it to your machine.");
    const [filename, setFilename] = useState<string>("draft.md")

    return (
        <MdEditorContext.Provider value={{ text, setText, filename, setFilename }}>
            {children}
        </MdEditorContext.Provider>
    );
};
