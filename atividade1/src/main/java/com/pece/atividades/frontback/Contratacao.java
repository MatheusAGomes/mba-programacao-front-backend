package com.pece.atividades.frontback;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Contratacao {

    private BigDecimal valor;

    private LocalDate dataContratacao;

    private Pacote pacote;

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public LocalDate getDataContratacao() {
        return dataContratacao;
    }

    public void setDataContratacao(LocalDate dataContratacao) {
        this.dataContratacao = dataContratacao;
    }

    public Pacote getPacote() {
        return pacote;
    }

    public void setPacote(Pacote pacote) {
        this.pacote = pacote;
    }
}
