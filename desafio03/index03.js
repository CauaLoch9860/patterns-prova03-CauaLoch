/* GRASP: Polimorfismo
*/

class UserService {
    constructor(notificationService) {
      this.notificationService = notificationService;
    }
  
    createUser(userData) {
      if (!UserValidator.isValidEmail(userData.email)) {
        throw new Error("Email inválido");
      }
  
      console.log("Usuário criado:", userData.name);
  
      this.notificationService.sendWelcome(userData.email); 
    }
  }