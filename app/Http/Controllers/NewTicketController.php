<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewTicket;
use Inertia\Inertia;

class NewTicketController extends Controller
{
    public function index(Request $request)
    {
        $query = NewTicket::query();

        if ($request->has('departure_airport')) {
            $query->where('departure_airport_name', 'LIKE', "%{$request->departure_airport}%");
        }

        if ($request->has('arrival_airport')) {
            $query->where('arrival_airport_name', 'LIKE', "%{$request->arrival_airport}%");
        }

        if ($request->has('date')) {
            $query->where('date', 'LIKE', "%{$request->date}%");
        }

        if ($request->has('airline')) {
            $query->where('airline_name', 'LIKE', "%{$request->airline}%");
        }

        $tickets = $query->paginate(4); // Adjust pagination as needed

        return Inertia::render('header/Tickets', [
            'tickets' => $tickets,
            'auth' => [
                'user' => $request->user()
            ]
        ]);
    }
}
