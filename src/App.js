import React from "react";
import { CadastraSaldoInicial } from "./components/CadastraSaldoInicial";
import { CadastraTransacao } from "./components/CadastraTransacao";
import { GuardaPorquinho } from "./components/GuardaPorquinho";
import { QuebrarPorquinho } from "./components/QuebrarPorquinho";
import { TransferirPorquinho } from "./components/TransferirPorquinho";
import { VerSaldoTotal } from "./components/VerSaldoTotal";
import { VerPorquinho } from "./components/VerPorquinho";
import { CadastraUsuario } from "./components/CadastraUsuario";
import { CadastraBanco } from "./components/CadastraBanco";
import { AbrirConta } from "./components/AbrirConta";

function MinhaCarteira() {

  return (
    <>
      <CadastraUsuario />
      <CadastraBanco />
      <AbrirConta />
      <CadastraSaldoInicial />
      <CadastraTransacao />
      <GuardaPorquinho />
      <TransferirPorquinho />
      <VerPorquinho />
      <QuebrarPorquinho />
      <VerSaldoTotal />
    </>
  );
}

export default MinhaCarteira;