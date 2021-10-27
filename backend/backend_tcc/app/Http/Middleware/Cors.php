<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:8100')
            ->header('Access-Control-Allow-Methods', 'true')
            ->header('Access-Control-Allow-Headers', 'true');
        
    }
}
// headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
// headers.append('Access-Control-Allow-Credentials', 'true');