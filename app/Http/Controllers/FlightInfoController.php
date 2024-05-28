<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FlightInfoController extends Controller
{
    public function index()
    {
        $response = Http::withHeaders([
            'X-RapidAPI-Key' => '9518a924e8mshb89776f032785f1p110418jsn34d52383a486',
            'X-RapidAPI-Host' => 'sky-scanner3.p.rapidapi.com'
        ])->get('https://sky-scanner3.p.rapidapi.com/get-config');

        return $response->json();
    }
}