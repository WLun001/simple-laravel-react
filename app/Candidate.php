<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    protected $fillable = ['name', 'party_id'];

    public function party()
    {
        return $this->belongsTo(Party::class);
    }
}
