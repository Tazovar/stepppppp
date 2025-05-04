import { CanActivateFn } from '@angular/router';

export const activeRouteGuard: CanActivateFn = (route, state) => {
  return false;
};
