import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TUseAuthStore = {
  token: string;
  fullName: string;
  department: string;
  position: string;
  setAuth: ({
    token,
    fullName,
    department,
    position,
  }: {
    token: string;
    fullName: string;
    department: string;
    position: string;
  }) => void;
};

const useAuthStore = create<TUseAuthStore>()(
  persist(
    (set) => ({
      token: '',
      fullName: '',
      department: '',
      position: '',

      setAuth: ({
        token,
        fullName,
        department,
        position,
      }: Pick<
        TUseAuthStore,
        'fullName' | 'token' | 'department' | 'position'
      >) => set({ token, fullName, department, position }),
    }),
    {
      name: 'token',
      partialize: (state: TUseAuthStore) => ({
        token: state?.token,
      }),
    }
  )
);

export default useAuthStore;
