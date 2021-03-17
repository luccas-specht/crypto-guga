package br.com.ifsul.trabalhoSI.feature;


import br.com.ifsul.trabalhoSI.domain.Mensagem;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.stereotype.Service;

@Service
public class CriptografiaSimetrica {
    public String metodo(Mensagem mensagem) throws IllegalBlockSizeException, InvalidKeyException, BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException {
        String senha = mensagem.getSenha();
        Key chaveSecreta = new SecretKeySpec(senha.getBytes(), 0, 8, "DES");
        byte[] textoBytes = mensagem.getTexto().getBytes();
        byte[] mensagemCriptografada = criptografar(chaveSecreta, textoBytes);
        //primeiro recebe senha e texto, retorna mensagem criptografada


        byte[] mensagemDescriptografada=descriptografar(chaveSecreta, mensagemCriptografada);
        String response=new String(mensagemDescriptografada);
        return response;
        //segundo recebe senha e mensagem criptografada, retorna mensagem correta
    }

    public byte[] criptografar(Key chave, byte[] mensagemBytes) throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
        Cipher cifraDES = Cipher.getInstance("DES/ECB/PKCS5Padding");
        cifraDES.init(Cipher.ENCRYPT_MODE, chave);
        return cifraDES.doFinal(mensagemBytes);
    }

    public byte[] descriptografar(Key chave, byte[] mensagemCriptografada) throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
        Cipher cifraDES = Cipher.getInstance("DES/ECB/PKCS5Padding");
        cifraDES.init(Cipher.DECRYPT_MODE, chave);
        return cifraDES.doFinal(mensagemCriptografada);
    }
}
