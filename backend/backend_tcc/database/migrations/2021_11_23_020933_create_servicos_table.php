<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicos', function (Blueprint $table) {
            $table->id('Id_service');
            $table->string('Titulo_service');
            $table->string('Descricao_servico');
            $table->string('Categoria');
            $table->string('Subcategoria');
            $table->unsignedBigInteger('id_prestador');
            $table->foreign('id_prestador')->references('id_prestador')->on('users')->onDelete('cascade');
            $table->string('Cidade_Estado');
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
        Schema::dropIfExists('servicos');
    }
}
