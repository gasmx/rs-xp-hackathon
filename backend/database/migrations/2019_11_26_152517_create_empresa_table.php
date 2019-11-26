<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpresaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresa', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('nome_fantasia');
            $table->string('cnpj');
            $table->string('cep', 8);
            $table->string('email');
            $table->string('telefone_fixo');
            $table->string('telefone_celular')->nullable();
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
        Schema::drop('empresa');
    }
}
