import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Bienvenue sur le <span className="text-indigo-600">Chat App</span>
                </h1>

                {showLogin ? <LoginForm /> : <RegisterForm />}

                <p className="mt-6 text-sm text-gray-600">
                    {showLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}{" "}
                    <button
                        onClick={() => setShowLogin(!showLogin)}
                        className="text-indigo-600 font-semibold hover:underline"
                    >
                        {showLogin ? "S’inscrire" : "Se connecter"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default App;
