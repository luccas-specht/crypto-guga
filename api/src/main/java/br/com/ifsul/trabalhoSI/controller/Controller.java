package br.com.ifsul.trabalhoSI.controller;

import br.com.ifsul.trabalhoSI.feature.CriptografiaSimetrica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/criptografia")
public class Controller {

    @Autowired
    private CriptografiaSimetrica criptografiaSimetrica;

    @GetMapping("/simetrico")
    public void simetrico(){
        criptografiaSimetrica.metodo();
    }
}
