<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ClientsController extends Controller
{
  public function index()
  {
    $clients = Client::select(
      'id',
      'name',
      'email',
      'cpf',
      'country',
      'created_at',
      'status',
    )->get();


    return Inertia::render('Dashboard', ["clients" => $clients]);
  }

  public function create(Request $request){
    $client = "";
    if($request["id"]){
      $client = Client::find($request["id"])->first();
    }

    return Inertia::render('newClientView', ["client" => $client]);
  }

  public function destroy(Request $request){
    $client = Client::find($request["id"]);
    $client->delete();
  }

  public function createOrUpdate(Request $request){
    $formData = $request->formData;

    Client::updateOrCreate([
      "id" => $formData["id"]
    ],
    [
      "name"    => $formData["name"],
      "cpf"     => $formData["cpf"],
      "email"   => $formData["email"],
      "country" => $formData["country"],
      "status"  => $formData["status"],
    ]
    );

  }
}
