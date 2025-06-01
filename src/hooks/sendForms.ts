import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
/**
 * Envia os dados do formulário para o Firestore.
 *
 * @param {Record<string, unknown>} formData - Os dados do formulário a serem enviados.
 * @returns {Promise<void>} - Uma promessa que resolve quando o envio for concluído.
 * @throws {Error} - Se ocorrer um erro ao enviar os dados.
 */
export const sendFormToFirebase = async (
  formData: Record<string, unknown>
): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, "forms"), formData);
    console.log("Formulário enviado com sucesso! ID do documento:", docRef.id);
  } catch (error) {
    console.error("Erro ao enviar o formulário:", error);
    throw new Error("Não foi possível enviar o formulário.");
  }
};
