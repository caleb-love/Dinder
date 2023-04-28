import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useMemo,
} from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
    GoogleAuthProvider,
    auth,
    signInWithCredential,
    signOut,
    onAuthStateChanged,
} from "../firebase";

const AuthContext = createContext({});

WebBrowser.maybeCompleteAuthSession();

const config = {
    androidClientId: '898054924165-34jj9u5k0mlgh9ku2gk04btutqbj2ai5.apps.googleusercontent.com',
    iosClientId: '898054924165-iucbbr3m02n2mgidoetc4785i8kacfq2.apps.googleusercontent.com',
    expoClientId: '',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
}

export const AuthProvider = ({ children }) => {
    const [resquest, response, promptAsync] = Google.useAuthRequest(config);
    const [error, setError] = useState();
    const [user, setUser] = useState();
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }

            setLoadingInitial(false);
        });
    }, []);

    useEffect(() => {
        if (response?.type === "success") {
            const { idToken, accessToken } = response?.authentication;
            const credential = GoogleAuthProvider.credential(idToken, accessToken);
            signInWithCredential(auth, credential);
        } else {
            setError(response?.error);
        }

        setLoading(false);
    }, [response]);

    const logout = () => {
        setLoading(true);
        signOut(auth)
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            logout,
            signinWithGoogle: () => {
                setLoading(true);
                promptAsync({ showInRevents: true });
            },
        }),
        [user, loading, error]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {loadingInitial ? null : children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}