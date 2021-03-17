package br.com.ifsul.trabalhoSI.feature;

import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import org.springframework.stereotype.Service;

@Service
public class CriptografiaAssimetrica {

    public String metodo(String texto) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
    KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
    keyPairGenerator.initialize(1024);
    KeyPair keyPair = keyPairGenerator.generateKeyPair();

    Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");

    cipher.init(Cipher.ENCRYPT_MODE, keyPair.getPublic());
    byte[] textoCriptografado = cipher.doFinal(texto.getBytes());

    String cipherText = Base64.getEncoder().encodeToString(textoCriptografado);

    cipher.init(Cipher.DECRYPT_MODE, keyPair.getPrivate());
    byte[] textoDescriptografado = cipher.doFinal(Base64.getDecoder().decode(cipherText));
    String response = new String(textoDescriptografado);
    return response;
    }
}
