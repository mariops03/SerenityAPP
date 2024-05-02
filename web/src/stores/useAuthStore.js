// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    authenticate(status) {
      this.isAuthenticated = status;
    },
    logout() {
      this.isAuthenticated = false;
    }
  }
});
