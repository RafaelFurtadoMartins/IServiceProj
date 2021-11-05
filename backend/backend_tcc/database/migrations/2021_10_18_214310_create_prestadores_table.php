<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrestadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prestadores', function (Blueprint $table) {
            $table->id('Id_prestador');
            $table->string('Nome_prestador');
            $table->string('Email_prestador');
            $table->string('Senha_prestador');
            $table->integer('telefone');
            $table->binary('curriculo');
            $table->integer('CPF_prestador');
            $table->boolean('Status_prestador');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prestadores');
    }
}
