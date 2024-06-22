import { SafeAreaView, ViewProps } from 'react-native';
import React from 'react';
import { cn } from '@/lib/cn';

export function Container({ children, className }: ViewProps) {
  return (
    <SafeAreaView className={cn(styles.container, className, 'bg-background')}>
      {children}
    </SafeAreaView>
  );
}

const styles = {
  container: 'flex flex-1 p-6',
};
