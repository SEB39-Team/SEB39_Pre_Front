import { getPosts } from 'api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const useBoardQuery = () => {
  const [page, setPage] = useState({ data: [], pageInfo: null });
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);
  const { pathname } = useLocation();
  const limit = 10;

  const refetch = async () => {
    const res = await getPosts(pageNum, limit);
    setPage({ data: res.data, pageInfo: res.pageInfo });
    setTotal(res.pageInfo.totalElements);
  };

  useEffect(() => {
    refetch();
  }, [pageNum, pathname]);

  return { page, pageNum, setPageNum, limit, total };
};
