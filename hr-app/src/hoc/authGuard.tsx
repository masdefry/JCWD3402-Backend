'use client';
import { ComponentType, useEffect } from 'react';
import useAuthStore from '@/stores/authStore';

function withAuthGuard<P extends object>(
  WrappedComponent: ComponentType,
  allowedDepartments: string[],
  allowedPositions: string[]
) {
  return function AuthGuardComponent(props: P) {
    const { department, position } = useAuthStore();
    console.log(allowedDepartments);
    console.log(department);
    console.log(allowedPositions);
    console.log(position);

    useEffect(() => {
      if (
        !allowedDepartments.includes(department) ||
        !allowedPositions.includes(position)
      )
        alert('Unauthorize User');
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withAuthGuard;
