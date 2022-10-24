import Item from 'antd/lib/list/Item';
import Table, { ColumnsType, TableProps } from 'antd/lib/table';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { user } from 'src/api';
import { keys, useInfinity } from 'src/hooks';
import getDate from 'src/lib/utils/dateForm';
import { CoinHistory, CoinReserv, PayType } from 'src/types';
import styled from 'styled-components';

type Props = {};

export function CoinReservC({}: Props) {
  const { data, nextPage } = useInfinity<CoinReserv>({
    queryKey: keys.coinReserv,
    fetch: (page: number) => user.coinReserv(page),
  });
  const columns: ColumnsType<CoinReserv> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '유형',
      dataIndex: 'type',
      key: 'id',
      render: (text: keyof typeof PayType, record: CoinReserv) => {
        if (text === 'question') {
          return (
            <A>
              {' '}
              <Link href={`/questions/` + record.questionId}>{PayType[text]}</Link>
            </A>
          );
        } else if (text === 'sourcing') {
          return (
            <A>
              <Link href={`/custom-project/requests/` + record.outSourcingId} css={{ color: 'red' }}>
                {PayType[text]}
              </Link>
            </A>
          );
        } else {
          return <span>{PayType[text]}</span>;
        }
      },
      filters: [
        {
          text: '질문',
          value: 'question',
        },
        {
          text: '외주',
          value: 'sourcing',
        },
        {
          text: '출금요청',
          value: 'withdraw',
        },
      ],
      // filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: any, record) => record.type.startsWith(value),
    },
    {
      title: '코인',
      dataIndex: 'coin',
      sorter: (a, b) => a.coin - b.coin,
      render: (coin: number) => <span>{coin.toLocaleString()}</span>,
    },

    {
      title: '날짜',
      dataIndex: 'createdAt',
      render: (date) => <span>{getDate(date)}</span>,
    },
  ];
  const [total, setTotal] = useState(data?.result.length);

  const onChange: TableProps<CoinReserv>['onChange'] = useCallback(
    async (pagination, filters, sorter, extra) => {
      if (pagination.current > data?.pageNum) {
        await nextPage();
      }
    },
    [data],
  );

  useEffect(() => {
    if (data?.result.length + 1 < data?.total) {
      setTotal(data?.result.length + 10);
    } else {
      setTotal(data?.total);
    }
  }, [setTotal, data]);

  return (
    <Table
      columns={columns}
      dataSource={data?.result}
      onChange={onChange}
      rowKey={(item) => item.id}
      pagination={{ pageSize: 10, total: total, hideOnSinglePage: true }}
    />
  );
}

const A = styled.div`
  color: blue;
  text-decoration: underline;
  text-underline-offset: 3px;
`;
