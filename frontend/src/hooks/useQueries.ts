import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitContactForm(name, email, phone, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}

export function useBookDemo() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      preferredTime,
    }: {
      name: string;
      phone: string;
      preferredTime: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.bookDemo(name, phone, preferredTime);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['demoBookings'] });
    },
  });
}
