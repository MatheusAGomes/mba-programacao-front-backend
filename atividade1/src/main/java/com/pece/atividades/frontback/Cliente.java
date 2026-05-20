package com.pece.atividades.frontback;

import java.time.LocalDate;
import java.util.List;

public class Cliente {

    private String nome;

    private LocalDate dataNascimento;

    private List<Contratacao> contratacoes;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public List<Contratacao> getContratacoes() {
        return contratacoes;
    }

    public void setContratacoes(List<Contratacao> contratacoes) {
        this.contratacoes = contratacoes;
    }
}
