<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use App\Models\Ticket;
use App\Models\NewTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PurchaseController extends Controller
{
    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'ticket_id' => 'required|integer',
            'ticket_type' => 'required|string|in:tickets,new_tickets',
        ]);

        $ticketType = $validatedData['ticket_type'];
        $ticketId = $validatedData['ticket_id'];

        $ticket = $ticketType == 'tickets' ? Ticket::find($ticketId) : NewTicket::find($ticketId);

        if (!$ticket) {
            return redirect()->back()->withErrors(['ticket_not_found' => 'Ticket not found']);
        }

        return view('purchase.confirm', compact('ticket', 'ticketType'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'ticket_id' => 'required|integer',
            'ticket_type' => 'required|string|in:tickets,new_tickets',
            'num_travelers' => 'required|integer|min=1',
            'travel_purpose' => 'required|string',
            'has_children' => 'required|boolean',
            'luggage_type' => 'required|string',
        ]);

        $ticketType = $validatedData['ticket_type'];
        $ticketId = $validatedData['ticket_id'];

        $ticket = $ticketType == 'tickets' ? Ticket::find($ticketId) : NewTicket::find($ticketId);

        if (!$ticket) {
            return response()->json(['error' => 'Ticket not found'], 404);
        }

        $purchase = Purchase::create([
            'user_id' => Auth::id(),
            'ticket_id' => $ticketId,
            'ticket_type' => $ticketType,
            'num_travelers' => $validatedData['num_travelers'],
            'travel_purpose' => $validatedData['travel_purpose'],
            'has_children' => $validatedData['has_children'],
            'luggage_type' => $validatedData['luggage_type'],
        ]);

        return response()->json(['message' => 'Purchase confirmed successfully'], 200);
    }
}
