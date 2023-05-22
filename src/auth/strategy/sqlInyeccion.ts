import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SqlInjectionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Obtener los parámetros de la solicitud
    const params = request.params;
    // Definir una expresión regular para detectar caracteres o cadenas sospechosas
    const regex = /[';()=]|(--)/;
    // Iterar sobre los parámetros y comprobar si alguno coincide con la expresión regular
    for (const key in params) {
      if (regex.test(params[key])) {
        // Si se detecta una posible inyección SQL, devolver false para rechazar la solicitud
        return false;
      }
    }
    // Si no se detecta ninguna inyección SQL, devolver true para permitir la solicitud
    return true;
  }
}