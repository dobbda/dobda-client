import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { user } from 'src/api';
import { Skeleton } from 'src/components/Skeleton';
import { keys, useInfinity } from 'src/hooks';
import getDate from 'src/lib/utils/dateForm';
import { CoinHistory, CoinReserv, PayType } from 'src/interface';
import { Pagenation } from '../../Table/Pagenation';
import Table from '../../Table/Table';

type Props = {};

export function CoinHistoryC({}: Props) {
  const { data, nextPage, isLoading } = useInfinity<CoinHistory>({
    queryKey: keys.coinHistory,
    fetch: user.coinHistory,
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

  const getLink = (props: any): JSX.Element | undefined | string => {
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
    } else {
      return props.renderValue();
    }
  };

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      size: 40,
      enableSorting: false,
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      size: 70,
      cell: (props) => getLink(props),
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
