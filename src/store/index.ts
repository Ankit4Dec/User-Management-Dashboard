import create from 'zustand';
interface UserState {
  user: { email: string } | null;
  setUser: (user: { email: string }) => void;
}

export const useStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
