import useGetExample from '@/features/example/usecases/useGetExample.ts';

export default function ExamplePageView() {
  const { data, isLoading, isError } = useGetExample();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error loading data</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Example Page</h1>
      <p className="mt-4 text-lg">This is an example page.</p>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
