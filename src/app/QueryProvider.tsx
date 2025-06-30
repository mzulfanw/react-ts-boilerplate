import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { QueryProvider } from '@/app/app.dto.ts';

const queryClient = new QueryClient();

export default function QueryProvider({ children }: QueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
