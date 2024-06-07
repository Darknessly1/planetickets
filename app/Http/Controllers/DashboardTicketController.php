<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\DashboardTicket;

class DashboardTicketController extends Controller
{
    public function getAllTickets()
    {
        $dashboardTickets = DashboardTicket::with('ticket')->get();
        return response()->json($dashboardTickets);
    }

    public function addTicketToDashboard(Request $request)
    {
        $dashboardTicket = new DashboardTicket();
        $dashboardTicket->user_id = Auth::id();
        $dashboardTicket->ticket_id = $request->ticket_id;
        $dashboardTicket->save();

        return response()->json(['message' => 'Ticket added to dashboard successfully']);
    }

    public function deleteTicketFromDashboard($id)
    {
        $dashboardTicket = DashboardTicket::find($id);
        if ($dashboardTicket) {
            $dashboardTicket->delete();
            return response()->json(['message' => 'Ticket deleted from dashboard successfully']);
        }

        return response()->json(['message' => 'Ticket not found'], 404);
    }
}
