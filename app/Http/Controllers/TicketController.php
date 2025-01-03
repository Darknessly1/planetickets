<?php

namespace App\Http\Controllers;

use App\Models\DashboardTicket;
use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{

    public function index(Request $request)
    {
        $query = Ticket::query();

        if ($request->filled('departureAirport')) {
            $query->where('DepartureAirport', 'like', '%' . $request->departureAirport . '%');
        }

        if ($request->filled('arrivalAirport')) {
            $query->where('ArrivalAirport', 'like', '%' . $request->arrivalAirport . '%');
        }

        if ($request->filled('departureDate')) {
            $query->whereDate('DepartureDateTime', $request->departureDate);
        }

        if ($request->filled('arrivalDate')) {
            $query->whereDate('ArrivalDateTime', $request->arrivalDate);
        }

        $tickets = $query->get();
        return response()->json($tickets);
    }




    public function getDashboardTickets()
    {
        $tickets = DashboardTicket::with('ticket')->get();

        return response()->json($tickets);
    }

    public function addToDashboard(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:tickets,TicketID',
        ]);

        $dashboardTicket = new DashboardTicket();
        $dashboardTicket->ticket_id = $request->ticket_id;
        $dashboardTicket->save();

        return response()->json(['message' => 'Ticket added to dashboard successfully'], 200);
    }
    public function show($id)
    {
        $ticket = Ticket::find($id);
        if (!$ticket) {
            return response()->json(['message' => 'Ticket not found'], 404);
        }
        return response()->json($ticket);
    }
}
