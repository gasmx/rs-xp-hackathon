<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstudanteTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estudante', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('nome');
            $table->string('sobrenome');
            $table->date('data_nascimento');
            $table->string('cpf', 11);
            $table->string('cep', 8);
            $table->string('email');
            $table->string('telefone_fixo')->nullable();
            $table->string('telefone_celular');
            $table->string('cidade');
            $table->string('estado');
            $table->string('endereco');
            $table->string('endereco_numero');
            $table->dateTime('data_cadastro')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->string('senha', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('estudante');
    }
}
