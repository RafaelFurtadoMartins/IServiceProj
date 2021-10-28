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
            $table->id('Id_servico');
            $table->string('Titulo_servico');
            $table->string('Descricacao_servico');
            $table->integer('Id_subcategoria')->unsigned();
            $table->foreign('Id_subcategoria')->references('Id_subcategoria')->on('subcategoria');
            $table->integer('Id_prestador')->unsigned();
            $table->foreign('Id_prestador')->references('Id_prestador')->on('prestador');
            $table->boolean('Status_servico');
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
