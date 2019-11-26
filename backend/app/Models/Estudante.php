<?php

namespace App\Models;

class Estudante extends BaseModel
{
    protected $table = 'estudante';
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
