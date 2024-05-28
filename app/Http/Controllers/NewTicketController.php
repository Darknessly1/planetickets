<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewTicket;
use Inertia\Inertia;

class NewTicketController extends Controller
{
    // public function index()
    // {
    //     $tickets = NewTicket::paginate(6);
    //     return Inertia::render('Tickets/Index', ['tickets' => $tickets]);
    // }

    public function apiIndex()
    {
        return NewTicket::paginate(6); // Paginate tickets, 6 per page
    }
}
