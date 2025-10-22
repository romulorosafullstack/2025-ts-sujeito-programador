"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=======================================");
        console.log("Conta Pessoa Fisica criada com sucesso!\n");
        console.log(`Nome: ${dados.nome}`);
        console.log(`Número da Conta: ${dados.numero}`);
        console.log(`Email: ${dados.email}`);
        console.log("=======================================\n");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=======================================");
        console.log("Conta Pessoa Jurídica criada com sucesso!\n");
        console.log(`Nome: ${dados.nome}`);
        console.log(`Número da Conta: ${dados.numero}`);
        console.log(`Email: ${dados.email}`);
        console.log("=======================================\n");
        return true;
    }
}
const pessoaFisica1 = new PessoaFisica();
const pessoaFisica2 = new PessoaFisica();
const pessoaJuridica1 = new PessoaJuridica();
const pessoaJuridica2 = new PessoaJuridica();
pessoaFisica1.abrirConta({
    nome: "Romulo",
    email: "romulo@teste.com",
    numero: "1234-5"
});
pessoaFisica2.abrirConta({
    nome: "Leo",
    email: "leo@teste.com",
    numero: "6789-0"
});
pessoaJuridica1.abrirConta({
    nome: "Smartts Utilities",
    email: "smarttsutilities@smartts.com",
    numero: "12121-2"
});
pessoaJuridica2.abrirConta({
    nome: "CEDAE",
    email: "cedae@cedae.com",
    numero: "34343-4"
});
