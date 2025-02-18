import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { UserProfile, ClientGroup } from '../types/user';

export async function createUserProfile(uid: string, email: string, role: 'client' | 'admin' | 'manager') {
  const userProfile: UserProfile = {
    uid,
    email,
    role,
    name: email.split('@')[0], // Default name from email
    organizationId: 'sandler-digital',
    accessLevel: role === 'admin' ? 10 : 1
  };

  await setDoc(doc(db, 'users', uid), userProfile);
  return userProfile;
}

export async function assignUserToGroup(userId: string, groupId: string) {
  // Update user profile
  await updateDoc(doc(db, 'users', userId), {
    clientGroupId: groupId
  });

  // Add user to group's client list
  const groupRef = doc(db, 'clientGroups', groupId);
  const groupDoc = await getDoc(groupRef);
  
  if (groupDoc.exists()) {
    const groupData = groupDoc.data() as ClientGroup;
    if (!groupData.clients.includes(userId)) {
      await updateDoc(groupRef, {
        clients: [...groupData.clients, userId]
      });
    }
  }
}

export async function createClientGroup(name: string, managerIds: string[] = []) {
  const groupData: ClientGroup = {
    id: `group-${Date.now()}`,
    name,
    clients: [],
    managers: managerIds,
    settings: {
      assessmentTypes: ["basic"],
      features: ["assessments"],
      customization: {}
    }
  };

  await setDoc(doc(db, 'clientGroups', groupData.id), groupData);
  return groupData;
} 