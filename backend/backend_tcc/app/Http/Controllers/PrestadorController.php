<?php

namespace App\Http\Controllers;

use App\Models\prestador;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class PrestadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Return prestador::all();
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
        $prestador = new prestador();
        $prestador->nome = $request->nome;
        $prestador->email = $request->email;
        $prestador->cpf = $request->cpf;
        $prestador->telefone =$request->telefone;
        $prestador->senha = $request->senha;
        $prestador->save();
        return $prestador;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\prestador  $prestador
     * @return \Illuminate\Http\Response
     */
    public function show(prestador $prestador)
    {
        return $prestador;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\prestador  $prestador
     * @return \Illuminate\Http\Response
     */
    public function edit(prestador $prestador)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\prestador  $prestador
     * @return \Illuminate\Http\Response
     * 
     * 
     * 
     */
    public function update(Request $request, prestador $prestador)
    {
        $prestador->nome = $request->nome;
        $prestador->email = $request->email;
        $prestador->cpf = $request->cpf;
        $prestador->telefone =$request->telefone;
        $prestador->senha = $request->senha;
        $prestador->save();
        return $prestador;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\prestador  $prestador
     * @return \Illuminate\Http\Response
     */
    public function destroy(prestador $prestador)
    {
        $prestador->delete();
    }
}
