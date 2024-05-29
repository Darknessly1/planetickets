<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewTicket;
use Inertia\Inertia;

class NewTicketController extends Controller
{
    public function index(Request $request)
    {
        // Get tickets with pagination
        $tickets = NewTicket::all(); // Adjust the number per page as needed
        return response()->json($tickets);
    }
}
