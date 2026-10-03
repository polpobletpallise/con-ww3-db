'use client'

import getInfantry from "@/data/infantry";
import type { CombatProperties, TerrainInformation } from "@/data/units";
import { ChevronDown, ChevronLeft } from "lucide-react";

const combatColumns = ["attack", "defence", "attack_range", "radar_range"] as const satisfies readonly (keyof CombatProperties)[];
const terrainColumns = ["hp", "speed_val", "attack_mod", "defence_mod", "sight_range"] as const satisfies readonly (keyof TerrainInformation[keyof TerrainInformation])[];

export default function Units() {

    function formatString(text: string) {
        return text.replaceAll('_', ' ').toLowerCase()
    }

    return (
        <div>
            <section className="p-10 flex flex-col gap-10">
                {getInfantry().map((inf, idx: number) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col gap-2"
                        >
                            <div className="mb-2">
                                <div className="flex items-center gap-2">
                                    <h2 className="capitalize text-2xl font-semibold tracking-wider">{formatString(inf.id)}</h2>
                                    <span className="text-xs text-muted-foreground uppercase">{inf.type}</span>
                                </div>
                                <p className="italic text-sm text-muted-foreground truncate">{inf.description}</p>
                            </div>

                            {inf.data.map((i, subidx: number) => {
                                const combatValues = combatColumns.map(
                                    (column) => new Map(Object.entries(i.combat[column] ?? {}))
                                );
                                const targetTypes = [...new Set(
                                    combatValues.flatMap((values) => [...values.keys()])
                                )];

                                const terrainValues = Object.entries(i.terrain);

                                return (
                                    <details
                                        key={subidx}
                                        className="border rounded-lg overflow-hidden flex flex-col"
                                    >
                                        {/* BASIC INFO */}
                                        <summary
                                            className="p-4 list-none cursor-pointer hover:bg-accent transition flex items-center justify-between"
                                        >
                                            <h3 className="font-medium tracking-wide text-xl flex items-center gap-1">{i.name} <span className="text-sm text-muted-foreground">&mdash; lvl. {i.level}</span></h3>
                                            <ChevronDown />
                                        </summary>

                                        {/* CONTENT */}
                                        <div className="grid xl:grid-cols-2 gap-3 p-3 overflow-x-auto text-xs md:text-sm">

                                            {/* COMBAT */}
                                            <table className="table [&_td,&_th]:border [&_td,&_th]:p-3 h-fit">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" />
                                                        {combatColumns.map((column) => (
                                                            <th
                                                                key={column}
                                                                className="uppercase"
                                                                scope="col"
                                                            >
                                                                {formatString(column)}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {targetTypes.map((targetType) => (
                                                        <tr key={targetType}>
                                                            <th className="uppercase text-left" scope="row">
                                                                {formatString(targetType)}
                                                            </th>
                                                            {combatValues.map((values, valueIdx) => (
                                                                <td key={combatColumns[valueIdx]} className="text-right">
                                                                    {values.get(targetType) ?? ""}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            {/* TERRAIN */}
                                            <table className="table [&_td,&_th]:border [&_td,&_th]:p-3 h-fit">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" />
                                                        {terrainColumns.map((column) => (
                                                            <th
                                                                key={column}
                                                                className="uppercase"
                                                                scope="col"
                                                            >
                                                                {formatString(column)}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {terrainValues.map(([terrainType, values]) => (
                                                        <tr key={terrainType}>
                                                            <th className="uppercase text-left" scope="row">
                                                                {formatString(terrainType)}
                                                            </th>
                                                            {terrainColumns.map((column) => {

                                                                if ((column == "attack_mod" || column == "defence_mod") && values[column]) {
                                                                    const value = values[column]
                                                                    const isNegative = value < 0

                                                                    return (
                                                                        <td key={column} className={`text-right ${isNegative ? "text-red-500" : "text-emerald-500"}`}>
                                                                            {(!isNegative && "+") + value + "%"}
                                                                        </td>
                                                                    )
                                                                }

                                                                return (
                                                                    <td key={column} className="text-right">
                                                                        {values[column] ?? ""}
                                                                    </td>
                                                                )
                                                            })}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </details>
                                )
                            })}
                        </div>
                    )
                })}
            </section>
        </div>
    )
}