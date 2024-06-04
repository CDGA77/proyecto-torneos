import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKey = 'your-secret-api-key';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (!apiKey) {
      throw new UnauthorizedException('API key is missing');
    }

    if (apiKey !== this.validApiKey) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}
