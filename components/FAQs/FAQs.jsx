import Image from "next/image";
import questions from "@/data/questions.json";
import { HelpCircle, ChevronDown } from "lucide-react";

const PEOPLE = [
    { initials: "Ma", bg: "bg-rose-100", text: "text-rose-700" },
    { initials: "Lé", bg: "bg-amber-100", text: "text-amber-700" },
    { initials: "An", bg: "bg-emerald-100", text: "text-emerald-700" },
    { initials: "Ca", bg: "bg-sky-100", text: "text-sky-700" },
    { initials: "Hu", bg: "bg-violet-100", text: "text-violet-700" },
    { initials: "So", bg: "bg-orange-100", text: "text-orange-700" },
    { initials: "Pi", bg: "bg-teal-100", text: "text-teal-700" },
    { initials: "Ju", bg: "bg-fuchsia-100", text: "text-fuchsia-700" },
];

export default function FAQs() {
    return (
        <div className="relative overflow-hidden bg-white py-24 sm:py-32">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
                        <HelpCircle size={14} />
                        FAQ
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(2rem,3.5vw,3rem)]">
                        Vous avez des{" "}
                        <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                            questions ?
                        </span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-500">
                        Cliquez sur une question pour voir la réponse.
                    </p>
                </div>

                {/* Conversation */}
                <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
                    {questions.map((question, index) => {
                        const person = PEOPLE[index % PEOPLE.length];
                        return (
                        <details
                            key={question.id}
                            className="group flex flex-col gap-3"
                        >
                            {/* Question — clickable summary */}
                            <summary className="flex cursor-pointer list-none items-end gap-2.5 marker:hidden [&::-webkit-details-marker]:hidden">
                                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${person.bg} font-display text-xs font-bold ${person.text}`}>
                                    {person.initials}
                                </div>
                                <div className="flex max-w-[85%] items-center gap-3 rounded-2xl rounded-bl-sm border border-slate-200 bg-slate-100 px-4 py-2.5 shadow-sm transition-all hover:border-brand-200 hover:bg-slate-50 hover:shadow-md group-open:border-brand-300 group-open:bg-white group-open:shadow-md">
                                    <p className="font-display text-base font-medium text-ink-900">
                                        {question.name}
                                    </p>
                                    <ChevronDown
                                        size={18}
                                        className="shrink-0 text-brand-700 transition-transform duration-300 group-open:rotate-180"
                                    />
                                </div>
                            </summary>

                            {/* Answer — appears on click */}
                            <div className="flex flex-row-reverse items-end gap-2.5">
                                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                                    <Image
                                        src="/images/avatar_dev.AVIF"
                                        alt="Clément Berthier"
                                        fill
                                        sizes="36px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-br from-brand-300 to-brand-500 px-4 py-3 shadow-md shadow-brand-500/20">
                                    <p className="text-sm leading-relaxed text-white sm:text-base">
                                        {question.answer}
                                    </p>
                                </div>
                            </div>
                        </details>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
