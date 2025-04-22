import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  favorites: [],
  addToCart: (product) =>
    set((state) => ({cart: [...state.cart, product]}))
}))

export const useAuthStore = create((set, get) => {
  const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
  return {
    user: null,
    users: storedUsers,
    authActive: false,

    register: (newUser) => {
      const { users } = get();

      const updatedUsers = [...users, newUser]
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      set({users: updatedUsers})
      return null
    },
    login: (username, password) => {

      if (username && password) {
        localStorage.setItem('auth', 'true')
        return null
      }

      const { users } = get()
      const foundUser = users.find((u) => u.username === username && u.password === password)
      if (!foundUser) {
        return alert("Неправильный логин или пароль")
      }

      alert("Успешно")
      set({ user: foundUser })
      return null;
    },
    logout: () =>{
      localStorage.removeItem('users');
      set({ authActive : false})
    }
  }
})

