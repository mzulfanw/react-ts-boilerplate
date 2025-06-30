import { useQuery } from '@tanstack/react-query';
import { container } from 'tsyringe';
import { ExampleAPI } from '@/features/example/api/example.api.ts';

export default function useGetExample() {
  const exampleApi = container.resolve(ExampleAPI);

  return useQuery({
    queryKey: ['posts'],
    queryFn: () => exampleApi.getPosts(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
