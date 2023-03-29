import { Module } from '@nestjs/common';
import { SupabaseStrategy } from './supabase.strategy';
import { SupabaseGuard } from './supabase.guard';
import { SupabaseService } from './supabase.service';

@Module({
  providers: [SupabaseService, SupabaseStrategy, SupabaseGuard],
  exports: [SupabaseService],
})
export class SupabaseModule {}
