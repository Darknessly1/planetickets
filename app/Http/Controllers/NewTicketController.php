<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewTicket;
use Inertia\Inertia;

class NewTicketController extends Controller
{
    public function index(Request $request)
    {
        $tickets = NewTicket::paginate(6); // Paginate tickets, 6 per page
        return Inertia::render('header/Tickets', [
            'tickets' => $tickets,
            'auth' => [
                'user' => $request->user()
            ]
        ]);
    }

    public function apiIndex()
    {
        return NewTicket::paginate(6); // API endpoint for tickets
    }
}
