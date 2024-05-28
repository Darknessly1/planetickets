<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class DestinationController extends Controller
{
    public function index()
    {
        $response = Http::get('https://restcountries.com/v3.1/all');
        $countries = $response->json();

        $cities = [];

        foreach ($countries as $country) {
            if (isset($country['capital'])) {
                $cities[] = $country['capital'][0];
            }
        }

        return Inertia::render('header/Cities', ['cities' => $cities]);
    }
}
