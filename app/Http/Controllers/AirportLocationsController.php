<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use Illuminate\Http\Request;

class AirportLocationsController extends Controller
{
    public function index()
    {
        $airports = Airport::all();
        return response()->json($airports);
    }
}
