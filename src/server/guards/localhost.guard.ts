import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

const ipAddresses = [
    "127.0.0.1",
    "::ffff:127.0.0.1",
    "::1"
];

@Injectable()
export class LocalhostGuard implements CanActivate 
{
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> 
    {
        const request = context.switchToHttp().getRequest();
        return isRequestFromLocalhost(request);
    }
}

function isRequestFromLocalhost(req: Request)
{
    var ip = req.connection.remoteAddress;
    return ip && ipAddresses.indexOf(ip) !== -1;
}
