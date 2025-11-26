/* SOLID: OCP (Open/Closed Principle)
*/

class EmailService {
    sendWelcome(email) {
      console.log(`[EMAIL] Enviando boas-vindas para: ${email}`);
    }
  }
  

  class WhatsAppService {
    sendWelcome(email) {
      console.log(`[WHATSAPP] Enviando boas-vindas para: ${email}`);
    }
  }