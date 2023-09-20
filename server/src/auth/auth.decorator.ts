import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
/**
 * Make a route accessible without valid access token
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
