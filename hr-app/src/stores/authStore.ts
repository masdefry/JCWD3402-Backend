import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TUseAuthStore = {
  token: string;
  fullName: string;
  setAuth: ({ token, fullName }: { token: string; fullName: string }) => void;
};

const useAuthStore = create<TUseAuthStore>()(
  persist(
    (set) => ({
      token: '',
      fullName: '',

      setAuth: ({
        token,
        fullName,
      }: Pick<TUseAuthStore, 'fullName' | 'token'>) => set({ token, fullName }),
    }),
    {
      name: 'token',
      partialize: (state: TUseAuthStore) => ({
        token: state?.token
      }),
    }
  )
);

export default useAuthStore;
