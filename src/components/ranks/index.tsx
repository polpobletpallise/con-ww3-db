'use client'

import { RankInterface, RANKS, RANKS_UNLOCK } from "@/data/ranks"
import { useEffect, useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Search } from "lucide-react"
import { DataTable } from "../custom-ui/DataTable"
import { createColumnHelper } from "@tanstack/react-table"
import { DataTableFeatures } from "../custom-ui/data-table-features"

const columnHelper = createColumnHelper<DataTableFeatures, RankInterface>()

const columns_unlock = columnHelper.columns([
    columnHelper.accessor("level", {
        header: "Level",
    }),
    columnHelper.accessor("name", {
        header: "Rank Name",
    }),
    columnHelper.accessor("unlocks", {
        header: "Unlocks",
    }),
])

const columns_rank = columnHelper.columns([
    columnHelper.accessor("level", {
        header: "Level Range",
    }),
    columnHelper.accessor("icon", {
        header: "Icon",
    }),
    columnHelper.accessor("name", {
        header: "Rank Name",
    }),
])

export default function Ranks() {
    const [searchParam, setSearchParam] = useState("")
    const [filteredRanks, setFilteredRanks] = useState<RankInterface[]>([])

    useEffect(() => {
        var filtered: RankInterface[] = RANKS_UNLOCK

        if (searchParam) filtered = filtered.filter(r =>
            r.level.toString().includes(searchParam.toLowerCase())
            || r.name.toLowerCase().includes(searchParam.toLowerCase())
            || r.unlocks?.some(u => u.toLowerCase().includes(searchParam.toLowerCase()))
        )

        setFilteredRanks(filtered)
    }, [searchParam])

    return (
        <div>
            <header>
                <h1>Ranks</h1>
            </header>
            <main className="max-w-7xl w-full mx-auto p-10 flex flex-col gap-5">
                <div>
                    <InputGroup>
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupInput type="search" placeholder="Search..." onInput={(e) => setSearchParam((e.target as HTMLInputElement).value)} />
                    </InputGroup>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <DataTable columns={columns_unlock} data={filteredRanks} className="col-span-2" />
                    <aside>
                        <DataTable columns={columns_rank} data={RANKS} />
                    </aside>
                </div>
            </main>
        </div>
    )
}