<?php

namespace App\Http\Controllers;

use Request;
use App\Models\Empresa;
use App\Http\Controllers\Controller;

class EmpresaController extends Controller
{
    public function gravar()
    {
        $params = Request::all();

        $params['senha'] = md5($params['senha']);

        return Empresa::create($params);
    }
}
