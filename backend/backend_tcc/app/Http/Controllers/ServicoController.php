<?php

namespace App\Http\Controllers;

use App\Models\servico;
use Illuminate\Http\Request;

class ServicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return servico::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $servico = new servico();
        $servico->Titulo_servico = $request->Titulo_servico;
        $servico->Descricao_servico = $request->Descricao_servico;
        $servico->Categoria = $request->Categoria;
        $servico->Subcategoria = $request->Subcategoria;
        $servico->Prestador = $request->Prestador;
        $servico->Cidade_estado = $request->Cidade_estado;
        $servico->save();
        return $servico;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function show(servico $servico)
    {
        return $servico;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function edit(servico $servico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, servico $servico)
    {
        $servico->Titulo_servico = $request->Titulo_servico;
        $servico->Descricao_servico = $request->Descricao_servico;
        $servico->Categoria = $request->Categoria;
        $servico->Subcategoria = $request->Subcategoria;
        $servico->Prestador = $request->Prestador;// não terminei 
        $servico->Cidade_estado = $request->Cidade_estado;
        $servico->save();
        return $servico;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function destroy(servico $servico)
    {
        $servico->delete();
    }
}
