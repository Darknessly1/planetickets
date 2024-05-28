<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\DashboardTicket;
use App\Models\Ticket;

class DashboardTicketController extends Controller {

    public function getAllTickets() {
        $dashboardTickets  = DashboardTicket::all();
        return response()->json($dashboardTickets );
    }

}
