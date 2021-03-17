package br.com.ifsul.trabalhoSI.controller;

import br.com.ifsul.trabalhoSI.domain.Mensagem;
import br.com.ifsul.trabalhoSI.feature.CriptografiaSimetrica;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/criptografia")
public class Controller {

    @Autowired
    private CriptografiaSimetrica criptografiaSimetrica;

    @PostMapping("/simetrico")
    public String simetrico(@RequestBody Mensagem mensagem) throws InvalidKeyException, BadPaddingException, NoSuchAlgorithmException, IllegalBlockSizeException, NoSuchPaddingException {
        return criptografiaSimetrica.metodo(mensagem);
    }
}
