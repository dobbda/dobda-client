import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { user } from 'src/api';
import { Pagenation } from 'src/components/Table/Pagenation';
import { Table } from 'src/components/Table/Table';
import { keys, useInfinity } from 'src/hooks';
import getDate from 'src/lib/utils/dateForm';
import { CoinReserv, PayType } from 'src/types';

type Props = {};

export function CoinReservC({}: Props) {
  const { data, nextPage, isLoading } = useInfinity<CoinReserv>({
    queryKey: keys.coinReserv,
    fetch: (page: number) => user.coinReserv(page),
  });

  const [render, setRender] = useState([]);

  useEffect(() => {
    if (data?.pageNum == 1) {
      setRender(data.result);
    }
  }, [data]);

  useEffect(() => {
    if (data?.pageNum == 1) {
      setRender(data.result);
    }
  }, [data]);

  const getLink = (props: any): JSX.Element | undefined => {
    if (props.renderValue() == 'question') {
      return (
        <Link href={'/questions/' + props.cell.row.original.id}>
          <a>{props.renderValue()}</a>
        </Link>
      );
    } else if (props.renderValue() == 'sourcing') {
      return (
        <Link href={'/custom-project/requests/' + props.cell.row.original.id}>
          <a>{props.renderValue()}</a>
        </Link>
      );
    }
  };

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      size: 40,
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      size: 70,
      cell: (props) => getLink(props),
      enableSorting: false,
    }),
    columnHelper.accessor('coin', {
      header: 'Coin',
      size: 80,
    }),
    columnHelper.accessor('createdAt', {
      header: '거래날짜',
      size: 120,
      cell: ({ renderValue }) => getDate(renderValue()),
    }),
  ];
  return (
    <>
      <Table columns={columns} data={render} />
      <Pagenation {...data} render={render} setRender={setRender} nextPage={nextPage} row={10} />
    </>
  );
}
