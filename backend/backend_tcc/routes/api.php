<?php

use App\Http\Controllers\ServicoController;
use App\Models\servico;
use Illuminate\Support\Facades\Route;

// Route::group([
//     'prefix' => 'auth'
// ], function () {
//     Route::post('login', 'Auth\AuthController@login')->name('login');
//     Route::post('register', 'Auth\AuthController@register');
//     Route::group([
//       'middleware' => 'auth:api'
//     ], function() {
//         Route::get('user', 'Auth\AuthController@user');
//     }); 
// });
//     Route::get('servicos', [ServicoController::class,'index']);


Route::get('servico', ServicoController::class,'ServicoController@index',);
Route::post('servico', ServicoController::class,'ServicoController@store');
Route::post('user', UserController::class, 'UserController@store');

Route::resource('user', 'UserController',
                array('except' => array('create', 'store', 'update', 'destroy')));
                
Route::resource('user', 'UserController');
