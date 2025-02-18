import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { createUserProfile, assignUserToGroup } from '../../../utils/userManagement';

export async function signUpNewClient(email: string, password: string, groupId?: string) {
  try {
    // Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Create user profile in Firestore
    const userProfile = await createUserProfile(user.uid, email, 'client');

    // If groupId provided, assign user to group
    if (groupId) {
      await assignUserToGroup(user.uid, groupId);
    }

    return userProfile;
  } catch (error) {
    console.error('Error creating new client:', error);
    throw error;
  }
} 