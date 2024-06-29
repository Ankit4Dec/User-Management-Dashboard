import create from 'zustand';

interface UserState {
  user: any;
  setUser: (user: any) => void;
}

export const useStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
