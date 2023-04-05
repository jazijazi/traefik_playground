
## Traefik Architecture


* Providers (file, docker, k8)
* static/dynamic configuration
* Entrypoin(Frontend) (listen to a port)
* service (Backend)
* Routers/rules (link entrypoint to a service)
* Middlewares(compress , auth)


>http have manay routers with certain names (container name)
    each router must have rule 
    each router link between entrypoint and a service

> for L7 use http & L4 use tcp

### Example(L7)
```yaml
- traefik.http.routers.<route name>.rule=Host(`localhost`) && Path(`/admin`)
- traefik.http.routers.<route name>.service=<service name for this route>
- traefik.http.services.<service name>.loadbalancer.server.port=<PORT> 
```