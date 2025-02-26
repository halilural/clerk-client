/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';
import { Roles } from '@/types/globals';

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = await auth();

  if (!userId) {
    return { message: 'No Logged In User' };
  }

  const client = await clerkClient();

  try {
    const role: Roles = 'user';

    const res = await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        applicationName: formData.get('applicationName'),
        applicationType: formData.get('applicationType'),
        role: role,
      },
    });
    return { message: res.publicMetadata };
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' };
  }
};
