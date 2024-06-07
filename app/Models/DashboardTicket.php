<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DashboardTicket extends Model
{
    use HasFactory;

    protected $fillable = ['ticket_id', 'new_ticket_id'];

    public function ticket()
    {
        return $this->belongsTo(Ticket::class, 'ticket_id', 'TicketID');
    }

    public function newTicket()
    {
        return $this->belongsTo(NewTicket::class, 'ticket_id');
    }

    public function tickets()
    {
        return $this->belongsTo(Ticket::class, 'TicketID');
    }
}
