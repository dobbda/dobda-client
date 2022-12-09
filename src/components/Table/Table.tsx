import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  columns: ColumnDef<any, any>[];
  data: any[];
  manualPagination?: boolean;
}
export const Table = ({ columns, data, manualPagination = false }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContainer>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.getSize(),
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  {
                    {
                      asc: <FaSortUp />,
                      desc: <FaSortDown />,
                    }[header.column.getIsSorted() || null]
                  }
                  {header.column.getCanSort() && !header.column.getIsSorted() ? <FaSort /> : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
export default Table;

const TableContainer = styled.div`
  margin: 10px 0;

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  table tr:nth-child(even) {
    background-color: #f7f7f7;
  }
  table tr:hover {
    transition: all 0.2s;
    background-color: #eeeeee;
  }
  table th {
    text-align: left;
    background-color: #04aa6d;
    color: white;
    user-select: none;
    font-weight: bold;
  }
  tr {
    height: 40px !important;
  }
  a {
    color: blue !important;
    :hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;
