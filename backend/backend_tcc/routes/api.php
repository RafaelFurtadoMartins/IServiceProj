<?php

use App\Http\Controllers\ServicoController;
use App\Models\servico;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::get('login', 'Auth\AuthController@login')->name('login');
    Route::get('register', 'Auth\AuthController@register');
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('user', 'Auth\AuthController@user');
    }); 
});
    Route::get('servicos', [ServicoController::class,'index']);


    // Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    //     return $request->user();
    // });
    
    // Route::apiResource('produto', ProdutosController::class);