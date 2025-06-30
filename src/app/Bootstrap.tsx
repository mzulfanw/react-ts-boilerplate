import QueryProvider from '@/app/QueryProvider.tsx';
import Routers from '@/routers';
import 'reflect-metadata';
import '@/container/di.ts';

export default function Bootstrap() {
  return (
    <QueryProvider>
      <Routers />
    </QueryProvider>
  );
}
