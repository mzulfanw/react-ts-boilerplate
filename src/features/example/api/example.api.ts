import { injectable, inject } from 'tsyringe';
import type { AxiosInstance } from 'axios';
import type { Posts } from '@/features/example/dto/example.dto.ts';

@injectable()
export class ExampleAPI {
  constructor(@inject('axios') private axios: AxiosInstance) {}

  async getPosts(): Promise<Posts> {
    const { data } = await this.axios.get<Posts>('/posts');
    return data;
  }
}
