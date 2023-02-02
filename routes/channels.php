<?php

use Illuminate\Support\Facades\Broadcast;
use App\Http\Resources\LabelTemplateResource;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Route::get('/templates', function () {
    return LabelTemplateResource::collection(User::all());
});
