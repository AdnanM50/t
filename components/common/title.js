"use client";
import { useI18n } from "../../app/providers/i18n";

const PageTitle = ({ title }) => {
    const i18n = useI18n()

    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-gray-700 font-semibold">{i18n.t(title)}</h1>
        </div>
    )
}

export default PageTitle