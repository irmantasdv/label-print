<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\LabelTemplateCollection;
use App\Http\Controllers\LabelController;
use App\Http\Controllers\TemplateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
//Route::get('/hello', [AuthController::class],'hello');
//Route::resource('/labels', LabelController::class,);
//Route::resource('/templates',TemplateController::class)->middleware('cors');
//Route::resource('/users',UserController::class);
//Route::get('/greeting', function () {
//    return 'Hello World';
//});
Route::get('/templates',[TemplateController::class,'index'])->withoutMiddleware("throttle:api")->middleware("throttle:300:1");
Route::post('/templates',[TemplateController::class, 'store']);
Route::delete('/templates/{template}', [TemplateController::class, 'destroy']);
Route::put('/templates/{template}', [TemplateController::class, 'update']);
Route::get('/templates/{template}', [TemplateController::class, 'show']);
Route::get('/labelssa',[LabelController::class,'index'])->withoutMiddleware("throttle:api")->middleware("throttle:300:1");
Route::post('/labels',[LabelController::class, 'store']);
