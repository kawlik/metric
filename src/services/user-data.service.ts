import { Subject } from '@mui/icons-material';
import { updateProfile, User } from 'firebase/auth';
import { doc, documentId, getDocs, query, setDoc, where } from 'firebase/firestore';
import { UserDataType } from '../types/@';
import { FirebaseService, FirestoreService } from './@.service';

// define service
class UserDataService {
	private get userProfileDoc() {
		return doc(
			FirestoreService.collectionUserData,
			FirebaseService.Auth.currentUser?.phoneNumber!,
		);
	}

	getUsers = async (participants?: string[]): Promise<[string, UserDataType][]> => {
		if (!participants?.length) return [];

		const docQuery = query(
			FirestoreService.collectionUserData,
			where(documentId(), 'in', participants),
		);

		const snapshot = await getDocs(docQuery);

		return snapshot.docs.map((doc) => [doc.id, doc.data() as UserDataType]);
	};

	saveUser = async (userData: UserDataType) => {
		await updateProfile(FirebaseService.Auth.currentUser!, {
			displayName: userData.displayName,
			photoURL: userData.displayPict,
		});

		return setDoc(this.userProfileDoc, userData);
	};
}

// export service
export default new UserDataService();
