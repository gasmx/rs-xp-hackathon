<?php

namespace App\Http\Controllers;

use Request;
use Exception;
use App\Models\Empresa;
use App\Models\Estudante;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login()
    {
        $email = Request::input('email');
        $senha = Request::input('senha');
        $tipoDeLogin = Request::input('tipo_login');

        try {
            switch ($tipoDeLogin) {
                case 'empresa':
                    $usuario = Empresa::autenticar($email, $senha);
                    break;
    
                case 'estudante':
                    $usuario = Estudante::autenticar($email, $senha);
                    break;
    
                default:
                    throw new Exception('Tipo de login não configurado');
            }

            $response = ['message' => 'Login efetuado com sucesso.', 'code' => 200, 'usuario' => $usuario];
        } catch (Exception $e) {
            $response = ['message' => $e->getMessage(), 'code' => 401];
        }

        return response()->json($response, $response['code']);
    }
}
