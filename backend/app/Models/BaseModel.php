<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as EloquentModel;

class BaseModel extends EloquentModel
{
    // Permite o  mass assignment
    protected $guarded = [];
    public $timestamps = false;
}
