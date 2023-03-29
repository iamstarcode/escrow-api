import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from './common/supabase';

@Injectable()
export class AppService {
  constructor(private readonly supabase: SupabaseService) {}

  async getHello(): Promise<any> {
    const supabaseClient = await this.supabase.getClient();

    const { data, error } = await supabaseClient
      .from('product')
      .select()
      .single();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
