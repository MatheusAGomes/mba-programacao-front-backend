package com.pece.atividades.frontback;

public class TransladoAereo extends ItemPacote {

    private String companhiaAerea;

    private Long numeroVoo;

    public String getCompanhiaAerea() {
        return companhiaAerea;
    }

    public void setCompanhiaAerea(String companhiaAerea) {
        this.companhiaAerea = companhiaAerea;
    }

    public Long getNumeroVoo() {
        return numeroVoo;
    }

    public void setNumeroVoo(Long numeroVoo) {
        this.numeroVoo = numeroVoo;
    }
}
