import {
  ExecutionContext,
  Injectable,
  CanActivate,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const [req] = context.getArgs();
    const userRoles = this.getUserRoles(req);
    const requiredRoles =
      this.reflector.get('roles', context.getHandler()) || [];

    let hasAccess = false;

    requiredRoles.forEach((r) => {
      if (userRoles.includes(r)) {
        hasAccess = true;
      }
    });

    if (!requiredRoles.length || hasAccess) {
      return true;
    }

    throw new ForbiddenException('Insufficient permissions');
  }

  private getUserRoles(req: any) {
    return req?.user?.userRoles ?? [];
  }
}
