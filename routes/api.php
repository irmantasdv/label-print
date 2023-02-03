<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\LabelTemplateCollection;
use App\Http\Controllers\LabelController;
use App\Models\LabelTemplate;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/labels', LabelController::class,);
Route::resource('/templates',TemplateController::class)->middleware('cors');
//Route::get('/templates', function () {
//    return new LabelTemplateCollection(LabelTemplate::all());
//});
