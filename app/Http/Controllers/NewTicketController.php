<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewTicket;

class NewTicketController extends Controller
{
    public function index(Request $request)
    {
        // Retrieve search parameters from the request
        $fromCity = $request->query('fromCity');
        $toCity = $request->query('toCity');
        $date = $request->query('date');

        // Build the query based on the search parameters
        $query = NewTicket::query();

        if ($fromCity) {
            $query->where('departure_city', 'like', "%$fromCity%");
        }

        if ($toCity) {
            $query->where('arrival_city', 'like', "%$toCity%");
        }

        if ($date) {
            $query->where('date', $date);
        }

        $tickets = $query->get();

        return response()->json($tickets);
    }
}
