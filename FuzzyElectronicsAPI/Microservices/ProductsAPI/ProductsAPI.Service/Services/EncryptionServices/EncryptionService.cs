using System.Security.Cryptography;
using System.Text;

namespace ProductsAPI.Service.Services.EncryptionServices
{
    public class EncryptionService : IEncryptionService
    {


        private readonly byte[] EncryptionKeyBytes = Convert.FromBase64String(Environment.GetEnvironmentVariable("SECRET_KEY"));


        /// <summary>
        /// An AES encryption algorhitm
        /// </summary>
        /// <returns>Encrypted string</returns>

        public string Encrypt(string plainText)
        {
            using (Aes aesAlg = Aes.Create())
            {
                aesAlg.IV = new byte[aesAlg.BlockSize / 8];

                ICryptoTransform encryptor = aesAlg.CreateEncryptor(EncryptionKeyBytes, aesAlg.IV);

                using (var msEncrypt = new MemoryStream())
                {
                    using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                    {
                        using (var swEncrypt = new StreamWriter(csEncrypt))
                        {
                            swEncrypt.Write(plainText);
                        }
                    }
                    return Convert.ToBase64String(msEncrypt.ToArray());
                }
            }
        }

        /// <summary>
        /// An AES decryption algorhitm
        /// </summary>
        /// <returns>Decrypted string</returns>

        public string Decrypt(string cipherText)
        {
            using (Aes aesAlg = Aes.Create())
            {
                aesAlg.IV = new byte[aesAlg.BlockSize / 8]; // Use the same initialization vector as used for encryption

                ICryptoTransform decryptor = aesAlg.CreateDecryptor(EncryptionKeyBytes, aesAlg.IV);

                using (var msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText)))
                {
                    using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {
                        using (var srDecrypt = new StreamReader(csDecrypt))
                        {
                            return srDecrypt.ReadToEnd();
                        }
                    }
                }
            }
        }
    }
}
