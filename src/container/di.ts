import { container } from 'tsyringe';
import { axiosInstance } from '@/lib/axios.ts';
import { ExampleAPI } from '@/features/example/api/example.api.ts';

// Registering the axios instance with the DI container
container.register('axios', { useValue: axiosInstance });
container.registerSingleton(ExampleAPI);
