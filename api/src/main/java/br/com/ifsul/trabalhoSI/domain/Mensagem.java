package br.com.ifsul.trabalhoSI.domain;

public class Mensagem {

    private String texto;
    private String senha;

    public Mensagem(String texto, String senha) {
        this.texto = texto;
        this.senha = senha;
    }

    public Mensagem() {
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
