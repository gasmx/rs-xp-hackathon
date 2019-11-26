<?php

namespace App\Models;

class Empresa extends BaseModel
{
    protected $table = 'empresa';
    protected $primaryKey = 'id';

    public static function autenticar($email, $senha)
    {
        return
            (new self)
                ->where('email', $email)
                ->where('senha', md5($senha))
                ->firstOrFail();
    }
}
