<?php

namespace App\Http\Controllers;

use Request;
use App\Models\Estudante;
use App\Http\Controllers\Controller;

class EstudanteController extends Controller
{
    public function gravar()
    {
        $params = Request::all();

        $params['senha'] = md5($params['senha']);

        return Estudante::create($params);
    }
}
