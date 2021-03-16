package br.com.ifsul.trabalhoSI.feature;


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
    public void metodo() {
        try {
            String senha="senhaDosGugu";
            Key chaveSecreta =new SecretKeySpec(senha.getBytes(),0, 8, "DES");

            byte[] textoBytes = "Exemplo de texto puro".getBytes();
            String textoNormal = new String(textoBytes);

            // Cria a forma de criptografia
            Cipher cifraDES= Cipher.getInstance("DES/ECB/PKCS5Padding");

            // Inicializa a cifra para o processo de encriptação
            cifraDES.init(Cipher.ENCRYPT_MODE, chaveSecreta);
            byte[] textoEncriptadoBytes = cifraDES.doFinal(textoBytes);
            String textoEncriptado=new String(textoEncriptadoBytes);

            // Inicializa a cifra também para o processo de decriptação
            cifraDES.init(Cipher.DECRYPT_MODE, chaveSecreta);
            byte[] textoDecriptografadoBytes = cifraDES.doFinal(textoEncriptadoBytes);
            String textoDecriptografado= new String(textoDecriptografadoBytes);
            return;
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
