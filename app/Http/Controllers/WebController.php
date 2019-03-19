<?php

namespace App\Http\Controllers;


class WebController extends Controller
{
    public function candidates()
    {
        return view('candidates.index');
    }
}
