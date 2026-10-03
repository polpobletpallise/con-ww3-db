"use client"

import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { features, type DataTableFeatures } from "./data-table-features"
import { Button } from "../ui/button"
import type { LucideIcon } from "lucide-react"

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
  pagination?: boolean
  className?: string
  pageSize?: number
}

export function DataTable<TData extends RowData>({
  columns,
  data,
  pagination = false,
  className,
  pageSize = 10
}: DataTableProps<TData>) {
  const table = useTable({
    features,
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: pagination ? pageSize : data.length || 1000,
        pageIndex: 0
      }
    }
  })

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    const value = cell.getValue()

                    if (Array.isArray(value)) return (
                      <TableCell key={cell.id}>
                        <ul className="flex flex-col gap-1">
                          {value.map((v, vidx) => (
                            <li key={vidx}>{v}</li>
                          ))}
                        </ul>
                      </TableCell>
                    )

                    if (cell.column.id === "icon" && value != null) {
                      const Icon = value as LucideIcon
                      const original = cell.row.original
                      const iconStyles =
                        typeof original === "object" &&
                          original !== null &&
                          "iconStyles" in original &&
                          typeof original.iconStyles === "string"
                          ? original.iconStyles
                          : undefined

                      return (
                        <TableCell key={cell.id}>
                          <Icon className={iconStyles} />
                        </TableCell>
                      )
                    }

                    return (
                      <TableCell key={cell.id}>
                        <table.FlexRender cell={cell} />
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      {pagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}