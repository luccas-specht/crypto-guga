package br.com.ifsul.trabalhoSI.feature;


import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Service;

@Service
public class CriptografiaSimetrica {
    public void metodo() {
        try {
            KeyGenerator keygenerator = KeyGenerator.getInstance("DES");
            SecretKey chaveSecreta = keygenerator.generateKey();

            // Cria a forma de criptografia
            Cipher cifraDES= Cipher.getInstance("DES/ECB/PKCS5Padding");

            byte[] textoBytes = "Exemplo de texto puro".getBytes();

            // Inicializa a cifra para o processo de encriptação
            cifraDES.init(Cipher.ENCRYPT_MODE, chaveSecreta);
            // Texto encriptado
            byte[] textoEncriptado = cifraDES.doFinal(textoBytes);

            // Inicializa a cifra também para o processo de decriptação
            cifraDES.init(Cipher.DECRYPT_MODE, chaveSecreta);
            // Decriptografa o texto
            byte[] textoDecriptografado = cifraDES.doFinal(textoEncriptado);

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        }
    }

}
